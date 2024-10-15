import { getDocsUrl } from "../../utils/docs-url"
import type { IndexModelMixDefinition } from "../types"
import readme from "./README.md"

export default {
  categories: ["multilingual", "leaderboard"],
  config: {
    routes: [
      {
        model: "gemini-1.5-pro-002",
        weight: 0.7202
      },
      {
        model: "chatgpt-4o-latest",
        weight: 0.1692
      },
      {
        model: "gemini-1.5-pro-exp-0827",
        weight: 0.0764
      },
      {
        model: "gemini-1.5-pro-exp-0801",
        weight: 0.0342
      }
    ],
    strategy: "weighted"
  },
  cost: {
    inputCostPerUnit: 0.0000038289,
    outputCostPerUnit: 0.0000114867,
    unit: "token"
  },
  createdAt: new Date("2024-10-10T13:00:00-04:00"),
  description:
    "A mix that picks the highest-ranked model for Korean prompts, based on LMSYS Korean Leaderboard.",
  docsUrl: getDocsUrl("lmsys-korean"),
  name: "LMSys Korean (LMSys Leaderboard)",
  readme,
  slug: "lmsys-korean",
  type: "index"
} satisfies IndexModelMixDefinition
