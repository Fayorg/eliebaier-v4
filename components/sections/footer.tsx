import Link from 'next/link';
import { GithubIcon, LinkedInIcon } from '../utils/icons';
import { BLACKHOLE_VIDEO, ELIE_GITHUB, ELIE_LINKEDIN } from '@/config/links';

export function Footer({ includeSeparator = true }: { includeSeparator?: boolean }) {
	return (
		<>
			{includeSeparator && <div className="w-full h-4 md:h-14 bg-[linear-gradient(to_bottom,_theme('colors.background')_0%,_theme('colors.background')_50%,_theme('colors.black')_80%)]"></div>}
			<section className="bg-gradient-to-b from-black to-slate-950 relative sm:h-[38rem] z-10 h-[48rem]">
				<div className="h-[38rem] w-full">
					<video playsInline autoPlay loop muted className="[filter:sepia(1)_saturate(6)_hue-rotate(195deg)_brightness(1.1)] m-auto w-full h-full object-cover md:max-w-[1440px] sm:max-h-[40rem] md:max-h-[40.7rem] lg:max-h-[40.3rem]" src={BLACKHOLE_VIDEO} />
				</div>
				<div className="-translate-y-[19rem] backdrop-blur-3xl h-[19rem] absolute w-full" />
				<footer className="-translate-y-[19rem] max-w-[69rem] w-11/12 m-auto pt-8 relative">
					<div className="flex gap-8 sm:gap-16 sm:flex-row flex-col">
						<div className="w-full sm:w-2/5">
							<h3 className="font-sans text-2xl font-bold">Elie Baier</h3>
							<p className="text-sm text-white/80">To engineer is to bring clarity to chaos - where each line of code, every design, serves a meaningful and lasting purpose</p>
							<div className="mt-8 flex flex-row gap-4">
								<Link href={ELIE_GITHUB}>
									<div className="text-white/80 w-5 h-5 cursor-pointer hover:text-white/100 transition-all duration-200">
										<GithubIcon />
									</div>
								</Link>
								{/* <Link href={'#'}>
									<div className="text-white/80 w-5 h-5 cursor-pointer hover:text-white/100 transition-all duration-200">
										<XIcon />
									</div>
								</Link> */}
								<Link href={ELIE_LINKEDIN}>
									<div className="text-white/80 w-5 h-5 cursor-pointer hover:text-white/100 transition-all duration-200">
										<LinkedInIcon />
									</div>
								</Link>
							</div>
						</div>
						<div className="w-full sm:w-3/5 flex flex-row">
							<div className="w-1/2 flex flex-col gap-2">
								<h4 className="text-sm text-white/80">General</h4>
								<div>
									<Link href={'/'} className="text-white/90 hover:text-white/100 transition-all duration-200">
										<p className="text-sm">Elie Baier</p>
									</Link>
									<Link href={'/me'} className="text-white/90 hover:text-white/100 transition-all duration-200">
										<p className="text-sm">About me</p>
									</Link>
								</div>
							</div>
							<div className="w-1/2">
								<h4 className="text-sm text-white/80">Resources</h4>
								<div>
									<Link href={'/blog'} className="text-white/90 hover:text-white/100 transition-all duration-200">
										<p className="text-sm">Blog</p>
									</Link>
									<Link href={'https://legacy.eliebaier.ch'} className="text-white/90 hover:text-white/100 transition-all duration-200">
										<p className="text-sm">Legacy</p>
									</Link>
								</div>
							</div>
						</div>
						{/* <div className="w-1/4">
									<h3 className="font-sans text-lg font-bold">Subscribe to Elie's newsletter</h3>
									<p className="text-sm text-white/80">Pinky promise, no spam 😇</p>
									<Link href={'#'} className="block border-1 border-white/15 hover:border-white/35 transition-all duration-200 px-4 py-3 w-fit mt-10 rounded-xl">
										<p className="text-base text-white">Subscribe</p>
									</Link>
								</div> */}
					</div>
				</footer>

				<div className="flex justify-center absolute bottom-5 left-0 right-0 border-t-1 max-w-[69rem] w-11/12 m-auto pt-5 border-white/60">
					<h3 className="text-sm text-white/80">Copyright © {new Date().getFullYear()} Elie Baier. All rights reserved.</h3>
				</div>
			</section>
		</>
	);
}
