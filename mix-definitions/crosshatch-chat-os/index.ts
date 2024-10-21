import { getDocsUrl } from "../../utils/docs-url"
import type { IndexModelMixDefinition } from "../types"
import readme from "./README.md"

export default {
  categories: ["general", "open-source"],
  config: {
    routes: [
      {
        model: "NousResearch/Hermes-3-Llama-3.1-405B-Turbo",
        weight: 0.4587
      },
      {
        model: "mistralai/large-2",
        weight: 0.2094
      },
      {
        model: "meta-llama/Meta-Llama-3.1-70B-Instruct",
        weight: 0.2086
      },
      {
        model: "deepseek-chat",
        weight: 0.0417
      }
    ],
    strategy: "weighted"
  },
  cost: {
    inputCostPerUnit: 0.0000039465,
    outputCostPerUnit: 0.0000053481,
    unit: "token"
  },
  createdAt: new Date("2024-09-09T13:00:00-04:00"), // August 13, 2024 1pm Eastern
  description:
    "A specialized open-source mix optimized for engaging, multi-turn conversations and roleplay. Primarily powered by Hermes 3, a fine-tuned Llama 3.1 405B model, it excels in long-term context retention and adaptive responses.",
  docsUrl: getDocsUrl("crosshatch-chat-os"),
  name: "Crosshatch Chat",
  readme,
  slug: "crosshatch-chat-os",
  type: "index"
} satisfies IndexModelMixDefinition
