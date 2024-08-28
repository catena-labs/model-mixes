import { defineConfig } from "tsup"

export default defineConfig({
  clean: true,
  dts: true,
  entry: ["src/index.ts"],
  format: "esm",
  loader: {
    ".md": "text"
  },
  outDir: "dist"
})
