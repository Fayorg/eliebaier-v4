'use client';

import { cn } from '@/lib/cn';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

interface SidebarItem {
	id: string;
	text: string;
	isSubtitle: boolean;
}
export function Sidebar() {
	const [loading, setLoading] = useState(true);
	const [sidebarContent, setSidebarContent] = useState<SidebarItem[]>([]);
	const [activeId, setActiveId] = useState<string>();

	const observer = useRef<IntersectionObserver | null>(null);

	useEffect(() => {
		document.querySelectorAll("h1[sidebar-visible='true'], h2[sidebar-visible='true']").forEach((el, i) => {
			setSidebarContent((prev) => [
				...prev,
				{
					id: el.getAttribute('sidebar-content')?.toString().toLowerCase().toWellFormed().replaceAll(' ', '-').replaceAll("'", '') || '',
					text: el.getAttribute('sidebar-content') || '',
					isSubtitle: el.getAttribute('sidebar-subtitle') == 'true' ? true : false,
				},
			]);
		});
		setLoading(false);

		return () => {
			setSidebarContent([]);
		};
	}, []);

	useEffect(() => {
		if (typeof window === 'undefined') {
			return;
		}

		if (observer.current) {
			observer.current.disconnect();
		}

		observer.current = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveId(entry.target.getAttribute('sidebar-content')?.toString().toLowerCase().toWellFormed().replaceAll(' ', '-').replaceAll("'", ''));
					}
				});
			},
			{
				rootMargin: '0px 0px -80% 0px',
				threshold: 0.0,
			}
		);

		document.querySelectorAll("h1[sidebar-visible='true'], h2[sidebar-visible='true']").forEach((el) => {
			if (el) observer.current!.observe(el);
		});

		return () => {
			if (observer.current) {
				observer.current.disconnect();
			}
		};
	}, [sidebarContent]);

	if (loading) {
		return (
			<>
				<div className="h-3 bg-white/20 rounded-md w-3/4 mb-2 mt-2 animate-pulse"></div>
				<div className="h-3 bg-white/20 rounded-md w-4/4 mb-2 animate-pulse"></div>
				<div className="h-3 bg-white/20 rounded-md w-3/4 mb-2 ml-6 animate-pulse"></div>
				<div className="h-3 bg-white/20 rounded-md w-2/4 mb-2 animate-pulse"></div>
				<div className="h-3 bg-white/20 rounded-md w-4/4 mb-2 animate-pulse"></div>
			</>
		);
	}

	return (
		<>
			{sidebarContent.length > 0 &&
				sidebarContent.map((el, i) => (
					<Link href={`#${el.id}`} key={i}>
						<p className={cn('text-sm', el.isSubtitle && 'ml-6', activeId == el.id ? 'text-white' : 'text-white/60', i == 0 && !activeId && 'text-white')}>{el.text}</p>
					</Link>
				))}
		</>
	);
}
