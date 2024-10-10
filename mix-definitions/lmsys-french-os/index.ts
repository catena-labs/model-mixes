import { getDocsUrl } from "../../utils/docs-url"
import type { IndexModelMixDefinition } from "../types"
import readme from "./README.md"

export default {
  categories: ["multilingual", "leaderboard", "open-source"],
  config: {
    routes: [
      {
        model: "meta-llama/Meta-Llama-3.1-405B-Instruct",
        weight: 0.5711
      },
      {
        model: "mistralai/large-2",
        weight: 0.1927
      },
      {
        model: "deepseek-chat",
        weight: 0.1247
      }
    ],
    strategy: "weighted"
  },
  cost: {
    inputCostPerUnit: 0.0000028696,
    outputCostPerUnit: 0.0000044644,
    unit: "token"
  },
  createdAt: new Date("2024-10-10T13:00:00-04:00"),
  description:
    "A mix that picks the highest-ranked model for French prompts, based on LMSYS French Leaderboard.",
  docsUrl: getDocsUrl("lmsys-french-os"),
  name: "LMSys French (Open-Source)",
  readme,
  slug: "lmsys-french-os",
  type: "index"
} satisfies IndexModelMixDefinition
