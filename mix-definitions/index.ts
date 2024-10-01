import crosshatchChatOs from "./crosshatch-chat-os"
import lmsysCoding from "./lmsys-coding"
import lmsysCodingOs from "./lmsys-coding-os"
import lmsysMultiturn from "./lmsys-multiturn"
import lmsysOverall from "./lmsys-overall"
import moaCoding from "./moa-coding"
import moaCodingFast from "./moa-coding-fast"
import moaCodingOs from "./moa-coding-os"
import sealSpanish from "./seal-spanish"
import type { ModelMixDefinition } from "./types"

export * from "./types"
export const modelMixes: Record<string, ModelMixDefinition> = {
  crosshatchChatOs,
  lmsysCoding,
  lmsysCodingOs,
  lmsysMultiturn,
  lmsysOverall,
  moaCoding,
  moaCodingFast,
  moaCodingOs,
  sealSpanish
}
