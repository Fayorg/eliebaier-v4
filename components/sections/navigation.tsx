'use client';

import { useState, useEffect } from 'react';
import { Command } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navigation = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const { push } = useRouter();

	const navItems = [
		{ name: 'My Work', href: '#my-work', onClick: () => push('/#my-work') },
		{ name: 'About me', href: '#features', onClick: () => push('/me') },
		// { name: 'Prices', href: '#pricing', onClick: () => scrollToSection('pricing') },
		// { name: 'Contact', href: '#testimonials', onClick: () => scrollToSection('testimonials') },
	];

	return (
		<header className={`fixed top-3.5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full ${isScrolled ? 'h-14 bg-[#1B1B1B]/40 backdrop-blur-xl border border-white/10 scale-95 w-[90%] max-w-2xl' : 'h-14 bg-[#000000] w-[95%] max-w-3xl border-white/0'}`}>
			<div className="mx-auto h-full px-6">
				<nav className="flex items-center justify-between h-full">
					<Link className="flex items-center gap-2" href={'/'}>
						<Command className="w-5 h-5 text-primary" />
						<span className="font-bold text-base">Elie Baier</span>
					</Link>

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

					{/* Mobile Navigation */}
					{/* <div className="md:hidden">
						<Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
							<SheetTrigger asChild>
								<Button variant="outline" size="icon" className="glass">
									<Menu className="h-5 w-5" />
								</Button>
							</SheetTrigger>
							<SheetContent className="bg-background">
								<div className="flex flex-col gap-4 mt-8">
									{navItems.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className="text-lg text-muted-foreground hover:text-foreground transition-colors"
											onClick={(e) => {
												e.preventDefault();
												setIsMobileMenuOpen(false);
												if (item.onClick) {
													item.onClick();
												}
											}}
										>
											{item.name}
										</a>
									))}
									<Button
										onClick={() => {
											setIsMobileMenuOpen(false);
											scrollToSection('cta');
										}}
										className="button-gradient mt-4"
									>
										Start Trading
									</Button>
								</div>
							</SheetContent>
						</Sheet>
					</div> */}
				</nav>
			</div>
		</header>
	);
};

export default Navigation;
