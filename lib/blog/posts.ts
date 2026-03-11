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
    visible: boolean,
}

export type IncludeType = 'math' | 'code';

export function getAllPosts(): Post[] {
    const fileNames = fs.readdirSync(postsDirectory);
    const validFileNames = fileNames.filter((fileName) => {
        return fileName.endsWith('.md') || fileName.endsWith('.mdx');
    });

    const allPostsData = validFileNames.map((fileName) => {
        const slug = fileName.replace(/\.(md|mdx)$/, '');

        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

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

    return allPostsData.filter((post) => {
        if(post.visible == false && !(process.env.NODE_ENV === 'development')) {
            return false;
        }
        return true;
    }).sort((a, b) => {
        return b.date.getTime() - a.date.getTime();
    });
}

export function getPostBySlug(slug: string): Post | null {
    const fullPathMD = path.join(postsDirectory, `${slug}.md`);
    const fullPathMDX = path.join(postsDirectory, `${slug}.mdx`);

    let fullPath;
    if (fs.existsSync(fullPathMD)) {
        fullPath = fullPathMD;
    } else if (fs.existsSync(fullPathMDX)) {
        fullPath = fullPathMDX;
    } else {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');

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
            visible: frontmatter.visible !== undefined ? frontmatter.visible : false,
        },
        content,
    };
}