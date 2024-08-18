import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data }) => {
	const component = await import(`../../../lib/posts/${data.post.slug}.md?raw`);

	return {
		post: data.post,
		component: component.default,
		layout: {
			fullWidth: true
		}
	};
};
