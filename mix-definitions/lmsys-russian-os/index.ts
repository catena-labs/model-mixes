import { getDocsUrl } from "../../utils/docs-url"
import type { IndexModelMixDefinition } from "../types"
import readme from "./README.md"

export default {
  categories: ["multilingual", "leaderboard"],
  config: {
    strategy: "weighted",
    routes: [
      {
        model: "meta-llama/Meta-Llama-3.1-405B-Instruct",
        weight: 0.6545
      },
      {
        model: "mistralai/large-2",
        weight: 0.2602
      },
      {
        model: "Qwen/Qwen2.5-72B-Instruct",
        weight: 0.043
      }
    ]
  },
  cost: {
    inputCostPerUnit: 0.0000032889,
    outputCostPerUnit: 0.0000051036,
    unit: "token"
  },
  createdAt: new Date("2024-08-13T13:00:00-04:00"),
  description:
    "A mix that picks the highest-ranked model for Russian prompts, based on LMSYS Russian Leaderboard.",
  docsUrl: getDocsUrl("lmsys-russian-os"),
  name: "LMSys Russian (Open-Source)",
  readme,
  slug: "lmsys-russian-os",
  type: "index"
} satisfies IndexModelMixDefinition
