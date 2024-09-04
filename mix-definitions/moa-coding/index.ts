import { getDocsUrl } from "../../utils/docs-url"
import type { MoaModelMixDefinition } from "../types"
import readme from "./README.md"

export default {
  cost: {
    inputCostPerUnit: 0.000006,
    outputCostPerUnit: 0.00002,
    unit: "token"
  },
  createdAt: new Date("2024-08-26T13:00:00-04:00"), // August 26, 2024 1pm Eastern
  description:
    "A mixture-of-agents that synthesizes coding answers from the best LLMs for state-of-the-art performance.",
  docsUrl: getDocsUrl("moa-coding"),
  name: "MoA SynthCode Mix",
  readme,
  slug: "moa-coding",
  type: "moa"
} satisfies MoaModelMixDefinition
