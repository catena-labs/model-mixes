import type { MixConfig } from "../../types/mix-configs"
import readmeContent from "./README.md"
/**
 * https://chat.lmsys.org/?leaderboard
 */
export const lmsysCoding: MixConfig = {
  config: {
    routes: [
      {
        model: "claude-3-5-sonnet-20240620",
        provider: "anthropic",
        weight: 1299 / (1299 + 1295 + 1283 + 1274 + 1273 + 1268)
      },
      {
        model: "gpt-4o-2024-05-13",
        provider: "openai",
        weight: 1295 / (1299 + 1295 + 1283 + 1274 + 1273 + 1268)
      },
      {
        model: "gpt-4o-mini-2024-07-18",
        provider: "openai",
        weight: 1283 / (1299 + 1295 + 1283 + 1274 + 1273 + 1268)
      },
      {
        model: "gemini-pro",
        provider: "google",
        weight: 1274 / (1299 + 1295 + 1283 + 1274 + 1273 + 1268)
      },
      {
        model: "meta-llama/Meta-Llama-3.1-405B-Instruct",
        weight: 1273 / (1299 + 1295 + 1283 + 1274 + 1273 + 1268)
      },
      {
        model: "mistralai/large-2",
        weight: 1268 / (1299 + 1295 + 1283 + 1274 + 1273 + 1268)
      }
    ],
    strategy: "weighted"
  },
  createdAt: new Date("2024-08-13T13:00:00-04:00"),
  description: "Top 'Coding' models on the LMSys Leaderboard",
  externalDocsUrl:
    "https://github.com/catena-labs/crosshatch-mixes/tree/mixes/lmsys-overall",
  name: "LMSys Coding Leaderboard",
  readmeContent,
  slug: "lmsys-coding",
  type: "index"
}
