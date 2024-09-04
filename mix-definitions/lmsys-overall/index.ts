import { getDocsUrl } from "../../utils/docs-url"
import type { IndexModelMixDefinition } from "../types"
import readme from "./README.md"

export default {
  config: {
    routes: [
      {
        model: "chatgpt-4o-latest",
        provider: "openai",
        weight: 0.7
      },
      {
        model: "gemini-1.5-pro-exp-0827",
        provider: "google",
        weight: 0.65
      },
      {
        model: "gemini-1.5-pro-exp-0801",
        provider: "google",
        weight: 0.73
      },
      {
        model: "gpt-4o-2024-05-13",
        provider: "openai",
        weight: 1
      }
    ],
    strategy: "weighted"
  },
  cost: {
    inputCostPerUnit: 0.0000044173,
    outputCostPerUnit: 0.000013252,
    unit: "token"
  },
  createdAt: new Date("2024-08-13T13:00:00-04:00"), // August 13, 2024 1pm Eastern
  description:
    "A mix indexed on the top models in the LMSYS leaderboard. Models with a higher score and more consistent votes will be selected more often.",
  docsUrl: getDocsUrl("lmsys-overall"),
  name: "LMSys Overall Leaderboard",
  readme,
  slug: "lmsys-overall",
  type: "index"
} satisfies IndexModelMixDefinition
