import { getDocsUrl } from "../../utils/docs-url"
import type { IndexModelMixDefinition } from "../types"
import readme from "./README.md"

export default {
  categories: ["coding", "leaderboard"],
  config: {
    routes: [
      {
        model: "o1-mini",
        weight: 0.3573
      },
      {
        model: "o1-preview",
        weight: 0.2543
      },
      {
        model: "chatgpt-4o-latest-20240903",
        weight: 0.1976
      },
      {
        model: "chatgpt-4o-latest-20240808",
        weight: 0.1583
      },
      {
        model: "claude-3-5-sonnet-20240620",
        weight: 0.0325
      }
    ],
    strategy: "weighted"
  },
  cost: {
    inputCostPerUnit: 0.0000068985,
    outputCostPerUnit: 0.0000258785,
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
