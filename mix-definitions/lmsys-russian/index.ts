import { getDocsUrl } from "../../utils/docs-url"
import type { IndexModelMixDefinition } from "../types"
import readme from "./README.md"

export default {
  categories: ["multilingual", "leaderboard"],
  config: {
    routes: [
      {
        model: "chatgpt-4o-latest",
        weight: 0.4159
      },
      {
        model: "gemini-1.5-pro-exp-0827",
        weight: 0.2015
      },
      {
        model: "gemini-1.5-pro-exp-0801",
        weight: 0.1625
      },
      {
        model: "gemini-1.5-pro-002",
        weight: 0.1252
      },
      {
        model: "claude-3-opus-20240229",
        weight: 0.0731
      },
      {
        model: "gemini-1.5-flash-exp-0827",
        weight: 0.0219
      }
    ],
    strategy: "weighted"
  },
  cost: {
    inputCostPerUnit: 0.0000049875,
    outputCostPerUnit: 0.0000172012,
    unit: "token"
  },
  createdAt: new Date("2024-10-10T13:00:00-04:00"),
  description:
    "A mix that picks the highest-ranked model for Russian prompts, based on LMSYS Russian Leaderboard.",
  docsUrl: getDocsUrl("lmsys-russian"),
  name: "LMSys Russian",
  readme,
  slug: "lmsys-russian",
  type: "index"
} satisfies IndexModelMixDefinition
