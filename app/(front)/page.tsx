import { BackgroundBlurredContainer } from '@/components/containers';
import { Footer } from '@/components/sections/footer';
import ParticleBackground from '@/components/utils/particules-background';
import { EliesSignature } from '@/components/utils/signature';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<header></header>

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
											<Link href={'https://www.epfl.ch/schools/sb/sph/en/'} target={'_blank'} className="border-b-1 pb-1 translate-y-0.5 border-white/80 cursor-alias">
												<Image alt="EPFL Logo" width={42} height={12} src={'/epfl.png'} />
											</Link>
										</div>
									</BackgroundBlurredContainer>
								</div>
								<h1 className="text-7xl font-extrabold font-sans mt-10">I'm Elie</h1>
								<p className="text-lg text-white/80 mt-4">I build distributed systems and developer tools, blending software with physics and rocketry to solve real-world problems with clarity and precision.</p>
								<Link href={'#'} className="block border-1 border-white/15 hover:border-white/35 transition-all duration-200 px-4 py-3 w-fit mt-10 rounded-xl">
									<p className="text-base text-white">More about me</p>
								</Link>
								<div className="mt-10 flex flex-row gap-4">
									<Link href={'#'}>
										<div className="text-white/80 w-5 h-5 cursor-pointer hover:text-white/100 transition-all duration-200">
											<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" strokeWidth={1}>
												<title>GitHub</title>
												<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
											</svg>
										</div>
									</Link>
									<Link href={'#'}>
										<div className="text-white/80 w-5 h-5 cursor-pointer hover:text-white/100 transition-all duration-200">
											<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" strokeWidth={1}>
												<title>X</title>
												<path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
											</svg>
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
											<Image src={'/elie.jpeg'} alt={'Photo of me during snowboard trip'} fill />
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

					<section className="bg-black relative">
						<div className="bg-background w-full h-24 rounded-b-[13vw] absolute" />

						<div className="max-w-[69rem] w-11/12 m-auto pt-24 z-10">
							<h2>Hello world</h2>
						</div>
					</section>

					<Footer includeSeparator={false} />
				</div>
			</main>
			<ParticleBackground />
		</>
	);
}
