import { getDocsUrl } from "../../utils/docs-url"
import type { IndexModelMixDefinition } from "../types"
import readme from "./README.md"

export default {
  categories: ["multilingual", "leaderboard"],
  config: {
    routes: [
      {
        model: "chatgpt-4o-latest",
        weight: 0.4936
      },
      {
        model: "gemini-1.5-pro-exp-0827",
        weight: 0.2028
      },
      {
        model: "gemini-1.5-pro-002",
        weight: 0.1593
      },
      {
        model: "gemini-1.5-pro-exp-0801",
        weight: 0.1129
      },
      {
        model: "gemini-1.5-flash-exp-0827",
        weight: 0.0313
      }
    ],
    strategy: "weighted"
  },
  cost: {
    inputCostPerUnit: 0.0000042158,
    outputCostPerUnit: 0.0000126493,
    unit: "token"
  },
  createdAt: new Date("2024-10-10T13:00:00-04:00"),
  description:
    "A mix that picks the highest-ranked model for Chinese prompts, based on LMSYS Chinese Leaderboard.",
  docsUrl: getDocsUrl("lmsys-chinese"),
  name: "LMSys Chinese",
  readme,
  slug: "lmsys-chinese",
  type: "index"
} satisfies IndexModelMixDefinition
