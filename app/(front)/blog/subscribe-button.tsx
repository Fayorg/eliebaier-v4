'use client';

import { Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger } from '@/components/utils/popover';
import { addSubscriber } from '@/lib/listmonk/subscriber';
import { useState } from 'react';
import { toast } from 'sonner';

export default function SubscribeButton({ className, children }: { className?: string; children?: React.ReactNode }) {
	const [isLoading, setIsLoading] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [email, setEmail] = useState('');

	async function handleSubscribe() {
		setIsLoading(true);

		// regex to check email ^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$
		const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
		if (!emailRegex.test(email)) {
			toast.error('Please enter a valid email address.');
			setIsLoading(false);
			return;
		}

		// extract the user browser language
		const userLang = navigator.language || navigator.languages[0];

		// TODO: custom toast https://sonner.emilkowal.ski/styling
		toast.promise(addSubscriber(email, { language: userLang }), {
			loading: 'Subscribing...',
			success: ({ sucess, err }) => {
				if (sucess) {
					setIsOpen(false);
					return 'Successfully subscribed!';
				}

				if (err === 'SubscriberAlreadyExists') {
					setIsOpen(false);
					return 'You are already subscribed!';
				}
				return 'Failed to subscribe. Please try again later.';
			},
			error: 'Failed to subscribe. Please try again later.',
			finally: () => setIsLoading(false),
		});
	}

	return (
		<Popover open={isOpen} onOpenChange={setIsOpen}>
			<PopoverTrigger asChild className={className}>
				<button disabled={isLoading} className="flex border-1 border-white/15 hover:border-white/35 transition-all duration-200 px-4 py-3 w-fit md:mt-10 rounded-xl gap-2 items-center">
					{children}
				</button>
			</PopoverTrigger>
			<PopoverContent className="w-64 md:w-96 bg-background border border-white/15" align="end">
				<PopoverHeader>
					<PopoverTitle className="font-sans text-lg">Subscribe to my newsletter</PopoverTitle>
					<PopoverDescription className="text-sm text-white/80 mb-4">Get the latest posts delivered right to your inbox. No spam, pinky promise!</PopoverDescription>
				</PopoverHeader>
				<form
					className="flex flex-col gap-2"
					onSubmit={(e) => {
						e.preventDefault();
						handleSubscribe();
					}}
				>
					<input type="email" className="border-1 border-white/15 bg-transparent w-full px-3 py-2 rounded-md text-white" placeholder="Your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
					<button disabled={isLoading} type="submit" className="border-1 border-white/15 hover:border-white/35 transition-all duration-200 px-4 py-2 w-full rounded-md flex gap-2 items-center justify-center outline-0">
						<p className="text-base text-white">Subscribe</p>
					</button>
				</form>
			</PopoverContent>
		</Popover>
	);
}
