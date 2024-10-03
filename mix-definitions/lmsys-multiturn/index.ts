import { getDocsUrl } from "../../utils/docs-url"
import type { IndexModelMixDefinition } from "../types"
import readme from "./README.md"

export default {
  categories: ["general", "reasoning"],
  config: {
    routes: [
      {
        model: "chatgpt-4o-latest",
        weight: 0.5031
      },
      {
        model: "gpt-4o-2024-05-13",
        weight: 0.194
      },
      {
        model: "claude-3-5-sonnet-20240620",
        weight: 0.1814
      },
      {
        model: "gemini-1.5-pro-exp-0827",
        weight: 0.0757
      },
      {
        model: "gemini-1.5-pro-exp-0801",
        weight: 0.0457
      }
    ],
    strategy: "weighted"
  },
  cost: {
    inputCostPerUnit: 0.0000045499,
    outputCostPerUnit: 0.0000136497,
    unit: "token"
  },
  createdAt: new Date("2024-09-09T13:00:00-04:00"), // August 13, 2024 1pm Eastern
  description:
    "Optimized for extended conversations, this mix utilizes top-performing models in multi-turn interactions. It leverages the LMSys Chatbot Arena rankings for conversations with two or more turns, ensuring high-quality responses in longer dialogues.",
  docsUrl: getDocsUrl("lmsys-multiturn"),
  name: "Top Chat Models",
  readme,
  slug: "lmsys-multiturn",
  type: "index"
} satisfies IndexModelMixDefinition
