import { getDocsUrl } from "../../utils/docs-url"
import type { IndexModelMixDefinition } from "../types"
import readme from "./README.md"

export default {
  config: {
    routes: [
      {
        model: "chatgpt-4o-latest",
        weight: 0.63
      },
      {
        model: "claude-3-5-sonnet-20240620",
        weight: 0.87
      },
      {
        model: "gpt-4o-2024-05-13",
        weight: 1.0
      },
      {
        model: "gemini-1.5-pro-exp-0827",
        weight: 0.57
      }
    ],
    strategy: "weighted"
  },
  cost: {
    inputCostPerUnit: 0.0000042395,
    outputCostPerUnit: 0.0000144446,
    unit: "token"
  },
  createdAt: new Date("2024-08-13T13:00:00-04:00"), // August 13, 2024 1pm Eastern
  description:
    "A mix indexed on the top coding models in the LMSYS leaderboard. Models with a higher score and more consistent votes will be selected more often.",
  docsUrl: getDocsUrl("lmsys-coding"),
  name: "LMSys Coding Leaderboard",
  readme,
  slug: "lmsys-coding",
  type: "index"
} satisfies IndexModelMixDefinition
