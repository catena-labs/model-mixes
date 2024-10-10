import { getDocsUrl } from "../../utils/docs-url"
import type { IndexModelMixDefinition } from "../types"
import readme from "./README.md"

export default {
  categories: ["general", "leaderboard", "reasoning"],
  config: {
    routes: [
      {
        model: "meta-llama/Meta-Llama-3.1-405B-Instruct",
        weight: 0.7637
      },
      {
        model: "mistralai/large-2",
        weight: 0.1117
      },
      {
        model: "meta-llama/Meta-Llama-3.1-70B-Instruct",
        weight: 0.082
      },
      {
        model: "Qwen/Qwen2.5-72B-Instruct",
        weight: 0.0427
      }
    ],
    strategy: "weighted"
  },
  cost: {
    inputCostPerUnit: 0.0000082713,
    outputCostPerUnit: 0.000030506,
    unit: "token"
  },
  createdAt: new Date("2024-09-09T13:00:00-04:00"),
  description:
    "Optimized for extended conversations, this mix utilizes top-performing models in multi-turn interactions. It leverages the LMSys Chatbot Arena rankings for conversations with two or more turns, ensuring high-quality responses in longer dialogues.",
  docsUrl: getDocsUrl("lmsys-multiturn-os"),
  name: "Top Chat Models (Open-Source)",
  readme,
  slug: "lmsys-multiturn-os",
  type: "index"
} satisfies IndexModelMixDefinition
