import { getDocsUrl } from "../../utils/docs-url"
import type { IndexModelMixDefinition } from "../types"
import readme from "./README.md"

export default {
  categories: ["multilingual", "leaderboard"],
  config: {
    strategy: "weighted",
    routes: [
      {
        model: "deepseek-chat",
        weight: 0.342
      },
      {
        model: "Qwen/Qwen2.5-72B-Instruct",
        weight: 0.3221
      },
      {
        model: "mistralai/large-2",
        weight: 0.1987
      },
      {
        model: "meta-llama/Meta-Llama-3.1-405B-Instruct",
        weight: 0.0311
      }
    ]
  },
  cost: {
    inputCostPerUnit: 0.0000011897,
    outputCostPerUnit: 0.0000026045,
    unit: "token"
  },
  createdAt: new Date("2024-08-13T13:00:00-04:00"),
  description:
    "A mix that picks the highest-ranked open-source model for Chinese prompts, based on LMSYS Chinese Leaderboard.",
  docsUrl: getDocsUrl("lmsys-chinese-os"),
  name: "LMsys Chinese (Open-Source)",
  readme,
  slug: "lmsys-chinese-os",
  type: "index"
} satisfies IndexModelMixDefinition
