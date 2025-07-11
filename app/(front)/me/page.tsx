import { Footer } from '@/components/sections/footer';
import { EliesSignature } from '@/components/utils/signature';
import { DIGITAL_CANION_LOGO, ELIE_PROFILE_PIC, EPFL_LINK, EPFL_LOGO, EPFL_PH_LINK, GYMNASE_NYON_LINK, GYMNASE_NYON_LOGO } from '@/config/links';
import { cn } from '@/lib/cn';
import { GraduationCap, Sparkle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function MePage() {
	const work = [
		// {
		// 	title: 'Avionics Team Member',
		// 	company: 'EPFL Rocket Team',
		// 	location: 'Switzerland, Lausanne',
		// 	startDate: 'JUL 2025',
		// 	endDate: null,
		// 	description: 'Contributing to the avionics systems of the EPFL Rocket Team, focusing on embedded systems and real-time telemetry.',
		// },
		{
			title: 'Intern - Bureaux Techniques (BT)',
			// company: 'École Polytechnique Fédérale de Lausanne (EPFL), BT Division',
			company: 'EPFL, BT',
			location: 'Lausanne, Switzerland',
			startDate: 'OCT 2024',
			endDate: null,
			logo: EPFL_LOGO,
			link: EPFL_LINK,
			description: "As an intern at EPFL's Bureaux Techniques (BT), I work alongside architects and electrical engineers who oversee the maintenance and development of the campus infrastructure. My responsibilities include updating technical documentation for existing facilities and new construction projects, supporting various IT-related needs within the team, and occasionally developing custom software tools to improve internal workflows. This role allows me to gain hands-on experience in a multidisciplinary environment while earning supplementary income during my studies.",
		},
		{
			title: 'Undergraduate Student in Physics',
			// company: 'École Polytechnique Fédérale de Lausanne (EPFL)',
			company: 'EPFL',
			location: 'Lausanne, Switzerland',
			startDate: 'SEP 2024',
			endDate: null,
			logo: EPFL_LOGO,
			link: EPFL_PH_LINK,
			description: "I am currently pursuing a Bachelor's degree in Physics, where I explore both theoretical and applied aspects of the field. With a strong foundation in mathematics and a long-standing passion for computing and technology, I approach my studies with curiosity and a hands-on mindset. Outside of coursework, I continue to develop personal software projects, manage my own server infrastructure, and stay actively engaged in learning new technologies.",
		},
		{
			title: 'High School Graduate - Mathematics and Physics Focus',
			company: 'Gymnase de Nyon',
			location: 'Nyon, Switzerland',
			startDate: 'SEP 2021',
			endDate: 'JUL 2024',
			logo: GYMNASE_NYON_LOGO,
			link: GYMNASE_NYON_LINK,
			size: 1.5,
			description: 'I completed my secondary education at the Gymnase de Nyon, where I specialized in mathematics and physics. This program provided a strong academic foundation in analytical thinking and scientific reasoning, preparing me for further studies in the physical sciences.',
		},
		{
			title: 'IT & Network Infrastructure Intern',
			company: 'DigitalCanion',
			location: 'Estavayer-le-Lac, Switzerland',
			startDate: 'SEP 2020',
			endDate: 'JUL 2021',
			logo: DIGITAL_CANION_LOGO,
			size: 0.7,
			description:
				'During my internship at DigitalCanion, I worked on the design and maintenance of networking infrastructure across campus environments and data centers, with a strong focus on high-availability systems where zero downtime was critical. I gained hands-on experience in managing and securing complex networks, implementing best practices in cybersecurity, and troubleshooting mission-critical infrastructure. In addition to technical responsibilities, I managed a portfolio of clients with diverse requirements—ranging from small businesses to larger organizations—ensuring tailored solutions and reliable ongoing support.',
		},
	];

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
						<p className="text-lg text-white/80 mt-2">A glimpse into my journey—from building websites and managing servers in my basement to working on high-availability networks and studying physics at EPFL.</p>
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
								Hi, I'm Elie — a physics student at EPFL with a lifelong drive to understand how things work, from the subatomic to the systemic. My journey started at age 10, when I wrote my first lines of Java on a laptop. Since then, that curiosity has evolved into a hands-on passion for computing, systems engineering, and real-world problem-solving. I’ve built websites for clients, maintained my own homelab, and worked on datacenter network infrastructure and cybersecurity during an internship. I also enjoy designing IoT devices and PCBs, blending hardware with software to
								create innovative solutions.
							</p>
							<p className="text-lg text-white/80">Today, I split my time between studying physics, writing backend software, managing infrastructure, and contributing to avionics and telemetry systems for student rocketry. I’m always building something—whether it’s to learn, to solve, or to launch.</p>
						</div>
					</div>
				</div>
			</section>

			<section className="mt-24" id="my-work">
				<div className="max-w-[69rem] w-11/12 m-auto">
					<h3 className="font-sans text-2xl uppercase flex items-center gap-2 font-bold">
						<GraduationCap size={24} strokeWidth={2.5} />
						My Education & Experience
					</h3>

					{work.map((job, index) => (
						<div className="flex mt-8 gap-0 lg:gap-8 flex-col lg:flex-row" key={index}>
							<p className="uppercase text-lg text-white/80 min-w-64 max-w-64">
								{job.startDate} <span>-</span> {job.endDate ? job.endDate : 'Present'}
							</p>
							<div>
								<h4 className="text-3xl">{job.title}</h4>
								<div>
									<Link href={job.link || ''} target="_blank" className={cn('flex flex-row gap-2 items-center group w-fit', job.link ? 'cursor-pointer' : 'cursor-default')}>
										{job.logo && <Image src={job.logo} width={40} height={16} alt={job.company} style={{ transform: `scale(${job.size})` }} />}
										<h5 className="text-lg text-white/80 flex flex-row">
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
						What's next?
					</h3>

					<p className="mt-8 text-lg text-white/80">In the coming years, I aim to launch my own startup—building products that merge engineering depth with real-world impact. I'm especially interested in creating tools at the intersection of software and hardware, and I’m actively exploring ideas that could grow into something meaningful, scalable, and lasting.</p>
				</div>
			</section>

			<Footer />
		</>
	);
}
