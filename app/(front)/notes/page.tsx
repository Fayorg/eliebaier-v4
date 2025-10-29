import { GithubIcon } from '@/components/utils/icons';
import { ELIE_PROFILE_PIC } from '@/config/links';
import { CLASSES, NOTES_REPO_URL } from '@/config/notes';
import { Moon, Sun } from 'lucide-react';
import Link from 'next/link';

export default function NotesPages() {
	return (
		<>
			<div className="max-w-[69rem] w-11/12 m-auto pb-4 lg:pb-0 pt-20">
				<div className="border-b-1 border-white/20 pb-8 flex flex-col lg:flex-row justify-between mt-8">
					<div className="w-full">
						<div className="flex flex-row justify-between items-center">
							<h1 className="font-sans text-4xl lg:text-5xl">Notes</h1>
							<Link href={NOTES_REPO_URL} target="_blank" className="block text-white/80 hover:text-white/100 transition-all duration-200 border-1 border-white/15 hover:border-white/35 rounded-full w-10 h-10 p-[8px]">
								<GithubIcon />
							</Link>
						</div>
						<p className="text-lg text-white/80 mt-2">Here I share my LaTeX-written notes from EPFL, reflecting the challenges and progress of studying computer science, physics, and mathematics.</p>
					</div>
				</div>

				<div className="mt-8">
					{/* <h2 className="text-3xl md:text-4xl font-sans">BA 1</h2> */}
					<div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{CLASSES.map((course) => {
							return (
								<div key={course.code} className="border-[1px] border-white/60 rounded-sm">
									<div className="relative border-white/60 border-b-[1px] px-4 py-2 min-h-32 flex flex-row items-end">
										<div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
											<course.background />
										</div>
										<h3 className="text-white/80">
											<span className="font-semibold text-white">{course.name}</span> &bull; {course.code} &bull; {course.semester}
										</h3>
									</div>
									<div className="px-4 py-2">
										<div className="flex justify-between">
											<p>Notes</p>
											<div className="flex items-center gap-2">
												<Link target={'_blank'} href={'https://eliebaier.fra1.digitaloceanspaces.com/notes/' + course.code + '-dark.pdf'}>
													<Moon size={18} />
												</Link>
												<Link target={'_blank'} href={'https://eliebaier.fra1.digitaloceanspaces.com/notes/' + course.code + '.pdf'}>
													<Sun size={18} />
												</Link>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}

export const metadata = {
	title: 'Notes — Elie Baier',
	description: 'Notes from Elie Baier — a computer science student at EPFL with a passion for systems engineering, avionics, IoT, and building things that last.',
	keywords: ['Elie Baier', 'Notes Elie', 'EPFL student', 'Computer science student', 'Systems engineering', 'Avionics', 'IoT', 'Homelab', 'PCBs', 'Cybersecurity', 'Embedded systems', 'Full-stack developer', 'Self-hosting', 'Startup journey'],
	authors: [{ name: 'Elie Baier', url: 'https://eliebaier.ch' }],
	creator: 'Elie Baier',
	metadataBase: new URL('https://eliebaier.ch'),
	openGraph: {
		title: 'Notes — Elie Baier',
		description: "Hi, I'm Elie — a student, builder, and engineer. From coding at 10 to developing real-time avionics and dreaming of my own startup, this is my journey.",
		url: 'https://eliebaier.ch/notes',
		siteName: 'Elie Baier',
		images: [
			{
				url: ELIE_PROFILE_PIC,
				width: 1200,
				height: 1200,
				alt: 'Elie Baier — Notes',
			},
		],
		locale: 'en_US',
		type: 'profile',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Notes — Elie Baier',
		description: 'Computer science student at EPFL building systems that scale. Learn more about my work, projects, and what drives me.',
		images: [ELIE_PROFILE_PIC],
	},
};
