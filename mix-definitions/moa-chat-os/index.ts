import { getDocsUrl } from "../../utils/docs-url"
import type { MoaModelMixDefinition } from "../types"
import readme from "./README.md"

export default {
  categories: ["mixture-of-agents", "general", "open-source"],
  config: {
    aggregator: {
      model: "meta-llama/Meta-Llama-3.1-70B-Instruct",
      provider: "groq",
      temperature: 0.7
    },
    proposers: [
      {
        model: "meta-llama/Meta-Llama-3.1-70B-Instruct",
        provider: "groq",
        temperature: 0.7
      },
      {
        model: "deepseek-chat",
        provider: "deepseek",
        temperature: 0.7
      }
    ]
  },
  cost: {
    inputCostPerUnit: 0.00000046,
    outputCostPerUnit: 0.00000064,
    unit: "token"
  },
  createdAt: new Date("2024-10-21T13:00:00-04:00"), // August 26, 2024 1pm Eastern
  description:
    "A Mixture-of-Agents (MoA) synthesis mix optimized for fast and balanced chat use cases. This mix leverages multiple 'proposer' models, including Llama 3.1 70B on Groq and DeepSeek v2.5, with an 'aggregation' model that synthesizes their outputs.",
  docsUrl: getDocsUrl("moa-chat-os"),
  name: "Chat Mixture of Agents",
  readme,
  slug: "moa-chat",
  type: "moa"
} satisfies MoaModelMixDefinition
