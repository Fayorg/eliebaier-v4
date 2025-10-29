import { Footer } from '@/components/sections/footer';
import { Bell, Book, Clock, MessageSquareWarning } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import AllPostsComponent from './all-posts';
import { ELIE_PROFILE_PIC } from '@/config/links';
import { getAllPosts } from '@/lib/blog/posts';

export default async function BlogPage() {
	const featured = getAllPosts();
	const posts = getAllPosts();

	return (
		<>
			<div className="max-w-[69rem] w-11/12 m-auto pb-4 md:pb-0 pt-20">
				<div className="border-b-1 border-white/20 pb-8 flex flex-col md:flex-row justify-between mt-8">
					<div className="w-full md:w-7/12">
						<div className="flex flex-row justify-between items-center">
							<h1 className="font-sans text-4xl md:text-5xl">Elie&apos;s Blog</h1>
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

				{!!featured && (
					<div className="mt-8">
						<h2 className="text-3xl md:text-4xl font-sans">Featured posts</h2>
						<div className="mt-4 flex flex-col gap-6">
							{featured.map((post) => (
								<BlogPostFeaturedCard key={post.slug} title={post.title} description={post.description} imageUrl={post.image} createdAt={post.date} readDuration={post.readDuration} slug={post.slug} />
							))}
						</div>
					</div>
				)}

				{!!posts && (
					<div className="mt-8">
						<AllPostsComponent posts={posts} />
					</div>
				)}

				{!posts && !featured && (
					<div className="mt-8 flex w-full bg-amber-500/90 rounded-lg py-3 px-4 items-center">
						<MessageSquareWarning className="mr-8 ml-4" size={40} />
						<div className="">
							<h2 className="text-3xl md:text-4xl font-sans">My blog is currently under maintenance</h2>
							<p className="text-lg text-white/80">Please come check it out again later</p>
						</div>
					</div>
				)}
			</div>

			<Footer />
		</>
	);
}

function BlogPostFeaturedCard({ title, description, imageUrl, createdAt, readDuration, slug }: { title: string; description: string; imageUrl: string; createdAt: Date; readDuration: string; slug: string }) {
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

export const metadata = {
	title: 'Blog — Elie Baier',
	description: 'A place for thoughts too big to keep in my head — about how things scale, fly, and sometimes fail. Shared in the spirit of learning out loud.',
	keywords: ['Elie Baier blog', 'Engineering blog', 'Computer Science blog', 'Systems design', 'Avionics', 'IoT projects', 'Embedded systems', 'Startup notes', 'Telemetry', 'Homelab', 'Tech writing', 'Learning in public'],
	authors: [{ name: 'Elie Baier', url: 'https://eliebaier.ch' }],
	creator: 'Elie Baier',
	metadataBase: new URL('https://eliebaier.ch'),
	openGraph: {
		title: 'Blog — Elie Baier',
		description: 'From rockets to real-time systems, I write about the things I build and the lessons I learn. Expect hardware, software, scale, and the occasional failure.',
		url: 'https://eliebaier.ch/blog',
		siteName: 'Elie Baier',
		images: [
			{
				url: ELIE_PROFILE_PIC,
				width: 1200,
				height: 1200,
				alt: 'Elie Baier Blog',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Blog — Elie Baier',
		description: 'A space for engineering notes, project breakdowns, and thoughts on systems, physics, and startups.',
		images: [ELIE_PROFILE_PIC],
	},
};
