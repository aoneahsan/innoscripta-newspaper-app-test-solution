import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
import path from 'path';
import { fileURLToPath } from 'url';

const _filePath = fileURLToPath(import.meta.url);
const __dirname = path.dirname(_filePath);

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), legacy()],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/setupTests.ts',
		coverage: {
			ignoreEmptyLines: true,
			reporter: ['text', 'html'],
			provider: 'v8',
		},
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@cy': path.resolve(__dirname, './cypress'),
		},
	},
});
