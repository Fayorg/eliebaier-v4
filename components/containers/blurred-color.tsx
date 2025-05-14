import { cn } from '@/lib/cn';
import { HTMLAttributes } from 'react';

export function BackgroundBlurredContainer({ children, className }: HTMLAttributes<HTMLDivElement>) {
	return (
		<div className={cn('w-fit py-2 px-4 relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/45 to-transparent', className)}>
			<div>{children}</div>
			{/* <BlurredPoint className="absolute -top-25 -left-25 bg-red-500 !h-50 !w-50" size={10} /> */}
		</div>
	);
}
