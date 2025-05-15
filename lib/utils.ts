export function formatBlogPostTitle(title: string): string {
    return title
        .toLowerCase()
        .replaceAll(' ', '-')
        .replaceAll("'", '')
        .replaceAll('?', '')
        .replaceAll('!', '')
        .replaceAll('.', '')
        .replaceAll(',', '');
}