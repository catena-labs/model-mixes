import { getDocsUrl } from "../../utils/docs-url"
import type { IndexModelMixDefinition } from "../types"
import readme from "./README.md"

export default {
  categories: ["general", "leaderboard", "reasoning"],
  config: {
    routes: [
      {
        model: "chatgpt-4o-latest",
        weight: 0.5392
      },
      {
        model: "gpt-4o-2024-05-13",
        weight: 0.1339
      },
      {
        model: "claude-3-5-sonnet-20240620",
        weight: 0.1267
      },
      {
        model: "gemini-1.5-pro-exp-0827",
        weight: 0.0909
      },
      {
        model: "gemini-1.5-pro-exp-0801",
        weight: 0.0813
      },
      {
        model: "gemini-1.5-pro-002",
        weight: 0.028
      }
    ],
    strategy: "weighted"
  },
  cost: {
    inputCostPerUnit: 0.0000045352,
    outputCostPerUnit: 0.0000143811,
    unit: "token"
  },
  createdAt: new Date("2024-09-09T13:00:00-04:00"),
  description:
    "Optimized for extended conversations, this mix utilizes top-performing models in multi-turn interactions. It leverages the LMSys Chatbot Arena rankings for conversations with two or more turns, ensuring high-quality responses in longer dialogues.",
  docsUrl: getDocsUrl("lmsys-multiturn"),
  name: "Top Chat Models",
  readme,
  slug: "lmsys-multiturn",
  type: "index"
} satisfies IndexModelMixDefinition
