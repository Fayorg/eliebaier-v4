import { Post } from "@/app/generated/prisma";
import prisma from "@/lib/prisma";

type GetPostBySlugOptions = {
    allowUnpublished?: boolean;
}
export async function getPostBySlug(slug: string, { allowUnpublished = false }: GetPostBySlugOptions): Promise<Post | null> {
    return prisma.post.findUnique({
        where: {
            slug,
            ...(allowUnpublished ? {} : { published: true }),
        }
    })
}

export async function getFeaturedPosts(limit?: number): Promise<Post[]> {
    return prisma.post.findMany({
        where: {
            published: true,
        },
        orderBy: {
            createdAt: 'desc',
        },
        take: limit ?? 3,
    })
}

export async function getAllPosts({ allowUnpublished = false }: GetPostBySlugOptions, limit?: number): Promise<Post[]> {
    return prisma.post.findMany({
        where: {
            ...(allowUnpublished ? {} : { published: true }),
        },
        orderBy: {
            createdAt: 'desc',
        },
        take: limit ?? 3,
    })
}