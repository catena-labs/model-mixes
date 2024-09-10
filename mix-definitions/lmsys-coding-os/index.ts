import { getDocsUrl } from "../../utils/docs-url"
import type { IndexModelMixDefinition } from "../types"
import readme from "./README.md"

export default {
  categories: ["coding"],
  config: {
    routes: [
      {
        model: "meta-llama/Meta-Llama-3.1-405B-Instruct",
        weight: 0.4307
      },
      {
        model: "mistralai/large-2",
        weight: 0.2869
      },
      {
        model: "meta-llama/Meta-Llama-3.1-70B-Instruct",
        weight: 0.1766
      },
      {
        model: "deepseek-chat",
        weight: 0.0392
      }
    ],
    strategy: "weighted"
  },
  cost: {
    inputCostPerUnit: 0.000003879,
    outputCostPerUnit: 0.0000057661,
    unit: "token"
  },
  createdAt: new Date("2024-08-13T13:00:00-04:00"), // August 13, 2024 1pm Eastern
  description:
    "The best non-commercial coding models according to the LMSys leaderboard. This mix will use the top coding models ranked in the LMSys Chatbot Arena for the Coding category without any proprietary models.",
  docsUrl: getDocsUrl("lmsys-coding-os"),
  name: "Top Non-Commercial Coding Models",
  readme,
  slug: "lmsys-coding-os",
  type: "index"
} satisfies IndexModelMixDefinition
