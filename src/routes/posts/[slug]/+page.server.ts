import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { posts } from '$lib/server/posts';
import type { PostType } from '$lib/server/posts';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;

	// get post with metadata
	const post = posts.find((post: PostType) => slug === post.slug);

	if (!post) {
		throw error(404, 'Post not found');
	}

	return {
		post
	};
};
