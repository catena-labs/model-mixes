import { getDocsUrl } from "../../utils/docs-url"
import type { IndexModelMixDefinition } from "../types"
import readme from "./README.md"

export default {
  categories: ["multilingual", "leaderboard"],
  config: {
    routes: [
      {
        model: "chatgpt-4o-latest",
        weight: 0.5028
      },
      {
        model: "gemini-1.5-pro-exp-0801",
        weight: 0.1848
      },
      {
        model: "gemini-1.5-pro-exp-0827",
        weight: 0.1695
      },
      {
        model: "gemini-1.5-pro-002",
        weight: 0.109
      },
      {
        model: "gpt-4o-2024-05-13",
        weight: 0.0339
      }
    ],
    strategy: "weighted"
  },
  cost: {
    inputCostPerUnit: 0.0000043911,
    outputCostPerUnit: 0.0000131732,
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
