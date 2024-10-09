import { getDocsUrl } from "../../utils/docs-url"
import type { IndexModelMixDefinition } from "../types"
import readme from "./README.md"

export default {
  categories: ["multilingual", "leaderboard"],
  config: {
    strategy: "weighted",
    routes: [
      {
        model: "Qwen/Qwen2.5-72B-Instruct",
        weight: 0.3693
      },
      {
        model: "google/gemma-2-27b-it",
        weight: 0.2795
      },
      {
        model: "meta-llama/Meta-Llama-3.1-405B-Instruct",
        weight: 0.3287
      }
    ]
  },
  cost: {
    inputCostPerUnit: 0.0000017602,
    outputCostPerUnit: 0.0000017602,
    unit: "token"
  },
  createdAt: new Date("2024-08-13T13:00:00-04:00"),
  description:
    "A mix that picks the highest-ranked model for Korean prompts, based on LMSYS German Leaderboard.",
  docsUrl: getDocsUrl("lmsys-korean-os"),
  name: "LMSys Korean (Open-Source)",
  readme,
  slug: "lmsys-korean-os",
  type: "index"
} satisfies IndexModelMixDefinition
