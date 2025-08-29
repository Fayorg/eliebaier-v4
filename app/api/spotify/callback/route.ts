import { notFound } from "next/navigation";
import { NextResponse } from "next/server";

// https://accounts.spotify.com/authorize?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=http://127.0.0.1:3000/api/spotify/callback&scope=user-read-currently-playing%20user-read-playback-state

export async function GET(req: Request) {
    if (process.env.NODE_ENV !== "development") {
        return notFound();
    }

    const { searchParams } = new URL(req.url);
    const code = searchParams.get("code");

    if (!code) {
        return NextResponse.json({ error: "Missing code" }, { status: 400 });
    }

    const basicAuth = Buffer.from(process.env.SPOTIFY_CLIENT_ID + ":" + process.env.SPOTIFY_CLIENT_SECRET).toString("base64");

    const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            Authorization: `Basic ${basicAuth}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            grant_type: "authorization_code",
            code,
            redirect_uri: "http://127.0.0.1:3000/api/spotify/callback",
        }),
    });

    const data = await response.json();

    return NextResponse.json({
        refresh_token: data.refresh_token,
        data,
    });
}
