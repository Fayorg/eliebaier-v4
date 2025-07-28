import { cn } from '@/lib/cn';
import { Flag, Lightbulb, OctagonX, PenTool, TriangleAlert } from 'lucide-react';

export function Important({ children }: { children: React.ReactNode }) {
	return (
		<AlertBase title="Important" className="bg-purple-200/80 border-purple-600 text-purple-950" icon={<Flag size={20} />}>
			{children}
		</AlertBase>
	);
}

export function Note({ children }: { children: React.ReactNode }) {
	return (
		<AlertBase title="Note" className="bg-blue-200/80 border-blue-600 text-blue-950" icon={<PenTool size={20} />}>
			{children}
		</AlertBase>
	);
}

export function Tip({ children }: { children: React.ReactNode }) {
	return (
		<AlertBase title="Tip" className="bg-green-200/80 border-green-600 text-green-950" icon={<Lightbulb size={20} />}>
			{children}
		</AlertBase>
	);
}

export function Warning({ children }: { children: React.ReactNode }) {
	return (
		<AlertBase title="Warning" className="bg-yellow-100/80 border-yellow-600 text-yellow-900" icon={<TriangleAlert size={20} />}>
			{children}
		</AlertBase>
	);
}

export function Caution({ children }: { children: React.ReactNode }) {
	return (
		<AlertBase title="Caution" className="bg-orange-200/80 border-orange-600 text-orange-950" icon={<OctagonX size={20} />}>
			{children}
		</AlertBase>
	);
}

function AlertBase({ children, title, className, icon }: { children: React.ReactNode; title: string; className?: string; icon?: React.ReactNode }) {
	return (
		<div className={cn('border-l-4 p-4 mb-4 mt-4 rounded-lg', className)}>
			<div className="flex gap-2 items-center mb-1">
				{icon && <>{icon}</>}
				<p className="font-bold">{title}</p>
			</div>
			<p className="text-base">{children}</p>
		</div>
	);
}
