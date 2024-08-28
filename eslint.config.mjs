import path from "node:path"
import { fileURLToPath } from "node:url"
import { fixupPluginRules, includeIgnoreFile } from "@eslint/compat"
import eslint from "@eslint/js"
import tseslint from "typescript-eslint"
import prettier from "eslint-config-prettier"
import pluginSort from "eslint-plugin-sort-keys-fix"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const gitignorePath = path.resolve(__dirname, ".gitignore")

export default tseslint.config(
  includeIgnoreFile(gitignorePath),
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  prettier,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigDirName: import.meta.dirname
      }
    },
    plugins: {
      "sort-keys-fix": fixupPluginRules(pluginSort)
    },
    rules: {
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports" }
      ],
      "sort-imports": [
        "error",
        {
          ignoreDeclarationSort: true
        }
      ],
      "sort-keys-fix/sort-keys-fix": "warn"
    }
  },
  /**
   * Config files
   */
  {
    files: ["**/*.config.{ts,js,mjs}"],
    rules: {
      "import/no-anonymous-default-export": "off"
    }
  },
  /**
   * Javascript files
   */
  {
    files: ["**/*.{js,mjs,cjs}"],
    ...tseslint.configs.disableTypeChecked
  }
)
