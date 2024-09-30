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
    inputCostPerUnit: 0.0000062,
    outputCostPerUnit: 0.0000191,
    unit: "token"
  },
  createdAt: new Date("2024-10-01T13:00:00-04:00"),
  // October 1, 2024 1pm Eastern
  description:
    "A fast variant of the Coding Mixture of Agents (MoA) that uses GPT-4o-mini to classify task difficulty. Simple tasks are quickly processed by GPT-4o, while complex ones utilize the full MoA. With 68% classification accuracy and a bias towards the MoA when uncertain, this mix optimizes for speed without compromising on quality for challenging problems.",
  docsUrl: getDocsUrl("moa-coding-fast"),
  name: "Fast Coding Mixture of Agents",
  readme,
  slug: "moa-coding-fast",
  type: "moa"
} satisfies MoaModelMixDefinition
