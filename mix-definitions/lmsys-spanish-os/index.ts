import { getDocsUrl } from "../../utils/docs-url"
import type { IndexModelMixDefinition } from "../types"
import readme from "./README.md"

export default {
  categories: ["multilingual", "leaderboard", "open-source"],
  config: {
    routes: [
      {
        model: "Qwen/Qwen2.5-72B-Instruct",
        weight: 0.467
      },
      {
        model: "meta-llama/Meta-Llama-3.1-405B-Instruct",
        weight: 0.2393
      },
      {
        model: "meta-llama/Meta-Llama-3-70B-Instruct",
        weight: 0.1103
      }
    ],
    strategy: "weighted"
  },
  cost: {
    inputCostPerUnit: 0.0000016952,
    outputCostPerUnit: 0.0000016952,
    unit: "token"
  },
  createdAt: new Date("2024-10-10T13:00:00-04:00"),
  description:
    "A mix that picks the highest-ranked model for Spanish prompts, based on LMSYS Spanish Leaderboard.",
  docsUrl: getDocsUrl("lmsys-spanish-os"),
  name: "LMSys Spanish (Open-Source)",
  readme,
  slug: "lmsys-spanish-os",
  type: "index"
} satisfies IndexModelMixDefinition
