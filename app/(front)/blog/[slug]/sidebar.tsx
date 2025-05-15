"use client";

// TODO transform this into a server component for the major part (expect intersection observer)

import { cn } from "@/lib/cn";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface SidebarItem {
    id: string;
    text: string;
    isSubtitle: boolean;
}
export function Sidebar() {
    const [sidebarContent, setSidebarContent] = useState<SidebarItem[]>([]);
    const [activeId, setActiveId] = useState<string>();

    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        document
            .querySelectorAll(
                "h1[sidebar-visible='true'], h2[sidebar-visible='true']"
            )
            .forEach((el, i) => {
                setSidebarContent((prev) => [
                    ...prev,
                    {
                        id:
                            el
                                .getAttribute("sidebar-content")
                                ?.toString()
                                .toLowerCase()
                                .toWellFormed()
                                .replaceAll(" ", "-")
                                .replaceAll("'", "") || "",
                        text: el.getAttribute("sidebar-content") || "",
                        isSubtitle: el.id == "subtitle",
                    },
                ]);
            });

        return () => {
            setSidebarContent([]);
        };
    }, []);

    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }

        if (observer.current) {
            observer.current.disconnect();
        }

        observer.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(
                            entry.target
                                .getAttribute("sidebar-content")
                                ?.toString()
                                .toLowerCase()
                                .toWellFormed()
                                .replaceAll(" ", "-")
                                .replaceAll("'", "")
                        );
                    }
                });
            },
            {
                rootMargin: "0px 0px -80% 0px",
                threshold: 0.0,
            }
        );

        document
            .querySelectorAll(
                "h1[sidebar-visible='true'], h2[sidebar-visible='true']"
            )
            .forEach((el) => {
                if (el) observer.current!.observe(el);
            });

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [sidebarContent]);

    return (
        <>
            {sidebarContent.length > 0 &&
                sidebarContent.map((el, i) => (
                    <Link href={`#${el.id}`} key={i}>
                        <p
                            className={cn(
                                "text-sm",
                                el.isSubtitle && "ml-6",
                                activeId == el.id
                                    ? "text-white"
                                    : "text-white/40",
                                i == 0 && !activeId && "text-white"
                            )}
                        >
                            {el.text}
                        </p>
                    </Link>
                ))}
        </>
    );
}
