<script lang="ts">
	import type { PageData } from './$types';
	import Markdown from '$lib/components/Markdown.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.post.title}</title>
</svelte:head>
<div>
	<article>
		<header>
			<h1>{data.post.title}</h1>
			{#if data.post.subtitle}
				<h3>{data.post.subtitle}</h3>
			{/if}
			<h5>
				{new Date(data.post.date).toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				})}
			</h5>
		</header>
		<div id="post-content">
			<Markdown markdown={data.component} />
		</div>
		<div class="post-controlContainer">
			{#if data.post.previous.slug}
				<a href={`/posts/${data.post.previous.slug}`} target="_self" class="post-control">
					<p>
						<i class="icons-arrow icons-arrow--left"></i>
						Previous
					</p>
					<p>{data.post.previous.title}</p>
				</a>
			{/if}
			{#if data.post.next.slug}
				<a
					href={`/posts/${data.post.next.slug}`}
					target="_self"
					class="post-control"
					style="text-align: right;"
				>
					<p>
						Next
						<i class="icons-arrow icons-arrow--right"></i>
					</p>
					<p>{data.post.next.title}</p>
				</a>
			{/if}
		</div>
	</article>
</div>

<style lang="scss">
	@use '../../../css/colors.scss';
	@use 'sass:color';

	article {
		margin-bottom: 80px;

		header {
			h3 {
				margin: 16px 0;
			}
		}
	}

	#post-content {
		font-family: 'Rubik', serif;
		line-height: 28px;
	}

	:global(.post-controlContainer) {
		margin-top: 56px;
		display: flex;
		justify-content: space-between;
		gap: 20%;
	}

	.post-control {
		color: colors.$alice-blue;
		text-decoration: none;
		color: colors.$royal-blue-traditional;
		padding: 2px 16px;
		width: 180px;
		display: block;
		font-family: 'Rubik', serif;
		font-size: 14px;
		flex: 1;

		&:hover {
			color: colors.$royal-blue-traditional;
			cursor: hover;
		}

		p {
			margin: 18px 0;
		}

		p:first-child {
			font-family: 'Rubik', serif;
			font-size: 16px;
		}

		p:last-child {
			font-family: 'JetBrains Mono', monospace;
			font-weight: 400;
		}
	}

	.icons-arrow {
		border: solid colors.$royal-blue-traditional;
		border-width: 0 3px 3px 0;
		display: inline-block;
		padding: 3px;

		&--right {
			transform: rotate(-45deg);
			-webkit-transform: rotate(-45deg);
		}

		&--left {
			transform: rotate(135deg);
			-webkit-transform: rotate(135deg);
		}
	}
</style>
