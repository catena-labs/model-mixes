import { getDocsUrl } from "../../utils/docs-url"
import type { IndexModelMixDefinition } from "../types"
import readme from "./README.md"

export default {
  categories: ["leaderboard"],
  config: {
    strategy: "weighted",
    routes: [
      {
        model: "chatgpt-4o-latest-20240903",
        weight: 0.5299
      },
      {
        model: "gemini-1.5-pro-exp-0827",
        weight: 0.3477
      },
      {
        model: "gemini-1.5-flash-exp-0827",
        weight: 0.0742
      },
      {
        model: "gpt-4o-2024-05-13",
        weight: 0.0482
      }
    ]
  },
  cost: {
    inputCostPerUnit: 0.000004936,
    outputCostPerUnit: 0.0000148134,
    unit: "token"
  },
  createdAt: new Date("2024-08-13T13:00:00-04:00"),
  description:
    "A mix that picks the highest-ranked model for prompts with image attachments, based on LMSYS Vision Leaderboard.",
  docsUrl: getDocsUrl("lmsys-vision"),
  name: "LMSys Vision",
  readme,
  slug: "lmsys-vision",
  type: "index"
} satisfies IndexModelMixDefinition
