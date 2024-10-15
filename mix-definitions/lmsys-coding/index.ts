import { getDocsUrl } from "../../utils/docs-url"
import type { IndexModelMixDefinition } from "../types"
import readme from "./README.md"

export default {
  categories: ["coding", "leaderboard"],
  config: {
    routes: [
      {
        model: "chatgpt-4o-latest",
        weight: 0.5348
      },
      {
        model: "gpt-4o-2024-05-13",
        weight: 0.1576
      },
      {
        model: "claude-3-5-sonnet-20240620",
        weight: 0.1433
      },
      {
        model: "gemini-1.5-pro-exp-0827",
        weight: 0.0867
      },
      {
        model: "meta-llama/Meta-Llama-3.1-405B-Instruct",
        weight: 0.0503
      },
      {
        model: "gemini-1.5-pro-002",
        weight: 0.0273
      }
    ],
    strategy: "weighted"
  },
  cost: {
    inputCostPerUnit: 0.0000045563,
    outputCostPerUnit: 0.0000141864,
    unit: "token"
  },
  createdAt: new Date("2024-08-13T13:00:00-04:00"), // August 13, 2024 1pm Eastern
  description:
    "Don't worry about staying up-to-date with the latest coding model to use in your favorite IDE. This mix will use the top coding models ranked in the LMSys Chatbot Arena for the Coding category",
  docsUrl: getDocsUrl("lmsys-coding"),
  name: "Top Coding Models",
  readme,
  slug: "lmsys-coding",
  type: "index"
} satisfies IndexModelMixDefinition
