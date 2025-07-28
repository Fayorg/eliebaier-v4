import { EvaluateOptions } from "next-mdx-remote-client/rsc";
import { IncludeType } from "./posts";
import remark_gfm from 'remark-gfm';

export async function GenerateOptionForMDXViewer(include?: IncludeType[]): Promise<EvaluateOptions<Record<string, unknown>>> {
    let remarkPlugins = [];
    let rehypePlugins = [];
    remarkPlugins.push(remark_gfm);

    if (include?.includes('math')) {
        const rehypeKatex = (await import('rehype-katex')).default;
		const remarkMath = (await import('remark-math')).default;
		rehypePlugins.push(rehypeKatex);
		remarkPlugins.push(remarkMath);
    }

    if (include?.includes('code')) {
        const rehypeHighlight = (await import('rehype-highlight')).default;
		rehypePlugins.push(rehypeHighlight);
    }

    return {
        mdxOptions: {
            remarkPlugins,
            rehypePlugins,
        },
    };
}