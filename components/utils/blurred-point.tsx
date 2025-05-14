import { cn } from '@/lib/cn';
import { HTMLAttributes } from 'react';

interface BlurredPointProps extends HTMLAttributes<HTMLDivElement> {
	/** The color of the blurred point */
	color?: string;
	/** The size of the blurred point */
	size?: number;
	/** The container styles */
	container?: HTMLAttributes<HTMLDivElement>['className'];
}

export function BlurredPoint({ className, size = 10, color, container, ...props }: BlurredPointProps) {
	return (
		<div className={cn('blur-3xl', container)}>
			<div className={cn(`w-[${size}rem] h-[${size}rem]`, className, !!color && `bg-[${color}]`)} {...props} />
		</div>
	);
}
