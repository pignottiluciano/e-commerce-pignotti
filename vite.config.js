import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  preprocessors: {
    "*.scss": ["sass"],
  },
  loader: {
    ".js": "jsx",
  },
});
