import { getDocsUrl } from "../../utils/docs-url"
import type { IndexModelMixDefinition } from "../types"
import readme from "./README.md"

export default {
  aliases: ["super-sonnet-3.5-latest"],
  categories: ["super-mix"],
  config: {
    routes: [
      {
        model: "claude-3-5-sonnet-20241022",
        provider: "anthropic"
      },
      {
        model: "claude-3-5-sonnet-20241022",
        provider: "anthropic-bedrock"
      }
    ],
    strategy: "failover"
  },
  cost: {
    inputCostPerUnit: 0.00000306,
    outputCostPerUnit: 0.0000153,
    unit: "token"
  },
  createdAt: new Date("2024-12-18T10:00:00-04:00"),
  description:
    "The Super Sonnet Mix bundles multiple tools and providers in a single endpoint to supercharge Claude's Sonnet 3.5 model. Simply send a request with a Crosshatch tool (eg: crosshatch:create_image) to use it. Additionally, the Super Sonnet Mix frees you from rate-limit issues by consolidating several inference providers. If your request is rate limited by Anthropic, Crosshatch will automatically route it to Bedrock.",
  docsUrl: getDocsUrl("super-sonnet-3.5-20241022"),
  name: "Super Sonnet Mix",
  readme,
  recommendedApi: "anthropic",
  slug: "super-sonnet-3.5-20241022",
  type: "index"
} satisfies IndexModelMixDefinition
