import { ImageLoaderProps } from "next/image"

export default function cloudflareLoader({ src, width, quality }: ImageLoaderProps) {
  const params = [`width=${width}`, `quality=${quality || 75}`, 'format=auto']
  return `https://cdn.eliebaier.ch/${params.join(',')}/${src}`
}