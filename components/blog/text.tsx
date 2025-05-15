import { formatBlogPostTitle } from '@/lib/utils';
import { Pin } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

export function H1({ children }: { children: ReactNode }) {
	return (
		<Link href={'#' + formatBlogPostTitle(children?.toString() || '')} className="w-full" id={formatBlogPostTitle(children?.toString() || '')}>
			<h1 className="font-sans text-4xl mt-12 mb-4 group" sidebar-visible="true" sidebar-content={children}>
				<span className="group-hover:underline">{children}</span>
				<Pin className="inline ml-2 opacity-0 group-hover:opacity-20 rotate-z-12" size={24} color="white" />
			</h1>
		</Link>
	);
}

export function H2({ children }: { children: ReactNode }) {
	return (
		<Link href={'#' + formatBlogPostTitle(children?.toString() || '')} className="w-full" id={formatBlogPostTitle(children?.toString() || '')}>
			<h2 className="font-sans text-2xl mt-8 group" sidebar-visible="true" sidebar-content={children} sidebar-subtitle="true">
				<span className="group-hover:underline">{children}</span>
				<Pin className="inline ml-2 opacity-0 group-hover:opacity-20 rotate-z-12" size={24} color="white" />
			</h2>
		</Link>
	);
}

export function P({ children }: { children: ReactNode }) {
	return <p className="text-base text-white/80 mb-6 mt-2">{children}</p>;
}
