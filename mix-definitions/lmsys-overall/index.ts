import { getDocsUrl } from "../../utils/docs-url"
import type { IndexModelMixDefinition } from "../types"
import readme from "./README.md"

export default {
  categories: ["general", "leaderboard"],
  config: {
    routes: [
      {
        model: "chatgpt-4o-latest",
        weight: 0.5027
      },
      {
        model: "gemini-1.5-pro-exp-0827",
        weight: 0.1356
      },
      {
        model: "gpt-4o-2024-05-13",
        weight: 0.1293
      },
      {
        model: "gemini-1.5-pro-exp-0801",
        weight: 0.1156
      },
      {
        model: "gemini-1.5-pro-002",
        weight: 0.0903
      },
      {
        model: "gpt-4o-mini",
        weight: 0.0266
      }
    ],
    strategy: "weighted"
  },
  cost: {
    inputCostPerUnit: 0.000004446,
    outputCostPerUnit: 0.0000133421,
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
