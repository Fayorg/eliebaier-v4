import { Command, Menu } from 'lucide-react';

export function MobileNavigationLogo({ isOpen = false, setOpen = (open: boolean) => {} }: { isOpen?: boolean; setOpen?: (open: boolean) => void }) {
	return (
		<div>
			<div className="hidden md:block">
				<Command className="w-5 h-5 text-primary" />
			</div>
			<div className="block md:hidden p-2 cursor-pointer" onClick={() => setOpen(!isOpen)}>
				<Menu className="w-7 h-7 text-primary" />
			</div>
		</div>
	);
}
