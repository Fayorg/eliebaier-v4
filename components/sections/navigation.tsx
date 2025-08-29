'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MobileNavigationLogo } from '../navigation/mobile-navigation-logo';

const Navigation = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		let lastScrollY = window.scrollY;
		let lastTime = Date.now();

		const handleScroll = () => {
			const now = Date.now();
			const currentScrollY = window.scrollY;

			const deltaY = currentScrollY - lastScrollY;
			const deltaT = now - lastTime;

			const speed = deltaT > 0 ? deltaY / deltaT : 0;
			const speedPerSecond = speed * 1000;

			if (Math.abs(speedPerSecond) > 500) {
				setIsMobileMenuOpen(false);
			}

			setIsScrolled(window.scrollY > 50);

			lastScrollY = currentScrollY;
			lastTime = now;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const { push } = useRouter();

	const navItems = [
		{ name: 'My Work', href: '#my-work', onClick: () => push('/#my-work') },
		{ name: 'About me', href: '#features', onClick: () => push('/me') },
	];

	return (
		<header style={{ '--r': isMobileMenuOpen ? '1rem' : '99px' } as React.CSSProperties} className={`fixed top-3.5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-[var(--r)] ${isScrolled || isMobileMenuOpen ? 'bg-[#1B1B1B]/40 backdrop-blur-xl border border-white/10 scale-95 w-[90%] max-w-2xl' : 'bg-[#000000] w-[95%] max-w-3xl border-white/0'}`}>
			<div className="mx-auto h-full px-6">
				<nav className="flex h-full flex-col">
					<div className="flex items-center justify-between w-full min-h-14 max-h-14">
						<div className="flex items-center gap-2">
							{/* <Command className="w-5 h-5 text-primary" /> */}
							<MobileNavigationLogo isOpen={isMobileMenuOpen} setOpen={setIsMobileMenuOpen} />
							<Link className="flex items-center" href={'/'}>
								<span className="font-bold text-base">Elie Baier</span>
							</Link>
						</div>

						{/* Desktop Navigation */}
						<div className="hidden md:flex items-center gap-6">
							{navItems.map((item) => (
								<a
									key={item.name}
									href={item.href}
									onClick={(e) => {
										e.preventDefault();
										if (item.onClick) {
											item.onClick();
										}
									}}
									className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300"
								>
									{item.name}
								</a>
							))}
						</div>

						<Link href={'/blog'} className="bg-primary py-2 px-3 rounded-sm text-sm font-bold">
							Get in my mind
						</Link>
					</div>
					<div className={`md:hidden flex flex-col items-center justify-center overflow-hidden gap-2 transition-all duration-300 ${isMobileMenuOpen ? 'max-h-40 mt-2 mb-4' : 'max-h-0'}`}>
						<div className="h-[1px] bg-white/60 w-full rounded-full transition-all duration-300 mb-2" />
						{navItems.map((item) => (
							<Link
								onPointerDown={() => {
									if (isMobileMenuOpen) {
										setIsMobileMenuOpen(false);
									}
								}}
								key={item.name}
								href={item.href}
								onClick={(e) => {
									e.preventDefault();
									if (item.onClick) {
										item.onClick();
									}
								}}
								className="text-lg text-muted-foreground hover:text-foreground transition-all duration-300"
							>
								{item.name}
							</Link>
						))}
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Navigation;
