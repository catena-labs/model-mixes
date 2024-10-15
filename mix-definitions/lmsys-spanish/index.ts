import { getDocsUrl } from "../../utils/docs-url"
import type { IndexModelMixDefinition } from "../types"
import readme from "./README.md"

export default {
  categories: ["multilingual", "leaderboard"],
  config: {
    routes: [
      {
        model: "chatgpt-4o-latest",
        weight: 0.5046
      },
      {
        model: "gemini-1.5-pro-exp-0827",
        weight: 0.1863
      },
      {
        model: "gemini-1.5-pro-exp-0801",
        weight: 0.1125
      },
      {
        model: "claude-3-5-sonnet-20240620",
        weight: 0.1037
      },
      {
        model: "gemini-1.5-pro-002",
        weight: 0.0663
      },
      {
        model: "gpt-4o-mini",
        weight: 0.0266
      }
    ],
    strategy: "weighted"
  },
  cost: {
    inputCostPerUnit: 0.0000041982,
    outputCostPerUnit: 0.0000132335,
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
