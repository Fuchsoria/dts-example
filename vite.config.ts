import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 99999,
    minify: false,
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "sdk",
      fileName: "sdk",
      formats: ["es"],
    },
  },
  plugins: [
    dts({
      staticImport: true,
      copyDtsFiles: false,
      // rollupTypes: true,
    }),
  ],
});
