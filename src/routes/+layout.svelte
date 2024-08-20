<div class="container">
	<slot />
</div>

<style lang="scss">
	@use '../css/colors';
	@use 'sass:math';
	@use 'sass:color';

	:global(body) {
		margin: 0;
		background-color: colors.$alice-blue;
		color: colors.$royal-blue-traditional;
		height: 100%;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		font-family: 'JetBrains Mono', monospace;
		font-weight: 100;
		margin: 50px 0 10px;
	}

	:global(#header-container) {
		text-align: center;
		height: 150px;
		padding: 10px 20%;
		font-family: 'Rubik', sans-serif;

		a h1 {
			text-decoration: none;
		}

		@media screen and (max-width: 760px) {
			padding: 10px 24px;
		}
	}

	:global(#content-container) {
		width: 70%;
		height: 100vh;
		max-width: 800px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		font-size: 18px;

		@media screen and (max-width: 760px) {
			width: auto;
			padding: 0 24px;
		}
	}

	:global(p:has(img), a:has(img)) {
		display: flex;
		justify-content: center;
	}

	:global(img) {
		object-fit: cover;
		border: 1px solid colors.$alice-blue;
		border-radius: 8px;
		width: 84%;
	}

	:global(a) {
		text-decoration: underline dotted 2px;
		text-underline-offset: 4px;
		font-weight: bold;
		color: colors.$royal-blue-traditional;
	}

	:global(a:visited) {
		color: colors.$royal-blue-traditional;
	}

	:global(a:hover) {
		color: colors.$amber;
	}

	:global(table) {
		width: 90%;
		margin: 0 auto;
		border-collapse: collapse;
	}

	:global(tr) {
		border-bottom: 1px solid colors.$royal-blue-traditional;
	}

	:global(tr:last-of-type) {
		border-bottom: none;
	}

	:global(thead, th) {
		border-bottom: 1px solid colors.$royal-blue-traditional;
		border-right: 1px solid colors.$royal-blue-traditional;
	}

	:global(thead:last-of-type, th:last-of-type) {
		border-right: none;
	}

	:global(td) {
		text-align: center;
		border-right: 1px solid colors.$royal-blue-traditional;
	}

	:global(td:last-of-type) {
		border-right: none;
	}

	:global(blockquote) {
		padding: 4px 32px;
		margin: 30px auto;
		background-color: color.adjust(colors.$azure-web, $lightness: 70%);
		border-left: 6px solid colors.$royal-blue-traditional;
		border-right: 6px solid colors.$royal-blue-traditional;
		border-radius: 8px;
	}

	:global(.hljs-comment, .hljs-title) {
		color: colors.$sky-blue;
	}

	:global(
			.hljs-variable,
			.hljs-attribute,
			.hljs-tag,
			.hljs-regexp,
			.hljs-ruby .constant,
			.hljs-xml .tag .title,
			.hljs-xml .pi,
			.hljs-xml .doctype,
			.hljs-html .doctype,
			.hljs-css .id,
			.hljs-css .class,
			.hljs-css .pseudo
		) {
		color: colors.$flame;
	}

	:global(
			.hljs-number,
			.hljs-preprocessor,
			.hljs-built_in,
			.hljs-literal,
			.hljs-params,
			.hljs-constant
		) {
		color: colors.$amber;
	}

	:global(.hljs-class, .hljs-ruby .class .title, .hljs-css .rules .attribute) {
		color: #ffeead;
	}

	:global(
			.hljs-string,
			.hljs-value,
			.hljs-inheritance,
			.hljs-header,
			.hljs-ruby .symbol,
			.hljs-xml .cdata
		) {
		color: colors.$emerald;
	}

	:global(.hljs-css .hexcolor) {
		color: #99ffff;
	}

	:global(
			.hljs-function,
			.hljs-python .decorator,
			.hljs-python .title,
			.hljs-ruby .function .title,
			.hljs-ruby .title .keyword,
			.hljs-perl .sub,
			.hljs-javascript .title,
			.hljs-coffeescript .title,
			.hljs-punctuation
		) {
		color: colors.$azure-web;
	}

	:global(.hljs-keyword, .hljs-javascript .function) {
		color: #d77efd;
	}

	:global(pre > code) {
		display: block;
		background: colors.$royal-blue-traditional;
		color: colors.$alice-blue;
		font-family: Menlo, Monaco, Consolas, monospace;
		line-height: 1.5;
		font-size: 15px;
		box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
		border: 1px solid colors.$royal-blue-traditional;
		border-radius: 8px;
		padding: 10px;
	}
</style>
