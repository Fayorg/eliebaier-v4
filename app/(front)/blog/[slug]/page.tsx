import { MDXRemote } from 'next-mdx-remote-client/rsc';

export default async function BlogPage() {
	const markdownContent = `
        # My Blog Post Title

        This is a paragraph.

        Here's a list:
        * Item 1
        * Item 2

        \`\`\`javascript
        console.log('Hello, world!');
        \`\`\`

        ![An image](https://apod.nasa.gov/apod/image/2505/NGC1360_Chander_4310.jpg)

        This is a **bold** word and this is *italic*.
    `;

	return (
		<div>
			<h1 className="text-3xl font-bold">Blog Post</h1>
			<p className="mt-4">This is a blog post page.</p>
			<p className="mt-4">You can add your blog content here.</p>

			<MDXRemote source={markdownContent} components={{ h1: Testing }} />
		</div>
	);
}

function Testing({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-gray-200 p-4 rounded">
			<p>This is a test component!</p>
			<h1>{children}</h1>
		</div>
	);
}
