import { GithubIcon } from '@/components/utils/icons';
import { CLASSES, NOTES_REPO_URL } from '@/config/notes';
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
					<div className="mt-4 grid grid-cols-3 gap-4">
						{CLASSES.map((course) => {
							return (
								<div key={course.code} className="border-[1px] border-white/60 rounded-sm">
									<div className="border-white/60 border-b-[1px] px-4 py-2 min-h-32 flex flex-row items-end">
										<h3 className="text-white/80">
											<span className="font-semibold text-white">{course.name}</span> - {course.code}
										</h3>
									</div>
									<div className="px-4 py-2">
										<div>
											<p>Notes</p>
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
