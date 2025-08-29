import { Command, Menu } from 'lucide-react';
import Link from 'next/link';

export function MobileNavigationLogo({ isOpen = false, setOpen = () => {} }: { isOpen?: boolean; setOpen?: (open: boolean) => void }) {
	return (
		<div>
			<div className="hidden md:block">
				<Link className="flex items-center" href={'/'}>
					<Command className="w-5 h-5 text-primary" />
				</Link>
			</div>
			<div className="block md:hidden p-2 cursor-pointer" onClick={() => setOpen(!isOpen)}>
				<Menu className="w-7 h-7 text-primary" />
			</div>
		</div>
	);
}
