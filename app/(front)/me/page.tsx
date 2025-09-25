import { Footer } from '@/components/sections/footer';
import { EliesSignature } from '@/components/utils/signature';
import { experiences } from '@/config/experiences';
import { ELIE_PROFILE_PIC } from '@/config/links';
import { cn } from '@/lib/cn';
import { GraduationCap, Sparkle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function MePage() {
	return (
		<>
			<div className="max-w-[69rem] w-11/12 m-auto pb-4 lg:pb-0 pt-20">
				<div className="border-b-1 border-white/20 pb-8 flex flex-col lg:flex-row justify-between mt-8">
					<div className="w-full">
						<div className="flex flex-row justify-between items-center">
							<h1 className="font-sans text-4xl lg:text-5xl">About me</h1>
							{/* <Link href={'#'} className="block md:hidden text-white/80 hover:text-white/100 transition-all duration-200 border-1 border-white/15 hover:border-white/35 px-2 py-2 rounded-full">
								<Bell size={20} strokeWidth={1.5} />
							</Link> */}
						</div>
						<p className="text-lg text-white/80 mt-2">A glimpse into my journey, from building websites and managing servers in my basement to working on high-availability networks and studying computer science at EPFL.</p>
					</div>
				</div>
			</div>

			<section>
				<div className="max-w-[69rem] w-11/12 m-auto mt-12">
					<div className="flex flex-col lg:flex-row gap-8 lg:items-center">
						<div className="w-full lg:w-2/5 flex justify-center items-center">
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
						<div className="w-full lg:w-3/5 flex flex-col gap-4 md:-mt-14">
							<p className="text-lg text-white/80">
								Hi, I&apos;m Elie — a computer science student at EPFL with a lifelong drive to understand how things work, from the subatomic to the systemic. My journey started at age 10, when I wrote my first lines of Java on a laptop. Since then, that curiosity has evolved into a hands-on passion for computing, systems engineering, and real-world problem-solving. I’ve built websites for clients, maintained my own homelab, and worked on datacenter network infrastructure and cybersecurity during an internship. I also enjoy designing IoT devices and PCBs, blending hardware
								with software to create innovative solutions.
							</p>
							<p className="text-lg text-white/80">Today, I split my time between studying physics, writing backend software, managing infrastructure, and contributing to avionics and telemetry systems for student rocketry. I’m always building something, whether it’s to learn, to solve, or to launch.</p>
						</div>
					</div>
				</div>
			</section>

			<section className="mt-24" id="my-work">
				<div className="max-w-[69rem] w-11/12 m-auto">
					<h3 className="font-sans text-2xl uppercase flex items-center gap-2 font-bold">
						<GraduationCap size={24} strokeWidth={2.5} />
						My Education & Experiences
					</h3>

					{experiences.map((job, index) => (
						<div className="flex mt-8 gap-0 lg:gap-8 flex-col lg:flex-row" key={index}>
							<p className="uppercase text-lg text-white/80 min-w-64 max-w-64">
								{job.startDate} <span>-</span> {job.endDate ? job.endDate : 'Present'}
							</p>
							<div>
								<h4 className="text-3xl">{job.title}</h4>
								<div>
									<Link href={job.link || ''} target="_blank" className={cn('flex flex-row gap-2 items-center group w-fit', job.link ? 'cursor-pointer' : 'cursor-default')}>
										{job.logo && <Image src={job.logo} width={40} height={16} alt={job.company} style={{ transform: `scale(${job.size})` }} />}
										<h5 className="text-lg text-white/80">
											<span className="group-hover:text-white mr-1 underline underline-offset-3 decoration-white/40 group-hover:decoration-white/60">{job.company}</span> - {job.location}
										</h5>
									</Link>
								</div>
								<p className="text-lg text-white/80 mt-4">{job.description}</p>
							</div>
						</div>
					))}
				</div>
			</section>

			<section className="mt-24" id="my-work">
				<div className="max-w-[69rem] w-11/12 m-auto">
					<h3 className="font-sans text-2xl uppercase flex items-center gap-2 font-bold">
						<Sparkle size={24} strokeWidth={2.5} />
						What&apos;s next?
					</h3>

					<p className="mt-8 text-lg text-white/80">In the coming years, I aim to launch my own startup, building products that merge engineering depth with real-world impact. I&apos;m especially interested in creating tools at the intersection of software and hardware, and I&apos;m actively exploring ideas that could grow into something meaningful, scalable, and lasting.</p>
				</div>
			</section>

			<section className="mt-32 md:mt-48 mb-12" id="quote">
				<div className="max-w-[69rem] w-11/12 m-auto">
					<div className="w-1/4 min-w-32 h-[2px] bg-white/80 rounded-full mx-auto mb-8" />
					<div className="text-center">
						<blockquote className="text-3xl font-sans font-light">The ironic tragedy is that Life has to be lived forward but only makes sense in reverse</blockquote>
						<p className="mt-4 text-lg text-white/80 uppercase">Søren Kierkegaard</p>
					</div>
					<div className="w-1/4 min-w-32 h-[2px] bg-white/80 rounded-full mx-auto mt-8" />
				</div>
			</section>

			<Footer />
		</>
	);
}

export const metadata = {
	title: 'About — Elie Baier',
	description: 'Learn more about Elie Baier — a physics student at EPFL with a passion for systems engineering, avionics, IoT, and building things that last.',
	keywords: ['Elie Baier', 'About Elie', 'EPFL student', 'Physics student', 'Systems engineering', 'Avionics', 'IoT', 'Homelab', 'PCBs', 'Cybersecurity', 'Embedded systems', 'Full-stack developer', 'Self-hosting', 'Startup journey'],
	authors: [{ name: 'Elie Baier', url: 'https://eliebaier.ch' }],
	creator: 'Elie Baier',
	metadataBase: new URL('https://eliebaier.ch'),
	openGraph: {
		title: 'About — Elie Baier',
		description: "Hi, I'm Elie — a student, builder, and engineer. From coding at 10 to developing real-time avionics and dreaming of my own startup, this is my journey.",
		url: 'https://eliebaier.ch/about',
		siteName: 'Elie Baier',
		images: [
			{
				url: ELIE_PROFILE_PIC,
				width: 1200,
				height: 1200,
				alt: 'Elie Baier — About Me',
			},
		],
		locale: 'en_US',
		type: 'profile',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'About — Elie Baier',
		description: 'Physics student at EPFL building systems that scale. Learn more about my work, projects, and what drives me.',
		images: [ELIE_PROFILE_PIC],
	},
};
