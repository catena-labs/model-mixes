import type { MixConfig } from "../../types/mix-configs"
import readmeContent from "./README.md"

/**
 * https://chat.lmsys.org/?leaderboard
 */
export const lmsysOverall: MixConfig = {
  config: {
    routes: [
      {
        model: "gemini-pro",
        provider: "google",
        weight: 1299 / (1299 + 1286 + 1277 + 1271 + 1264)
      },
      {
        model: "gpt-4o-2024-05-13",
        provider: "openai",
        weight: 1286 / (1299 + 1286 + 1277 + 1271 + 1264)
      },
      {
        model: "gpt-4o-mini-2024-07-18",
        provider: "openai",
        weight: 1277 / (1299 + 1286 + 1277 + 1271 + 1264)
      },
      {
        model: "claude-3-5-sonnet-20240620",
        provider: "anthropic",
        weight: 1271 / (1299 + 1286 + 1277 + 1271 + 1264)
      },
      {
        model: "meta-llama/Meta-Llama-3.1-405B-Instruct",
        weight: 1264 / (1299 + 1286 + 1277 + 1271 + 1264)
      }
    ],
    strategy: "weighted"
  },
  createdAt: new Date("2024-08-13T13:00:00-04:00"),
  description: "Top 'Overall' models on the LMSys Leaderboard",
  externalDocsUrl:
    "https://github.com/catena-labs/crosshatch-mixes/tree/main/src/mixes/lmsys-overall",
  name: "LMSys Overall Leaderboard",
  readmeContent: readmeContent,
  slug: "lmsys-overall",
  type: "index"
}
