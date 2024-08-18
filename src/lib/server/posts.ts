import { parse } from 'path';

type GlobEntry = {
	metadata: PostType;
	default: unknown;
};

export interface PostType {
	title: string;
	subtitle?: string;
	description: string;
	content: string;
	date: string;
	slug: string;
	previous: PostType | number;
	next: PostType | number;
}

// Get all posts and add metadata
export const posts  = Object.entries(
	import.meta.glob<GlobEntry>('/src/lib/posts/**/*.md', { eager: true })
)
	.map(([filepath, globEntry]) => {
		return {
			...globEntry.metadata,

			// generate the slug from the file path
			slug: parse(filepath).name,
		};
	})
	// sort by date
	.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
	// add references to the next/previous post
	.map((post, index, allPosts) => ({
		...post,
		next: allPosts[index - 1] || 0,
		previous: allPosts[index + 1] || 0,
	}));
