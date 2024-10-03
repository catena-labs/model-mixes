import { getDocsUrl } from "../../utils/docs-url"
import type { MoaModelMixDefinition } from "../types"
import readme from "./README.md"

export default {
  categories: ["coding"],
  config: {
    aggregator: {
      model: "meta-llama/Meta-Llama-3.1-405B-Instruct",
      provider: "together",
      temperature: 0.5
    },
    proposers: [
      {
        model: "deepseek-chat",
        provider: "deepseek",
        temperature: 0.5
      },
      {
        model: "mistralai/large-2",
        provider: "mistral",
        temperature: 0.5
      }
    ]
  },
  cost: {
    inputCostPerUnit: 0.00000323,
    outputCostPerUnit: 0.00000963,
    unit: "token"
  },
  createdAt: new Date("2024-10-01T13:00:00-04:00"), // October 1, 2024 1pm Eastern
  description:
    "An open-source Mixture-of-Agents (MoA) synthesis mix optimized for coding tasks. This mix leverages two 'proposer' models, DeepSeek-2.5 and Mistral Large 2, with Llama 3.1 405B as the 'aggregation' model that synthesizes their outputs. This mix offers a powerful, cost-effective solution for complex programming challenges.",
  docsUrl: getDocsUrl("moa-coding-os"),
  name: "Open-Source Coding Mixture of Agents",
  readme,
  slug: "moa-coding-os",
  tags: ["open-source", "programming", "reasoning"],
  type: "moa"
} satisfies MoaModelMixDefinition
