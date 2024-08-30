import type { MoaModelMixDefinition } from "../../types/mix-configs"
import readme from "./README.md"

export const moaCoding: MoaModelMixDefinition = {
  createdAt: new Date("2024-08-26T13:00:00-04:00"), // August 26, 2024 1pm Eastern
  description:
    "A mixture-of-agents that synthesizes coding answers from the best LLMs for state-of-the-art performance.",
  docsUrl:
    "https://github.com/catena-labs/model-mixes/tree/main/src/mixes/moa-coding",
  name: "MoA SynthCode Mix",
  readme,
  slug: "moa-coding",
  type: "moa"
}
