import { BackgroundBlurredContainer } from '@/components/containers';
import { Footer } from '@/components/sections/footer';
import { GithubIcon, XIcon } from '@/components/utils/icons';
import ParticleBackground from '@/components/utils/particules-background';
import { EliesSignature } from '@/components/utils/signature';
import { DEPLOY, DEPLOY_GITHUB, ELIE_GITHUB, ELIE_PROFILE_PIC, EPFL_LOGO, EPFL_PH_LINK, ERT_BLOG_POST, ERT_GITHUB, ERT_SPACE_RACE } from '@/config/links';
import { ChevronRight, ChevronsLeftRightEllipsis, Rss } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<main>
				<div className="overflow-hidden">
					<section>
						{/* <div className="max-w-[69rem] w-11/12 m-auto flex flex-row min-h-[calc(100vh-84px)] items-center"> */}
						<div className="max-w-[69rem] w-11/12 m-auto flex flex-row min-h-[max(100vh,35rem)] items-center">
							<div className="w-full md:w-1/2 h-full">
								<div className="bg-gradient-to-r from-primary/15 to-transparent p-2 rounded-s-3xl">
									<BackgroundBlurredContainer className="rounded-br-none rounded-tr-none pr-32">
										<div className="flex flex-row items-center gap-2">
											<div className="w-2 h-2 bg-primary rounded-full" />
											<p className="text-sm sm:text-base text-white/80">Studying physics at </p>
											<Link href={EPFL_PH_LINK} target={'_blank'} className="border-b-1 pb-1 translate-y-0.5 border-white/80 cursor-alias">
												<Image alt="EPFL Logo" width={42} height={12} src={EPFL_LOGO} />
											</Link>
										</div>
									</BackgroundBlurredContainer>
								</div>
								<h1 className="text-7xl font-extrabold font-sans mt-10">I'm Elie</h1>
								<p className="text-lg text-white/80 mt-4">I build distributed systems and developer tools, blending software with physics and rocketry to solve real-world problems with clarity and precision.</p>
								<Link href={'/me'} className="block border-1 border-white/15 hover:border-white/35 transition-all duration-200 px-4 py-3 w-fit mt-10 rounded-xl">
									<p className="text-base text-white">More about me</p>
								</Link>
								<div className="mt-10 flex flex-row gap-4">
									<Link href={ELIE_GITHUB} target="_blank">
										<div className="text-white/80 w-5 h-5 cursor-pointer hover:text-white/100 transition-all duration-200">
											<GithubIcon />
										</div>
									</Link>
									<Link href={'#'} target="_blank">
										<div className="text-white/80 w-5 h-5 cursor-pointer hover:text-white/100 transition-all duration-200">
											<XIcon />
										</div>
									</Link>
								</div>
							</div>
							{/* <div className="w-1/2 h-full select-none"></div> */}
						</div>
					</section>

					<section>
						<div className="max-w-[69rem] w-11/12 m-auto">
							<h2 className="font-sans text-3xl md:text-5xl">I build systems where software, physics, and hardware meet — designed to scale, built to be trusted.</h2>
							<div className="h-[1px] w-full bg-white/60 my-8" />
							<div className="flex flex-col-reverse md:flex-row gap-8">
								<div className="w-full md:w-2/5 flex justify-center items-center">
									<div className="w-full flex p-6 border-1 max-w-[25rem] pb-32 border-white/20 scale-75 -rotate-z-[5deg] -translate-y-5 flex-col relative hover:scale-[80%] hover:border-white/80 transition-all duration-200 group">
										<div className="relative w-full aspect-square">
											<Image src={ELIE_PROFILE_PIC} alt={'Photo of me during snowboard trip'} fill />
										</div>

										<div className="absolute bottom-2 right-8 opacity-80 group-hover:opacity-100 transition-all duration-200">
											{/* <Image src={'/signature.svg'} alt={'Signature'} width={180} height={50} /> */}
											<EliesSignature fillColor="white" strokeWidth={4} />
										</div>
									</div>
								</div>
								<div className="w-full md:w-3/5 flex flex-col gap-4">
									<p className="text-lg text-white/80">Hi, I'm Elie — a physics student based in Switzerland with a deep passion for systems, computing, and how things work at every level. </p>
									<p className="text-lg text-white/80">I began programming at age 10 and never stopped exploring. Over the years, I’ve gone from building basic websites to running a full homelab, designing distributed systems, and contributing to student rocketry as part of my university’s team. Whether I’m working on backend infrastructure, embedded avionics, or real-time telemetry, I love building tools that are reliable, scalable, and grounded in real-world engineering.</p>

									<q className="text-2xl text-white/80 mt-4">
										{/* <span className="absolute -translate-x-4 scale-150">“</span> */}
										To engineer is to bring clarity to chaos - where each line of code, every design, serves a meaningful and lasting purpose
									</q>
								</div>
							</div>
						</div>
					</section>

					<section className="mt-24" id="my-work">
						<div className="max-w-[69rem] w-11/12 m-auto">
							<h3 className="font-sans text-2xl uppercase flex items-center gap-2 font-bold">
								<ChevronsLeftRightEllipsis size={28} strokeWidth={2.5} />
								My work
							</h3>

							<div className="mt-8 flex flex-col gap-12">
								<div className="flex justify-between lg:h-64 gap-2 lg:gap-12 flex-col-reverse lg:flex-row">
									<div className="flex flex-col justify-between py-2 gap-4 lg:gap-0">
										<div className="flex flex-col gap-2">
											<h4 className="text-4xl font-sans">Avionics SpaceRace</h4>
											<p className="text-lg text-white/80">I, with one of my teammate, build the avionics for a L1 class rocket. The avionics allowed us to have live telemetry on the ground as well as sending remote command to the vehicule during takeoff and descent. It also controlled the unreefing of our parachute.</p>
										</div>
										<div>
											<div className="flex flex-row justify-between items-center">
												<div className="flex">
													<Link href={ERT_GITHUB} className="text-white/80 w-5 h-5 cursor-pointer hover:text-white/100 transition-all duration-200">
														<GithubIcon />
													</Link>
												</div>
												{/* <Link href={'/blog/space-race-5'}>
													<p>Read my blog post</p>
												</Link> */}
												<Link href={ERT_BLOG_POST} className="block border-1 border-white/15 hover:border-white/35 transition-all duration-200 px-4 py-3 w-fit rounded-xl">
													<p className="text-base text-white flex gap-1 items-center">
														Read more <ChevronRight size={22} className="mt-[0.5px]" />
													</p>
												</Link>
											</div>
										</div>
									</div>
									<div className="w-full lg:min-w-[455px] lg:max-w-[455px] relative overflow-hidden lg:h-full rounded-lg aspect-video">
										<Image src={ERT_SPACE_RACE} alt={'Avionics SR'} width={1100} height={300} className="" />
									</div>
								</div>

								<div className="flex justify-between lg:h-64 gap-2 lg:gap-12 flex-col-reverse lg:flex-row">
									<div className="w-full lg:max-w-[455px] lg:min-w-[455px] relative overflow-hidden lg:h-full rounded-lg aspect-video">
										<Image src={DEPLOY} alt={'Deploy'} width={1100} height={300} className="" />
									</div>

									<div className="flex flex-col justify-between py-2 gap-4 lg:gap-0">
										<div className="flex flex-col gap-2">
											<h4 className="text-4xl font-sans">Deploy</h4>
											<p className="text-lg text-white/80">A Heroku/DigitalOcean alternative fully opensource with redundancy at heart and more</p>
										</div>
										<div>
											<div className="flex flex-row justify-between items-center">
												<div className="flex">
													<Link href={DEPLOY_GITHUB} className="text-white/80 w-5 h-5 cursor-pointer hover:text-white/100 transition-all duration-200">
														<GithubIcon />
													</Link>
												</div>
												{/* <Link href={'/blog/space-race-5'}>
													<p>Read my blog post</p>
												</Link> */}
												{/* <Link href={'#'} className="block border-1 border-white/15 hover:border-white/35 transition-all duration-200 px-4 py-3 w-fit rounded-xl">
													<p className="text-base text-white flex gap-1 items-center">
														Read more <ChevronRight size={22} className="mt-[0.5px]" />
													</p>
												</Link> */}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section className="mt-24">
						<div className="max-w-[69rem] w-11/12 m-auto">
							<h3 className="font-sans text-2xl uppercase flex items-center gap-2 font-bold">
								<Rss size={24} strokeWidth={2.5} />
								Recent posts
							</h3>

							<div className="mt-8 flex flex-col gap-12">
								<div className="flex justify-between lg:h-64 gap-2 lg:gap-12 flex-col-reverse lg:flex-row">
									<div className="flex flex-col justify-between py-2 gap-4 lg:gap-0">
										<div className="flex flex-col gap-2">
											<h4 className="text-4xl font-sans">Avionics SpaceRace</h4>
											<p className="text-lg text-white/80">I, with one of my teammate, build the avionics for a L1 class rocket. The avionics allowed us to have live telemetry on the ground as well as sending remote command to the vehicule during takeoff and descent. It also controlled the unreefing of our parachute.</p>
										</div>
										<div>
											<div className="flex flex-row justify-between items-center">
												<div className="flex"></div>
												{/* <Link href={'/blog/space-race-5'}>
													<p>Read my blog post</p>
												</Link> */}
												<Link href={'#'} className="block border-1 border-white/15 hover:border-white/35 transition-all duration-200 px-4 py-3 w-fit rounded-xl">
													<p className="text-base text-white flex gap-1 items-center">
														Read more <ChevronRight size={22} className="mt-[0.5px]" />
													</p>
												</Link>
											</div>
										</div>
									</div>
									<div className="w-full lg:min-w-[455px] lg:max-w-[455px] relative overflow-hidden lg:h-full rounded-lg aspect-video">
										<Image src={'/avionics.jpeg'} alt={'Avionics SR'} width={1100} height={300} className="" />
									</div>
								</div>
							</div>
						</div>
					</section>

					<Footer includeSeparator={true} />
				</div>
			</main>
			<ParticleBackground />
		</>
	);
}
