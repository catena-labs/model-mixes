import { getDocsUrl } from "../../utils/docs-url"
import type { IndexModelMixDefinition } from "../types"
import readme from "./README.md"

export default {
  categories: ["general"],
  config: {
    routes: [
      {
        model: "chatgpt-4o-latest",
        weight: 0.4934
      },
      {
        model: "gemini-1.5-pro-exp-0827",
        weight: 0.1975
      },
      {
        model: "gemini-1.5-pro-exp-0801",
        weight: 0.1459
      },
      {
        model: "gpt-4o-2024-05-13",
        weight: 0.1183
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
    "Stay effortlessly current with the best general-purpose AI models. This mix automatically utilizes the top-ranked models from the LMSys Chatbot Arena's overall leaderboard, ensuring you always have access to the most capable AI for a wide range of tasks.",
  docsUrl: getDocsUrl("lmsys-overall"),
  name: "LMSys Overall Leaderboard",
  readme,
  slug: "lmsys-overall",
  tags: ["chat"],
  type: "index"
} satisfies IndexModelMixDefinition
