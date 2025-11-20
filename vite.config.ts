import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { searchForWorkspaceRoot } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
    allowedHosts: ['imgur.com'],
    fs: {
      allow: [
        searchForWorkspaceRoot(process.cwd()),
      ],
    },
  },
});
