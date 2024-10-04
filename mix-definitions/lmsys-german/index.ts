import { getDocsUrl } from "../../utils/docs-url"
import type { IndexModelMixDefinition } from "../types"
import readme from "./README.md"

export default {
  categories: ["multilingual"],
  config: {
    strategy: "weighted",
    routes: [
      {
        model: "chatgpt-4o-latest-20240808",
        weight: 0.2914
      },
      {
        model: "o1-preview",
        weight: 0.2681
      },
      {
        model: "chatgpt-4o-latest-20240903",
        weight: 0.2515
      },
      {
        model: "gemini-1.5-pro-exp-0827",
        weight: 0.1624
      },
      {
        model: "o1-mini",
        weight: 0.0265
      }
    ]
  },
  cost: {
    inputCostPerUnit: 0.0000075322,
    outputCostPerUnit: 0.0000267798,
    unit: "token"
  },
  createdAt: new Date("2024-08-13T13:00:00-04:00"),
  description:
    "A mix that picks the highest-ranked model for German prompts, based on LMSYS German Leaderboard.",
  docsUrl: getDocsUrl("lmsys-german"),
  name: "LMSys German (LMSys Leaderboard)",
  readme,
  slug: "lmsys-german",
  type: "index"
} satisfies IndexModelMixDefinition
