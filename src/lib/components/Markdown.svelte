<script>
	import MarkdownIt from 'markdown-it';
	import frontmatter from 'markdown-it-front-matter';
	import katex from '@wangjiezhe/markdown-it-katex';
	import hljs from 'highlight.js';

	export let markdown = '';

	const md = new MarkdownIt({
		highlight: function (str, lang) {
			if (lang && hljs.getLanguage(lang)) {
				try {
					return hljs.highlight(lang, str).value;
				} catch (e) {
					console.error('Failed to highlight string');
				}
			}
			return '';
		}
	})
		.use(katex, {
			delimiters: [
				{ left: '$$', right: '$$', display: true },
				{ left: '$', right: '$', display: false }
			]
		})
		.use(frontmatter, () => {});
	let rendered = md.render(markdown);
</script>

<div>
	{@html rendered}
</div>
