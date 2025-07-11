'use client';

import { Post } from '@/app/generated/prisma';
import { Book, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function AllPostsComponent({ posts }: { posts: Post[] }) {
	const [search, setSearch] = useState('');

	return (
		<>
			<div className="flex flex-row justify-between items-center">
				<h2 className="text-3xl md:text-4xl font-sans">All posts</h2>
				<div className="flex items-center justify-center">
					<input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full mt-4 p-2 border border-white/20 rounded-lg bg-transparent text-white" />
				</div>
			</div>
			<div className="mt-4 flex flex-col gap-6">
				{posts
					.filter((post) => (post.title.includes(search) || post.description.includes(search) ? post : null))
					.map((post) => (
						<BlogPostCard key={post.id} title={post.title} description={post.description} imageUrl={post.imageUrl} createdAt={post.createdAt} readDuration={post.readDuration} slug={post.slug} />
					))}
			</div>
		</>
	);
}

function BlogPostCard({ title, description, imageUrl, createdAt, readDuration, slug }: Pick<Post, 'title' | 'description' | 'createdAt' | 'slug' | 'readDuration' | 'imageUrl'>) {
	return (
		<Link className="w-full flex flex-col md:flex-row gap-2 md:gap-8 justify-start" href={`/blog/${slug}`}>
			<div className="relative aspect-video w-full md:h-42 rounded-2xl overflow-hidden md:w-[298px]">
				<Image alt={title} fill src={imageUrl} className="object-cover" />
				<div className="absolute md:hidden h-8 px-2 bg-background bottom-2 left-2 flex items-center justify-center rounded-lg">
					<div className="md:hidden flex gap-1 items-center opacity-80">
						<Clock size={18} />
						<p className="text-sm text-white">{readDuration}</p>
					</div>
				</div>
			</div>
			<div className="flex flex-col justify-between mt-1 mb-2 w-full md:max-w-[calc(100%-306px)]">
				<div>
					<p className="text-base text-white/80 mb-1 hidden md:block">
						{createdAt.toLocaleString('default', {
							month: 'long',
						}) +
							' ' +
							createdAt.getDate() +
							', ' +
							createdAt.getFullYear()}
					</p>
					<h3 className="text-2xl md:text-3xl font-sans">{title}</h3>
					<p className="text-lg text-white/80">{description}</p>
				</div>
				<div className="hidden md:flex gap-2 items-center opacity-80">
					<div className="hidden md:flex gap-2 items-center opacity-80">
						<Book size={18} />
						<p className="text-sm text-white">{readDuration} min read</p>
					</div>
				</div>
			</div>
		</Link>
	);
}
