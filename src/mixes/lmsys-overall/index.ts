import type { IndexModelMixDefinition } from "../../types/mix-configs"
import readme from "./README.md"

export const lmsysOverall: IndexModelMixDefinition = {
  config: {
    routes: [
      {
        model: "chatgpt-4o-latest",
        provider: "openai",
        weight: 0.7
      },
      {
        model: "gemini-1.5-pro-exp-0827",
        provider: "google",
        weight: 0.65
      },
      {
        model: "gemini-1.5-pro-exp-0801",
        provider: "google",
        weight: 0.73
      },
      {
        model: "gpt-4o-2024-05-13",
        provider: "openai",
        weight: 1
      },
      {
        model: "meta-llama/Meta-Llama-3.1-405B-Instruct",
        weight: 1264 / (1299 + 1286 + 1277 + 1271 + 1264)
      }
    ],
    strategy: "weighted"
  },

  createdAt: new Date("2024-08-13T13:00:00-04:00"), // August 13, 2024 1pm Eastern
  description:
    "A mix indexed on the top models in the LMSYS leaderboard. Models with a higher score and more consistent votes will be selected more often.",
  docsUrl:
    "https://github.com/catena-labs/model-mixes/tree/main/src/mixes/lmsys-overall",
  name: "LMSys Overall Leaderboard",
  readme,
  slug: "lmsys-overall",
  type: "index"
}
