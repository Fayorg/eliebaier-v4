"server-only"

type SpotifyPlayerResponseBase = {
    device: {
        id: string,
        is_active: boolean,
        is_private_session: boolean,
        is_restricted: boolean
        name: string,
        type: string,
        volume_percent: number
        support_volume: boolean
    },
    repeat_state: string,
    shuffle_state: boolean,
    context: {
        type: string
        href: string,
        external_urls: {
            spotify: string
        },
        uri: string
    },
    timestamp: number
    progress_ms: number,
    is_playing: boolean
}

type SpotifyPlayerResponseTrackItem = SpotifyPlayerResponseBase & {
    currently_playing_type: "track",
    item: {
        artists: {
            name: string,
            url: string
        }[],
        available_markets: string[]
        disc_number: number,
        duration_ms: number
        explicit: boolean,
        external_ids: {
            isrc: string
            ean: string
            upc: string
        },
        external_urls: {
            spotify: string
        },
        href: string
        id: string
        is_playable: boolean,
        name: string,
        popularity: number,
        track_number: number,
        type: string,
        uri: string,
        is_local: boolean
    }
}

type SpotifyPlayerResponseEpisodeItem = SpotifyPlayerResponseBase & {
    currently_playing_type: "episode",
    item: {
        description: string,
        html_description: string,
        duration_ms: number
        explicit: boolean
        external_urls: {
            spotify: string
        }
        href: string
        id: string
        is_externally_hosted: boolean,
        is_playable: boolean,
        languages: string[]
        name: string,
        release_date: string,
        uri: string,
        type: string
    }
}

type SpotifyPlayerResponseOtherItem = SpotifyPlayerResponseBase & {
    currently_playing_type: "ad" | "unknown",
    item: null
}

type SpotifyPlayerResponse = SpotifyPlayerResponseTrackItem | SpotifyPlayerResponseEpisodeItem | SpotifyPlayerResponseOtherItem;

async function getAccessToken(): Promise<string> {
    const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + Buffer.from(process.env.SPOTIFY_CLIENT_ID + ":" + process.env.SPOTIFY_CLIENT_SECRET).toString("base64")
        },
        body: new URLSearchParams({
            grant_type: "refresh_token",
            refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!
        }),
    });

    return response.json().then(data => data.access_token);
}

export async function getNowPlaying(): Promise<Pick<SpotifyPlayerResponse, "timestamp" | "progress_ms" | "is_playing" | "repeat_state" | "shuffle_state" | "currently_playing_type"> & { item: { artists: string[], url: string, uri: string, name: string, id: string } } | null> {
    const accessToken = await getAccessToken();

    const response = await fetch("https://api.spotify.com/v1/me/player", {
        headers: {
            "Authorization": `Bearer ${accessToken}`,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch currently playing track");
    }

    const data = await response.json() as SpotifyPlayerResponse;

    if(data.device.is_private_session) return null;

    if(data.currently_playing_type !== "track" || !data.item) return null; // I never listen to podcasts on spotify so idc about the rest

    return {
        is_playing: data.is_playing,
        currently_playing_type: data.currently_playing_type,
        progress_ms: data.progress_ms,
        repeat_state: data.repeat_state,
        shuffle_state: data.shuffle_state,
        timestamp: data.timestamp,
        item: {
            artists: data.item.artists.map(artist => artist.name),
            url: data.item.external_urls.spotify,
            uri: data.item.uri,
            name: data.item.name,
            id: data.item.id
        }
    };
}