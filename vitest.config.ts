import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		projects: [
			defineConfig({
				plugins: [react(), tsconfigPaths()],
				test: {
					globals: true,
					environment: "jsdom",
					include: ["src/**/*.test.{ts,tsx}"],
					setupFiles: ["vitest.setup.ts"],
				},
			}),
		],
	},
});
