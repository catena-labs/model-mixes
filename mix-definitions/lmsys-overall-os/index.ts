import { getDocsUrl } from "../../utils/docs-url"
import type { IndexModelMixDefinition } from "../types"
import readme from "./README.md"

export default {
  categories: ["general", "leaderboard", "open-source"],
  config: {
    routes: [
      {
        model: "meta-llama/Meta-Llama-3.1-405B-Instruct",
        weight: 0.7054
      },
      {
        model: "Qwen/Qwen2.5-72B-Instruct",
        weight: 0.1317
      },
      {
        model: "mistralai/large-2",
        weight: 0.1275
      },
      {
        model: "deepseek-chat",
        weight: 0.0355
      }
    ],
    strategy: "weighted"
  },
  cost: {
    inputCostPerUnit: 0.0000030342,
    outputCostPerUnit: 0.0000038193,
    unit: "token"
  },
  createdAt: new Date("2024-09-09T13:00:00-04:00"), // August 13, 2024 1pm Eastern
  description:
    "Stay effortlessly current with the best general-purpose open-source AI models. This mix automatically utilizes the top-ranked open source models from the LMSys Chatbot Arena's overall leaderboard, ensuring you always have access to the most capable AI for a wide range of tasks.",
  docsUrl: getDocsUrl("lmsys-overall-os"),
  name: "LMSys Overall (Open-Source)",
  readme,
  slug: "lmsys-overall-os",
  type: "index"
} satisfies IndexModelMixDefinition
