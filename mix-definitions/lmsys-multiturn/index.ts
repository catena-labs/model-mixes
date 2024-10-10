import { getDocsUrl } from "../../utils/docs-url"
import type { IndexModelMixDefinition } from "../types"
import readme from "./README.md"

export default {
  categories: ["general", "leaderboard", "reasoning"],
  config: {
    routes: [
      {
        model: "o1-preview",
        weight: 0.3333
      },
      {
        model: "chatgpt-4o-latest-20240903",
        weight: 0.3269
      },
      {
        model: "chatgpt-4o-latest-20240808",
        weight: 0.2278
      },
      {
        model: "claude-3-5-sonnet-20240620",
        weight: 0.0817
      },
      {
        model: "o1-mini",
        weight: 0.0303
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
  docsUrl: getDocsUrl("lmsys-multiturn"),
  name: "Top Chat Models",
  readme,
  slug: "lmsys-multiturn",
  type: "index"
} satisfies IndexModelMixDefinition
