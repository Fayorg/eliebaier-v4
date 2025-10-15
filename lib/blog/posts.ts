import path from "node:path";
import fs from "node:fs";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), 'posts');

export type Post = {
    slug: string,
    title: string,
    description: string,
    image: string,
    date: Date,
    readDuration: string,
    content: string,
    include?: IncludeType[],
}
export type IncludeType = 'math' | 'code';

function listPostDirectories(): string[] {
    return fs.readdirSync(postsDirectory).filter((file) => {
        return fs.lstatSync(path.join(postsDirectory, file)).isDirectory();
    });
}

function getRawPostContent(slug: string): string {
    const mdFilesList = fs.readdirSync(path.join(postsDirectory, slug)).filter((file) => file.endsWith('.md') || file.endsWith('.mdx'));
    if (mdFilesList.length === 0) {
        throw new Error(`No markdown file found for post: ${slug}`);
    }
    const fullPath = path.join(postsDirectory, slug, mdFilesList[0]);
    return fs.readFileSync(fullPath, 'utf8');
}

function doesSlugExist(slug: string): boolean {
    const postDirectories = listPostDirectories();
    return postDirectories.includes(slug);
}

export function getAllPosts(): Post[] {
    const postDirectories = listPostDirectories();
    const allPostsData = postDirectories.map((dir) => {
        const slug = dir;
        const fileContents = getRawPostContent(dir);

        const { data: frontmatter, content } = matter(fileContents);
        return {
            slug,
            content,
            ...{
                title: frontmatter.title || '',
                description: frontmatter.description || '',
                image: frontmatter.image || '',
                date: new Date(frontmatter.date) || new Date(),
                readDuration: frontmatter.read || '0 min',
                visible: frontmatter.visible !== undefined ? frontmatter.visible : false,
                include: frontmatter.include || [],
            },
        };
    });

    return allPostsData
        .filter(post => post.visible || process.env.NODE_ENV === 'development')
        .sort((a, b) => b.date.getTime() - a.date.getTime());
}

export function getPostBySlug(slug: string): Post | null {
    if (!doesSlugExist(slug)) {
        return null;
    }

    const fileContents = getRawPostContent(slug);
    const { data: frontmatter, content } = matter(fileContents);

    if((!frontmatter.visible && process.env.NODE_ENV !== 'development') || frontmatter.visible === false && !(process.env.NODE_ENV === 'development')) {
        return null;
    }

    return {
        slug,
        ...{
            title: frontmatter.title || '',
            description: frontmatter.description || '',
            image: frontmatter.image || '',
            date: new Date(frontmatter.date) || new Date(),
            readDuration: frontmatter.read || '0 min',
            include: frontmatter.include || [],
        },
        content,
    };
}