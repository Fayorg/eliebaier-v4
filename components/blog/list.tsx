import React from 'react';

export function DottedList({ children }: { children: React.ReactNode }) {
	let items: React.ReactNode[] = [];

	React.Children.map(children, (child) => {
		if (!React.isValidElement(child)) return;
		items.push(child);
	});

	return (
		<ul className="-mt-6 mb-6 ml-2">
			{items.map((item, index) => (
				<div key={index} className="flex gap-2 text-white/80">
					<div className="h-full">
						<div className="bg-white/80 w-1 h-1 rounded mt-[10px]" />
					</div>
					<div>{item}</div>
				</div>
			))}
		</ul>
	);
}
