import { getDocsUrl } from "../../utils/docs-url"
import type { IndexModelMixDefinition } from "../types"
import readme from "./README.md"

export default {
  categories: ["multilingual", "leaderboard"],
  config: {
    strategy: "weighted",
    routes: [
      {
        model: "mistralai/large-2",
        weight: 0.3926
      },
      {
        model: "meta-llama/Meta-Llama-3.1-405B-Instruct",
        weight: 0.3255
      },
      {
        model: "google/gemma-2-27b-it",
        weight: 0.135
      },
      {
        model: "deepseek-chat",
        weight: 0.1112
      },
      {
        model: "Qwen/Qwen2.5-72B-Instruct",
        weight: 0.0357
      }
    ]
  },
  cost: {
    inputCostPerUnit: 0.0000025221,
    outputCostPerUnit: 0.0000049407,
    unit: "token"
  },
  createdAt: new Date("2024-08-13T13:00:00-04:00"),
  description:
    "A mix that picks the highest-ranked model for Japanese prompts, based on LMSYS Japanese Leaderboard.",
  docsUrl: getDocsUrl("lmsys-japanese-os"),
  name: "LMSys Japanese (Open-Source)",
  readme,
  slug: "lmsys-japanese-os",
  type: "index"
} satisfies IndexModelMixDefinition
