import { getDocsUrl } from "../../utils/docs-url"
import type { IndexModelMixDefinition } from "../types"
import readme from "./README.md"

export default {
  categories: ["general"],
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
  createdAt: new Date("2024-11-01T13:00:00-04:00"),
  description: "forget santa clause, say hello to sonnet claude",
  docsUrl: getDocsUrl("crosshatch-claude-sonnet"),
  name: "Crosshatch Claude Sonnet",
  readme,
  slug: "crosshatch-claude-sonnet",
  type: "index"
} satisfies IndexModelMixDefinition
