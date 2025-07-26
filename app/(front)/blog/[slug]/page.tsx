import { Book, Heart, PencilRuler } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote-client/rsc';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Sidebar } from './sidebar';
import { isAtLeastOneDayAfter } from '@/lib/date';
import { Metadata } from 'next';
import { H1, H2, P } from '@/components/blog/text';
import { IMG } from '@/components/blog/image';
import { Footer } from '@/components/sections/footer';
import { ELIE_PROFILE_PIC } from '@/config/links';
import { DottedList } from '@/components/blog/list';
import { getAllPosts, getPostBySlug } from '@/lib/blog/posts';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
	const { slug } = await params;

	const post = getPostBySlug(slug);
	if (!post) return {};

	const { title, image, description } = post;
	return {
		title,
		description,
		openGraph: {
			title,
			description,
			url: `https://eliebaier.com/blog/${slug}`,
			images: [
				{
					url: image,
					width: 1200,
					height: 630,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [image],
		},
		icons: {
			icon: '/favicon.ico',
			shortcut: '/favicon.ico',
			apple: '/favicon.ico',
		},
		metadataBase: new URL('https://eliebaier.com'),
		alternates: {
			canonical: `https://eliebaier.com/blog/${slug}`,
		},
	};
}

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;

	const post = getPostBySlug(slug);
	if (!post) return notFound();

	const { title, image, description, readDuration, date, content } = post;

	return (
		<>
			<main className="max-w-[69rem] w-full m-auto">
				{image && (
					<div className="w-full h-64 relative">
						<Image src={image} fill alt={title} className="object-cover" priority />
						<div className="absolute w-full h-full z-10 bg-gradient-to-b from-transparent to-background" />
					</div>
				)}
				<div className="w-11/12 m-auto">
					<h1 className="font-sans text-3xl md:text-5xl mt-4 font-bold">{title}</h1>
					<p className="text-lg text-white/80">{description}</p>

					<div className="flex flex-row py-8 justify-between border-b-1 border-white/20">
						<div className="flex gap-4 items-center">
							<div className="rounded-full overflow-hidden">
								<Image src={ELIE_PROFILE_PIC} width={48} height={48} alt="Elie Baier" />
							</div>
							<div className="flex flex-col">
								<p className="font-sans text-xl font-bold ">Elie Baier</p>
								<div className="flex gap-0">
									<p className="text-base text-white/80 -mt-1">
										{date.getDate() +
											' ' +
											date.toLocaleString('default', {
												month: 'long',
											}) +
											' ' +
											date.getFullYear()}
									</p>
									{isAtLeastOneDayAfter(date, date) && (
										<div className="flex items-center -mt-1 gap-2 group">
											<PencilRuler size={16} className="inline ml-2 opacity-60" />
										</div>
									)}
								</div>
							</div>
						</div>
						<div className="flex flex-col items-end justify-center gap-1">
							{readDuration && (
								<div className="flex gap-2 items-center opacity-80">
									<Book size={18} />
									<p className="text-sm text-white">{readDuration} min read</p>
								</div>
							)}

							{readDuration && (
								<div className="flex gap-2 items-center opacity-80">
									<Heart size={18} />
									<p className="text-sm text-white">{readDuration} likes</p>
								</div>
							)}
						</div>
					</div>

					<div className="w-full flex flex-row relative gap-8">
						<div className="pb-8 w-full md:w-9/12">
							<MDXRemote
								source={content}
								components={{
									h1: H1,
									h2: H2,
									h3: H2,
									h4: H2,
									h5: H2,
									h6: H2,
									p: P,
									img: IMG,
									ul: DottedList,
								}}
							/>
						</div>
						<div className="hidden md:flex w-3/12 sticky top-24 mt-12 h-fit border-1 rounded-2xl py-4 px-4 border-white/20 pr-8 flex-col gap-2">
							<Sidebar />
						</div>
					</div>
				</div>
			</main>

			<Footer />
		</>
	);
}

export async function generateStaticParams() {
	const posts = getAllPosts();

	return posts.map((post) => ({
		slug: post.slug,
	}));
}
