import type { ModelMixDefinition } from "../../types/mix-configs"
import readme from "./README.md"

export const sealSpanish: ModelMixDefinition = {
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

  createdAt: new Date("2024-08-13T13:00:00-04:00"),
  description:
    "A mix that picks the highest-ranked model for Spanish prompts, based on Scale's Multilingual Prompts Dataset aimed at measuring a model's proficiency in engaging with Spanish users from Spain, Mexico and the rest of Latin America, reflecting complexity of global communication.", // August 13, 2024 1pm Eastern
  docsUrl:
    "https://github.com/catena-labs/model-mixes/tree/main/src/mixes/seal-spanish",
  name: "Spanish Mix (Scale.ai Leaderboard)",
  readme,
  slug: "seal-spanish",
  type: "index"
}
