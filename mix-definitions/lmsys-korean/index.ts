import { getDocsUrl } from "../../utils/docs-url"
import type { IndexModelMixDefinition } from "../types"
import readme from "./README.md"

export default {
  categories: ["multilingual"],
  config: {
    strategy: "weighted",
    routes: [
      {
        model: "gemini-1.5-pro-api-0409-preview",
        weight: 0.4244
      },
      {
        model: "chatgpt-4o-latest-20240903",
        weight: 0.3218
      },
      {
        model: "chatgpt-4o-latest-20240808",
        weight: 0.1708
      },
      {
        model: "gemini-1.5-pro-exp-0827",
        weight: 0.0444
      },
      {
        model: "gemini-1.5-pro-exp-0801",
        weight: 0.0386
      }
    ]
  },
  cost: {
    inputCostPerUnit: 0.0000043237,
    outputCostPerUnit: 0.0000129711,
    unit: "token"
  },
  createdAt: new Date("2024-08-13T13:00:00-04:00"),
  description:
    "A mix that picks the highest-ranked model for Korean prompts, based on LMSYS German Leaderboard.",
  docsUrl: getDocsUrl("lmsys-korean"),
  name: "LMSys Korean (LMSys Leaderboard)",
  readme,
  slug: "lmsys-korean",
  type: "index"
} satisfies IndexModelMixDefinition
