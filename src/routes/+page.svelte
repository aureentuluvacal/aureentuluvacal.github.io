<script lang="ts">
	import type { PageServerData } from './$types';
	import { base } from '$app/paths';

	export let data: PageServerData;
</script>

<ul>
	{#each data.posts as post}
		<li class="post">
			<a href={`${base}/posts/${post.slug}`}>
				<div class="post-header">
					<div class="post-title">
						<h3>{post.title}</h3>
						{#if post.subtitle}
							<h4>{post.subtitle}</h4>
						{/if}
					</div>
					<span
						>{new Date(post.date).toLocaleDateString('en-US', {
							year: 'numeric',
							month: 'long',
							day: 'numeric'
						})}</span
					>
				</div>
				<p>{post.description}</p>
			</a>
		</li>
	{/each}
</ul>

<style lang="scss">
	@use '../css/colors';

	ul {
		padding: 0;
		list-style-type: none;

		li {
			margin: 24px 0;
			padding: 16px;
			border-left: 6px solid colors.$alice-blue;
			border-right: 6px solid colors.$alice-blue;

			&:hover {
				border-color: colors.$amber;
			}

			a {
				width: 100%;
				height: 100%;
			}

			@media screen and (max-width: 760px) {
				padding: 0;
			}
		}
	}

	.post {
		font-family: 'Rubik', serif;
		padding-bottom: 20px;

		a {
			font-weight: normal;
			text-decoration: none;

			&:hover {
				color: initial;
			}
		}

		&-header {
			display: flex;
			justify-content: space-between;
			font-weight: 100;

			@media screen and (max-width: 760px) {
				flex-direction: column;
				gap: 8px;
			}
		}

		&-title {
			font-family: 'JetBrains Mono', monospace;
			font-weight: 100;
			display: flex;
			flex-direction: column;

			h3,
			h4 {
				margin: 0;
			}
		}
	}
</style>
