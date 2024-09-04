import { getDocsUrl } from "../../utils/docs-url"
import type { IndexModelMixDefinition } from "../types"
import readme from "./README.md"

export default {
  config: {
    routes: [
      {
        model: "gpt-4o",
        weight: 0.339
      },
      {
        model: "gemini-1.5-pro",
        weight: 0.336
      },
      {
        model: "gpt-4-turbo-preview",
        weight: 0.325
      }
    ],
    strategy: "weighted"
  },
  cost: {
    inputCostPerUnit: 0.00000612023242,
    outputCostPerUnit: 0.00001836069726,
    unit: "token"
  },
  createdAt: new Date("2024-08-13T13:00:00-04:00"),
  description:
    "A mix that picks the highest-ranked model for Spanish prompts, based on Scale's Multilingual Prompts Dataset aimed at measuring a model's proficiency in engaging with Spanish users from Spain, Mexico and the rest of Latin America, reflecting complexity of global communication.", // August 13, 2024 1pm Eastern
  docsUrl: getDocsUrl("seal-spanish"),
  name: "Spanish Mix (Scale.ai Leaderboard)",
  readme,
  slug: "seal-spanish",
  type: "index"
} satisfies IndexModelMixDefinition
