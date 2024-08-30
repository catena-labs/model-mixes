import lmsysCoding from "./lmsys-coding"
import lmsysOverall from "./lmsys-overall"
import moaCoding from "./moa-coding"
import sealSpanish from "./seal-spanish"
import type { ModelMixDefinition } from "./types"

export * from "./types"
export const modelMixes: Record<string, ModelMixDefinition> = {
  lmsysCoding,
  lmsysOverall,
  moaCoding,
  sealSpanish
}
