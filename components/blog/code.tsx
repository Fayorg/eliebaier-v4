'use client';

import { Copy } from 'lucide-react';
import React, { ReactElement } from 'react';
import { ReactNode } from 'react';

function isReactElementWithProps(child: unknown): child is ReactElement<{ children?: ReactNode }> {
	return typeof child === 'object' && child !== null && 'type' in child && 'props' in child;
}

function extractTextFromChildren(children: ReactNode): string {
	if (typeof children === 'string' || typeof children === 'number') {
		return String(children);
	}

	if (Array.isArray(children)) {
		return children.map(extractTextFromChildren).join('');
	}

	if (isReactElementWithProps(children)) {
		return extractTextFromChildren(children.props?.children);
	}

	return '';
}

export function Code({ children }: { children: React.ReactNode }) {
	const codeText = extractTextFromChildren(children);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(codeText);
			console.log('Copied to clipboard!');
		} catch (err) {
			console.error('Failed to copy text', err);
		}
	};

	return (
		<div className="relative">
			<div className="absolute right-2 top-2 z-10 hover:bg-white/20 p-2 rounded-md transition-all duration-200 cursor-pointer" onClick={handleCopy}>
				<Copy size={20} />
			</div>
			<pre className="overflow-x-auto rounded-lg bg-gray-800 p-4 text-base text-white/80">{children}</pre>
		</div>
	);
}
