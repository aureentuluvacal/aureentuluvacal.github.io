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
	draft?: boolean;
	slug: string;
	previous: PostType | number;
	next: PostType | number;
}

export const posts  = Object.entries(
	import.meta.glob<GlobEntry>('/src/lib/posts/**/*.md', { eager: true })
)
	.map(([filepath, globEntry]) => {
		return {
			...globEntry.metadata,
			slug: parse(filepath).name,
		};
	})
	.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
	.filter((post) => !post.draft)
	// add references to the next/previous post
	.map((post, index, allPosts) => ({
		...post,
		next: allPosts[index - 1] || 0,
		previous: allPosts[index + 1] || 0,
	}));
