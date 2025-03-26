import { defineConfig } from "vite";

import solidPlugin from "vite-plugin-solid";
import tailwindcss from "@tailwindcss/vite";
import { federation } from "@module-federation/vite";
import federationConfig from "./module-federation.config.js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [solidPlugin(), tailwindcss(), federation(federationConfig)],
});
