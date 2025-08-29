"server-only"

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

export async function getNowPlaying(): Promise<{ is_playing: boolean; item: { name: string; artists: { name: string, url: string }[], url: string } } | null> {
    const accessToken = await getAccessToken();

    const response = await fetch("https://api.spotify.com/v1/me/player", {
        headers: {
            "Authorization": `Bearer ${accessToken}`,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch currently playing track");
    }

    const data = await response.json();

    if(data.device.is_private_session) return null;

    return {
        is_playing: data.is_playing,
        item: {
            name: data.item.name,
            artists: data.item.artists.map((artist: any) => ({ name: artist.name, url: artist.external_urls.spotify })),
            url: data.item.external_urls.spotify
        }
    };
}