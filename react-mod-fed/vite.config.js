import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

import {federation} from "@module-federation/vite";
import federationConfig from "./module-federation.config.js";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [viteReact(), tailwindcss(), federation(federationConfig)],
  test: {
    globals: true,
    environment: "jsdom",
  },

});
