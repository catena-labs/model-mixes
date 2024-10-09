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
        weight: 0.315
      },
      {
        model: "meta-llama/Meta-Llama-3.1-405B-Instruct",
        weight: 0.5489
      },
      {
        model: "Qwen/Qwen2.5-72B-Instruct",
        weight: 0.0286
      }
    ]
  },
  cost: {
    inputCostPerUnit: 0.0000032594,
    outputCostPerUnit: 0.0000057901,
    unit: "token"
  },
  createdAt: new Date("2024-08-13T13:00:00-04:00"),
  description:
    "A mix that picks the highest-ranked model for German prompts, based on LMSYS German Leaderboard.",
  docsUrl: getDocsUrl("lmsys-german-os"),
  name: "LMSys German (Open-Source)",
  readme,
  slug: "lmsys-german-os",
  type: "index"
} satisfies IndexModelMixDefinition
