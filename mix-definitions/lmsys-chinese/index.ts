import { getDocsUrl } from "../../utils/docs-url"
import type { IndexModelMixDefinition } from "../types"
import readme from "./README.md"

export default {
  categories: ["multilingual", "leaderboard"],
  config: {
    strategy: "weighted",
    routes: [
      {
        model: "chatgpt-4o-latest-20240903",
        weight: 0.3652
      },
      {
        model: "gemini-1.5-pro-exp-0827",
        weight: 0.2304
      },
      {
        model: "o1-preview",
        weight: 0.2126
      },
      {
        model: "chatgpt-4o-latest-20240808",
        weight: 0.1585
      },
      {
        model: "o1-mini",
        weight: 0.0332
      }
    ]
  },
  cost: {
    inputCostPerUnit: 0.0000068487,
    outputCostPerUnit: 0.0000239013,
    unit: "token"
  },
  createdAt: new Date("2024-08-13T13:00:00-04:00"),
  description:
    "A mix that picks the highest-ranked model for Chinese prompts, based on LMSYS Chinese Leaderboard.",
  docsUrl: getDocsUrl("lmsys-chinese"),
  name: "LMSys Chinese",
  readme,
  slug: "lmsys-chinese",
  type: "index"
} satisfies IndexModelMixDefinition
