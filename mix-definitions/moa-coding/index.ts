import { getDocsUrl } from "../../utils/docs-url"
import type { MoaModelMixDefinition } from "../types"
import readme from "./README.md"

export default {
  categories: ["coding"],
  config: {
    aggregator: {
      model: "gpt-4o-2024-08-06",
      provider: "openai",
      temperature: 0.7
    },
    bypassModel: {
      model: "gpt-4o",
      provider: "openai",
      temperature: 0.7
    },
    proposers: [
      {
        model: "claude-3-5-sonnet-20240620",
        provider: "anthropic",
        temperature: 0.7
      },
      {
        model: "gpt-4-turbo-2024-04-09",
        provider: "openai",
        temperature: 0.7
      },
      {
        model: "gpt-4o-2024-08-06",
        provider: "openai",
        temperature: 0.7
      }
    ]
  },
  cost: {
    inputCostPerUnit: 0.000006,
    outputCostPerUnit: 0.00002,
    unit: "token"
  },
  createdAt: new Date("2024-08-26T13:00:00-04:00"), // August 26, 2024 1pm Eastern
  description:
    "A custom-built Mixture-of-Agents (MoA) synthesis mix optimized for challenging coding tasks. This mix leverages multiple 'proposer' models, including Claude 3.5 Sonnet and GPT-4 Turbo, with an 'aggregation' model that synthesizes their outputs. In benchmarks, it demonstrated 28% better performance compared to Claude 3.5 Sonnet alone, particularly excelling at complex programming challenges.",
  docsUrl: getDocsUrl("moa-coding"),
  name: "Coding Mixture of Agents",
  readme,
  slug: "moa-coding",
  type: "moa"
} satisfies MoaModelMixDefinition
