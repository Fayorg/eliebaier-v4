import { GithubIcon } from '@/components/utils/icons';
import { NOTES_REPO_URL } from '@/config/notes';
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
			</div>

			<div className="max-w-[69rem] w-11/12 m-auto pt-8 mt-12">
				<div className="w-full h-4 bg-gray-500 rounded-xl relative">
					<div className="absolute w-24 h-4 bg-white rounded-xl right-0 rotate-45 -translate-y-7 translate-x-3" />
					<div className="absolute w-24 h-4 bg-white rounded-xl right-0 -rotate-45 translate-y-7 translate-x-3" />
					<div className="w-5 h-5 absolute right-0 rounded-full -translate-y-0.5 border-2 border-background translate-x-[1px]" />
				</div>
			</div>
		</>
	);
}
