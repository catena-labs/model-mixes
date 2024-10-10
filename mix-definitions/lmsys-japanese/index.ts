import { getDocsUrl } from "../../utils/docs-url"
import type { IndexModelMixDefinition } from "../types"
import readme from "./README.md"

export default {
  categories: ["multilingual", "leaderboard"],
  config: {
    routes: [
      {
        model: "chatgpt-4o-latest-20240903",
        weight: 0.4406
      },
      {
        model: "o1-preview",
        weight: 0.2616
      },
      {
        model: "gemini-1.5-pro-exp-0801",
        weight: 0.1456
      },
      {
        model: "gemini-1.5-pro-exp-0827",
        weight: 0.1121
      },
      {
        model: "chatgpt-4o-latest-20240808",
        weight: 0.0401
      }
    ],
    strategy: "weighted"
  },
  cost: {
    inputCostPerUnit: 0.0000073738,
    outputCostPerUnit: 0.0000261236,
    unit: "token"
  },
  createdAt: new Date("2024-10-10T13:00:00-04:00"),
  description:
    "A mix that picks the highest-ranked model for Japanese prompts, based on LMSYS Japanese Leaderboard.",
  docsUrl: getDocsUrl("lmsys-japanese"),
  name: "LMSys Japanese (LMSys Leaderboard)",
  readme,
  slug: "lmsys-japanese",
  type: "index"
} satisfies IndexModelMixDefinition
