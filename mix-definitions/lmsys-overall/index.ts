import { getDocsUrl } from "../../utils/docs-url"
import type { IndexModelMixDefinition } from "../types"
import readme from "./README.md"

export default {
  categories: ["general"],
  config: {
    routes: [
      {
        model: "chatgpt-4o-latest-20240903",
        weight: 0.3769
      },
      {
        model: "o1-preview",
        weight: 0.2963
      },
      {
        model: "chatgpt-4o-latest-20240808",
        weight: 0.232
      },
      {
        model: "o1-mini",
        weight: 0.0606
      },
      {
        model: "gemini-1.5-pro-exp-0827",
        weight: 0.0343
      }
    ],
    strategy: "weighted"
  },
  cost: {
    inputCostPerUnit: 0.0000079457,
    outputCostPerUnit: 0.0000285554,
    unit: "token"
  },
  createdAt: new Date("2024-09-09T13:00:00-04:00"), // August 13, 2024 1pm Eastern
  description:
    "Stay effortlessly current with the best general-purpose AI models. This mix automatically utilizes the top-ranked models from the LMSys Chatbot Arena's overall leaderboard, ensuring you always have access to the most capable AI for a wide range of tasks.",
  docsUrl: getDocsUrl("lmsys-overall"),
  name: "LMSys Overall Leaderboard",
  readme,
  slug: "lmsys-overall",
  type: "index"
} satisfies IndexModelMixDefinition
