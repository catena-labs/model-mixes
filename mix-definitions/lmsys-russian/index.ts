import { getDocsUrl } from "../../utils/docs-url"
import type { IndexModelMixDefinition } from "../types"
import readme from "./README.md"

export default {
  categories: ["multilingual"],
  config: {
    strategy: "weighted",
    routes: [
      {
        model: "chatgpt-4o-latest-20240903",
        weight: 0.2947
      },
      {
        model: "gemini-1.5-pro-exp-0827",
        weight: 0.252
      },
      {
        model: "chatgpt-4o-latest-20240808",
        weight: 0.2318
      },
      {
        model: "gemini-1.5-pro-exp-0801",
        weight: 0.1947
      },
      {
        model: "o1-preview",
        weight: 0.0268
      }
    ]
  },
  cost: {
    inputCostPerUnit: 0.0000046897,
    outputCostPerUnit: 0.0000144789,
    unit: "token"
  },
  createdAt: new Date("2024-08-13T13:00:00-04:00"),
  description:
    "A mix that picks the highest-ranked model for Russian prompts, based on LMSYS German Leaderboard.",
  docsUrl: getDocsUrl("lmsys-russian"),
  name: "LMSys Russian (LMSys Leaderboard)",
  readme,
  slug: "lmsys-russian",
  type: "index"
} satisfies IndexModelMixDefinition
