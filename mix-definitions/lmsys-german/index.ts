import { getDocsUrl } from "../../utils/docs-url"
import type { IndexModelMixDefinition } from "../types"
import readme from "./README.md"

export default {
  categories: ["multilingual", "leaderboard"],
  config: {
    routes: [
      {
        model: "chatgpt-4o-latest",
        weight: 0.529
      },
      {
        model: "gemini-1.5-pro-exp-0827",
        weight: 0.1833
      },
      {
        model: "gemini-1.5-pro-exp-0801",
        weight: 0.1118
      },
      {
        model: "gpt-4o-2024-05-13",
        weight: 0.107
      },
      {
        model: "gemini-1.5-pro-002",
        weight: 0.0448
      },
      {
        model: "gpt-4o-mini",
        weight: 0.0241
      }
    ],
    strategy: "weighted"
  },
  cost: {
    inputCostPerUnit: 0.0000044608,
    outputCostPerUnit: 0.000013386,
    unit: "token"
  },
  createdAt: new Date("2024-10-10T13:00:00-04:00"),
  description:
    "A mix that picks the highest-ranked model for German prompts, based on LMSYS German Leaderboard.",
  docsUrl: getDocsUrl("lmsys-german"),
  name: "LMSys German",
  readme,
  slug: "lmsys-german",
  type: "index"
} satisfies IndexModelMixDefinition
