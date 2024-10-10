import { getDocsUrl } from "../../utils/docs-url"
import type { IndexModelMixDefinition } from "../types"
import readme from "./README.md"

export default {
  categories: ["multilingual", "leaderboard"],
  config: {
    routes: [
      {
        model: "gemini-1.5-pro-exp-0801",
        weight: 0.3977
      },
      {
        model: "chatgpt-4o-latest-20240903",
        weight: 0.2861
      },
      {
        model: "chatgpt-4o-latest-20240808",
        weight: 0.2196
      },
      {
        model: "gemini-1.5-pro-exp-0827",
        weight: 0.0604
      },
      {
        model: "o1-preview",
        weight: 0.0362
      }
    ],
    strategy: "weighted"
  },
  cost: {
    inputCostPerUnit: 0.0000047678,
    outputCostPerUnit: 0.0000148567,
    unit: "token"
  },
  createdAt: new Date("2024-10-10T13:00:00-04:00"),
  description:
    "A mix that picks the highest-ranked model for French prompts, based on LMSYS French Leaderboard.",
  docsUrl: getDocsUrl("lmsys-french"),
  name: "LMSys French",
  readme,
  slug: "lmsys-french",
  type: "index"
} satisfies IndexModelMixDefinition
