import path from "node:path";
import MillionLint from "@million/lint";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [MillionLint.vite(), TanStackRouterVite(), react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src")
		}
	}
});
