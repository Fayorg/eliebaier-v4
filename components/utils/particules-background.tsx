'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const ParticleBackground = () => {
	const particlesRef = useRef<HTMLDivElement[]>([]);

	useGSAP(() => {
		particlesRef.current.forEach((particle) => {
			gsap.set(particle, {
				width: Math.random() * 3 + 1,
				height: Math.random() * 3 + 1,
				opacity: Math.random(),
				left: Math.random() * window.innerWidth,
				top: Math.random() * (window.innerHeight + 1),
			});

			gsap.to(particle, {
				y: window.innerHeight,
				duration: Math.random() * 10 + 10,
				opacity: 0,
				repeat: -1,
				ease: 'none',
				// yoyo: true,
			});
		});
	}, []);

	return (
		<div className="fixed inset-0 z-0 pointer-events-none">
			{[...Array(100)].map((_, i) => (
				<div
					key={i}
					ref={(el) => {
						particlesRef.current.push(el!);
					}}
					className="absolute rounded-full bg-white"
				/>
			))}
		</div>
	);
};

// const ParticleBackground = () => {
// 	const particlesRef = useRef<HTMLDivElement[]>([]);

// 	useEffect(() => {
// 		const centerX = window.innerWidth / 2;
// 		const centerY = window.innerHeight / 2;

// 		particlesRef.current.forEach((particle) => {
// 			const angle = Math.random() * Math.PI * 2;
// 			const distance = Math.random() * 100; // Starting near the center

// 			gsap.set(particle, {
// 				x: Math.cos(angle) * distance + centerX,
// 				y: Math.sin(angle) * distance + centerY,
// 				scale: 0.1,
// 				opacity: 0.5 + Math.random() * 0.5,
// 			});

// 			const finalDistance = Math.max(window.innerWidth, window.innerHeight) * 1.2;

// 			const animation = () => {
// 				const newAngle = Math.random() * Math.PI * 2;
// 				const startDist = Math.random() * 50;

// 				gsap.set(particle, {
// 					x: Math.cos(newAngle) * startDist + centerX,
// 					y: Math.sin(newAngle) * startDist + centerY,
// 					scale: 0.1,
// 					opacity: 0.5 + Math.random() * 0.5,
// 				});

// 				gsap.to(particle, {
// 					x: Math.cos(newAngle) * finalDistance + centerX,
// 					y: Math.sin(newAngle) * finalDistance + centerY,
// 					scale: 1.5 + Math.random() * 1,
// 					duration: 2 + Math.random() * 1.5,
// 					opacity: 0,
// 					ease: 'none',
// 					onComplete: animation, // loop each particle individually
// 				});
// 			};

// 			animation();
// 		});
// 	}, []);

// 	return (
// 		<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
// 			{[...Array(150)].map((_, i) => (
// 				<div
// 					key={i}
// 					ref={(el) => {
// 						if (el) particlesRef.current.push(el);
// 					}}
// 					className="absolute w-[2px] h-[2px] bg-white rounded-full"
// 				/>
// 			))}
// 		</div>
// 	);
// };

// const ParticleBackground = () => {
// 	const particlesRef = useRef<HTMLDivElement[]>([]);

// 	useEffect(() => {
// 		const centerX = window.innerWidth / 2;
// 		const centerY = window.innerHeight / 2;

// 		particlesRef.current.forEach((particle) => {
// 			const angle = Math.random() * Math.PI * 2;
// 			const distance = Math.random() * 100;

// 			gsap.set(particle, {
// 				x: Math.cos(angle) * distance + centerX,
// 				y: Math.sin(angle) * distance + centerY,
// 				scale: 0.3,
// 				opacity: 0.7 + Math.random() * 0.3,
// 			});

// 			const finalDistance = Math.max(window.innerWidth, window.innerHeight) * 1.4;

// 			const animate = () => {
// 				const newAngle = Math.random() * Math.PI * 2;
// 				const startDist = Math.random() * 50;

// 				gsap.set(particle, {
// 					x: Math.cos(newAngle) * startDist + centerX,
// 					y: Math.sin(newAngle) * startDist + centerY,
// 					scale: 0.3,
// 					opacity: 0.7 + Math.random() * 0.3,
// 				});

// 				gsap.to(particle, {
// 					x: Math.cos(newAngle) * finalDistance + centerX,
// 					y: Math.sin(newAngle) * finalDistance + centerY,
// 					scale: 2.5 + Math.random() * 1,
// 					duration: 4 + Math.random() * 2, // Slower movement
// 					opacity: 0,
// 					ease: 'none',
// 					onComplete: animate,
// 				});
// 			};

// 			animate();
// 		});
// 	}, []);

// 	return (
// 		<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
// 			{[...Array(150)].map((_, i) => (
// 				<div
// 					key={i}
// 					ref={(el) => {
// 						if (el) particlesRef.current.push(el);
// 					}}
// 					className="absolute w-[4px] h-[4px] bg-white rounded-full"
// 				/>
// 			))}
// 		</div>
// 	);
// };

/*const ParticleBackground: React.FC = () => {
	// Use useRef with the appropriate types for HTMLDivElement references
	const particlesRef = useRef<HTMLDivElement[]>([]);
	const containerRef = useRef<HTMLDivElement | null>(null);

	// If using useGSAP with scope, you might structure it like this:
	// useGSAP(() => {
	//     // Your GSAP animations here, they will be tied to the containerRef scope
	// }, { scope: containerRef });

	useEffect(() => {
		const container = containerRef.current;
		// Ensure the container ref is available
		if (!container) return;

		const centerX: number = window.innerWidth / 2;
		const centerY: number = window.innerHeight / 2;

		particlesRef.current.forEach((particle: HTMLDivElement) => {
			// Initial random position around the center
			const initialX: number = centerX + (Math.random() - 0.5) * window.innerWidth * 0.2; // Start within 20% of width from center
			const initialY: number = centerY + (Math.random() - 0.5) * window.innerHeight * 0.2; // Start within 20% of height from center

			// Set initial properties using gsap.set
			gsap.set(particle, {
				x: initialX,
				y: initialY,
				width: Math.random() * 2 + 1, // Smaller initial size
				height: Math.random() * 2 + 1, // Smaller initial size
				opacity: 0, // Start invisible
				scale: 0.5, // Start smaller
				position: 'absolute', // Ensure element is positioned absolutely
				borderRadius: '50%', // Ensure rounded shape
				backgroundColor: 'white', // Ensure color
				pointerEvents: 'none', // Ensure no pointer events
			});

			// Function to animate a single particle outwards
			const animateParticle = (element: HTMLDivElement) => {
				// Get the current position before starting the animation
				const currentX = gsap.getProperty(element, 'x') as number;
				const currentY = gsap.getProperty(element, 'y') as number;

				gsap.to(element, {
					// Calculate target position based on current position relative to center
					x: (currentX - centerX) * 8 + centerX, // Increased multiplier for further outward movement
					y: (currentY - centerY) * 8 + centerY, // Increased multiplier for further outward movement
					width: '+=1', // Reduced increase in size
					height: '+=1', // Reduced increase in size
					opacity: 1, // Become visible
					scale: 1, // Reduced target scale
					duration: Math.random() * 0.8 + 0.8, // Adjusted duration for a slightly faster feel
					ease: 'none', // Changed ease to linear for constant speed
					onComplete: () => {
						// Reset particle to a new random starting position near the center
						gsap.set(element, {
							x: centerX + (Math.random() - 0.5) * window.innerWidth * 0.2,
							y: centerY + (Math.random() - 0.5) * window.innerHeight * 0.2,
							width: Math.random() * 2 + 1,
							height: Math.random() * 2 + 1,
							opacity: 0,
							scale: 0.5,
						});
						// Restart the animation for the same particle
						animateParticle(element);
					},
				});
			};

			// Start the initial animation for each particle with a slight delay
			// This helps to avoid all particles starting at the exact same time
			gsap.delayedCall(Math.random() * 2, animateParticle, [particle]);
		});

		// Cleanup function to kill tweens when the component unmounts
		return () => {
			particlesRef.current.forEach((particle) => {
				if (particle) {
					gsap.killTweensOf(particle);
				}
			});
		};
	}, []); // Empty dependency array ensures this effect runs only once on mount

	return (
		<div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
			{[...Array(85)].map(
				(
					_,
					i // Increased particle count again for more density
				) => (
					<div
						key={i}
						// Use a callback ref to populate the particlesRef array
						ref={(el: HTMLDivElement | null) => {
							if (el) {
								particlesRef.current[i] = el;
							}
						}}
						// Removed inline styles that are now handled by gsap.set for consistency
						className="absolute rounded-full bg-white"
						style={{ willChange: 'transform, opacity, width, height' }} // Optimize rendering
					/>
				)
			)}
		</div>
	);
};*/

export default ParticleBackground;
