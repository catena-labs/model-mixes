import { getDocsUrl } from "../../utils/docs-url"
import type { IndexModelMixDefinition } from "../types"
import readme from "./README.md"

export default {
  categories: ["general", "coding", "multilingual", "reasoning", "super-mix"],

  config: {
    routes: [
      {
        model: "claude-3-5-sonnet-20241022",
        provider: "anthropic"
      },
      {
        model: "claude-3-5-sonnet-20241022",
        provider: "bedrock"
      }
    ],
    strategy: "failover"
  },
  cost: {
    inputCostPerUnit: 0.0000036,
    outputCostPerUnit: 0.000018,
    unit: "token"
  },
  createdAt: new Date("2024-11-12T13:00:00-04:00"),
  description:
    "A mix combining Claude 3.5 Sonnet that seamlessly combines providers so you don't have to worry about speed, outages, and rate limits.",
  docsUrl: getDocsUrl("crosshatch-claude-sonnet"),
  name: "Claude 3.5 Sonnet Super Mix",
  readme,
  slug: "crosshatch-claude-sonnet",
  type: "index"
} satisfies IndexModelMixDefinition
