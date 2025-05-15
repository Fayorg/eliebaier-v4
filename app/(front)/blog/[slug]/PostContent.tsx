"use client";

import { useEffect, useState } from "react";

export function PostContent({ contentUrl }: { contentUrl: string }) {
    const [loading, setLoading] = useState<boolean>(true);
    const [content, setContent] = useState<string>("");

    async function loadContent() {
        const raw = await (await fetch(contentUrl)).text();

        setContent(raw);
    }

    useEffect(() => {
        loadContent().finally(() => setLoading(false));
    }, []);

    if (loading && content) {
        return (
            <div className="animate-pulse py-6 w-full space-y-4 overflow-hidden">
                <div className="h-6 bg-white/20 rounded-md w-3/4"></div>

                <div className="h-4 bg-white/20 rounded-md w-1/4"></div>

                <div className="h-48 bg-white/20 rounded-md w-full"></div>

                <div className="space-y-2">
                    <div className="h-4 bg-white/20 rounded-md w-full"></div>
                    <div className="h-4 bg-white/20 rounded-md w-full"></div>
                    <div className="h-4 bg-white/20 rounded-md w-5/6"></div>
                </div>

                <div className="space-y-2">
                    <div className="h-4 bg-white/20 rounded-md w-full"></div>
                    <div className="h-4 bg-white/20 rounded-md w-4/5"></div>
                </div>

                <div className="space-y-2">
                    <div className="h-4 bg-white/20 rounded-md w-full"></div>
                    <div className="h-4 bg-white/20 rounded-md w-full"></div>
                    <div className="h-4 bg-white/20 rounded-md w-3/4"></div>
                </div>
            </div>
        );
    }

    return <div></div>;
}
