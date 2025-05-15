import Image from 'next/image';

export type IMGProps = React.ImgHTMLAttributes<HTMLImageElement>;
export function IMG({ src = '', alt = '', ...props }: IMGProps) {
	return (
		<span className="block w-full relative aspect-video rounded-2xl overflow-hidden">
			<Image src={src.toString()} alt={alt} fill className="object-cover h-" />
		</span>
	);
}
