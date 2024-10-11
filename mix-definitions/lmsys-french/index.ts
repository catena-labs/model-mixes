import { getDocsUrl } from "../../utils/docs-url"
import type { IndexModelMixDefinition } from "../types"
import readme from "./README.md"

export default {
  categories: ["multilingual", "leaderboard"],
  config: {
    routes: [
      {
        model: "chatgpt-4o-latest",
        weight: 0.4401
      },
      {
        model: "gemini-1.5-pro-exp-0801",
        weight: 0.2281
      },
      {
        model: "gemini-1.5-pro-exp-0827",
        weight: 0.2025
      },
      {
        model: "gpt-4o-2024-05-13",
        weight: 0.1065
      },
      {
        model: "gemini-pro",
        weight: 0.0228
      }
    ],
    strategy: "weighted"
  },
  cost: {
    inputCostPerUnit: 0.0000043366,
    outputCostPerUnit: 0.0000130098,
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
