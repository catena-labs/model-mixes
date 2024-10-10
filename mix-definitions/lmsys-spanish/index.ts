import { getDocsUrl } from "../../utils/docs-url"
import type { IndexModelMixDefinition } from "../types"
import readme from "./README.md"

export default {
  categories: ["multilingual", "leaderboard"],
  config: {
    routes: [
      {
        model: "chatgpt-4o-latest-20240903",
        weight: 0.393
      },
      {
        model: "o1-preview",
        weight: 0.3145
      },
      {
        model: "o1-mini",
        weight: 0.1775
      },
      {
        model: "chatgpt-4o-latest-20240808",
        weight: 0.0792
      },
      {
        model: "gemini-1.5-pro-exp-0827",
        weight: 0.0357
      }
    ],
    strategy: "weighted"
  },
  cost: {
    inputCostPerUnit: 0.0000078913,
    outputCostPerUnit: 0.0000078913,
    unit: "token"
  },
  createdAt: new Date("2024-10-10T13:00:00-04:00"),
  description:
    "A mix that picks the highest-ranked model for Spanish prompts, based on LMSYS Spanish Leaderboard.",
  docsUrl: getDocsUrl("lmsys-spanish"),
  name: "LMSys Spanish (LMSys Leaderboard)",
  readme,
  slug: "lmsys-spanish",
  type: "index"
} satisfies IndexModelMixDefinition
