import { Post } from '@/app/generated/prisma';
import { Footer } from '@/components/sections/footer';
import { getFeaturedPosts } from '@/sdk/blog/post';
import { Bell, Book, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default async function BlogPage() {
	const featuredPosts = await getFeaturedPosts(3);

	return (
		<>
			<div className="max-w-[69rem] w-11/12 m-auto pb-4 md:pb-0">
				<div className="border-b-1 border-white/20 pb-8 flex flex-col md:flex-row justify-between mt-8">
					<div className="w-full md:w-7/12">
						<div className="flex flex-row justify-between items-center">
							<h1 className="font-sans text-4xl md:text-5xl">Elie's Blog</h1>
							<Link href={'#'} className="block md:hidden text-white/80 hover:text-white/100 transition-all duration-200 border-1 border-white/15 hover:border-white/35 px-2 py-2 rounded-full">
								<Bell size={20} strokeWidth={1.5} />
							</Link>
						</div>
						<p className="text-lg text-white/80 mt-2">A place for thoughts too big to keep in my head - about how things scale, fly, and sometimes fail. Shared in the spirit of learning out loud.</p>
					</div>
					<div className="hidden md:block">
						<Link href={'#'} className="border-1 border-white/15 hover:border-white/35 transition-all duration-200 px-4 py-3 w-fit mt-10 rounded-xl flex gap-2 items-center">
							<p className="text-base text-white">Subscribe</p>
							<Bell size={20} strokeWidth={1.5} />
						</Link>
					</div>
				</div>

				<div className="mt-8">
					<h2 className="text-3xl md:text-4xl font-sans">Featured posts</h2>
					<div className="mt-4 flex flex-col">
						{featuredPosts.map((post) => (
							<BlogPostFeaturedCard key={post.id} title={post.title} description={post.description} imageUrl={post.imageUrl} createdAt={post.createdAt} readDuration={post.readDuration} slug={post.slug} />
						))}
					</div>
				</div>

				<div className="mt-8">
					<h2 className="text-3xl md:text-4xl font-sans">All posts</h2>
					<div className="mt-4 flex flex-col"></div>
				</div>
			</div>

			<Footer />
		</>
	);
}

function BlogPostFeaturedCard({ title, description, imageUrl, createdAt, readDuration, slug }: Pick<Post, 'title' | 'description' | 'createdAt' | 'slug' | 'readDuration' | 'imageUrl'>) {
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
