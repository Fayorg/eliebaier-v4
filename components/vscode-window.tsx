import { HoverEffect } from './utils';
import { Files, GitBranch, Search, Play, Bug, Blocks, Settings, CircleUserRound, CloudUpload } from 'lucide-react';

export function VSCodeWindow() {
	return (
		<div className="w-[42vw] [aspect-ratio:984/802] border-1 rounded-md rotate-x-45 rotate-z-45 transform-3d perspective-distant flex flex-col" style={{ maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 110%), linear-gradient(to right, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)', maskComposite: 'intersect' }}>
			<div className="w-full h-4 border-b-1 flex items-center gap-1 px-1 justify-between">
				<div className="flex items-center gap-1 group">
					<div className="w-2 h-2 bg-red-400 rounded-full flex justify-center items-center">
						<p className="text-[5px] text-red-900 font-extrabold opacity-0 group-hover:opacity-100">X</p>
					</div>
					<div className="w-2 h-2 bg-yellow-400 rounded-full flex justify-center items-center">
						<p className="text-[10px] text-yellow-900 font-extrabold opacity-0 group-hover:opacity-100 -translate-y-[0.25px]">-</p>
					</div>
					<div className="w-2 h-2 bg-green-400 rounded-full flex justify-center items-center" />
				</div>

				<div>
					<div className="w-50 h-[0.6rem] border-1 rounded-md flex justify-center items-center">
						<p className="text-[5px] text-white/80">eliebaier-v4</p>
					</div>
				</div>

				<div className="w-20"></div>
			</div>
			<div className="w-full h-full flex">
				<div className="w-6 h-full border-r-1 flex flex-col items-center justify-between py-1">
					<div className="flex flex-col items-center gap-2">
						<HoverEffect>
							<Files size={15} color="white" strokeWidth={1.5} />
						</HoverEffect>
						<HoverEffect>
							<Search size={15} color="white" strokeWidth={1.5} />
						</HoverEffect>
						<HoverEffect>
							<GitBranch size={15} color="white" strokeWidth={1.5} />
						</HoverEffect>
						<HoverEffect>
							<div className="relative">
								<Play size={15} color="white" strokeWidth={1.5} />
								<div className="absolute bottom-0 left-0">
									<Bug size={7.5} color="white" strokeWidth={1.5} className="bg-background" />
								</div>
							</div>
						</HoverEffect>
						<HoverEffect>
							<Blocks size={15} color="white" strokeWidth={1.5} />
						</HoverEffect>
					</div>
					<div className="flex flex-col-reverse items-center gap-2">
						<HoverEffect>
							<Settings size={15} color="white" strokeWidth={1.5} />
						</HoverEffect>
						<HoverEffect>
							<CircleUserRound size={15} color="white" strokeWidth={1.5} />
						</HoverEffect>
					</div>
				</div>
				<div className="w-24 h-full border-r-1 flex">
					<div className="h-4 w-full border-b-1 flex items-center justify-between p-2">
						<p className="text-[5.5px] text-white/80">EXPLORER</p>
					</div>
				</div>
			</div>
			<div className="w-full h-2 border-t-1 flex justify-between items-center px-1">
				<div>
					<div></div>
					<div className="flex flex-row items-center gap-[2px]">
						<GitBranch size={5} color="white" strokeWidth={1} />
						<p className="text-[5px] text-white/80">master*</p>
						<CloudUpload size={6} color="white" strokeWidth={1} />
					</div>
					<div></div>
				</div>
				<div></div>
			</div>
		</div>
	);
}
