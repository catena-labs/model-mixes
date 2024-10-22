import crosshatchChatOs from "./crosshatch-chat-os"
import lmsysChinese from "./lmsys-chinese"
import lmsysChineseOs from "./lmsys-chinese-os"
import lmsysCoding from "./lmsys-coding"
import lmsysCodingOs from "./lmsys-coding-os"
import lmsysFrench from "./lmsys-french"
import lmsysFrenchOs from "./lmsys-french-os"
import lmsysGerman from "./lmsys-german"
import lmsysGermanOs from "./lmsys-german-os"
import lmsysJapanese from "./lmsys-japanese"
import lmsysJapaneseOs from "./lmsys-japanese-os"
import lmsysKorean from "./lmsys-korean"
import lmsysKoreanOs from "./lmsys-korean-os"
import lmsysMultiturn from "./lmsys-multiturn"
import lmsysMultiturnOs from "./lmsys-multiturn-os"
import lmsysOverall from "./lmsys-overall"
import lmsysOverallOs from "./lmsys-overall-os"
import lmsysRussian from "./lmsys-russian"
import lmsysRussianOs from "./lmsys-russian-os"
import lmsysSpanish from "./lmsys-spanish"
import lmsysSpanishOs from "./lmsys-spanish-os"
import lmsysVision from "./lmsys-vision"
import moaCoding from "./moa-coding"
import moaCodingFast from "./moa-coding-fast"
import moaCodingOs from "./moa-coding-os"
import sealSpanish from "./seal-spanish"
import moaChat from "./moa-chat"
import type { ModelMixDefinition } from "./types"

export * from "./types"
export const modelMixes: Record<string, ModelMixDefinition> = {
  crosshatchChatOs,
  lmsysChinese,
  lmsysChineseOs,
  lmsysCoding,
  lmsysCodingOs,
  lmsysFrench,
  lmsysFrenchOs,
  lmsysGerman,
  lmsysGermanOs,
  lmsysJapanese,
  lmsysJapaneseOs,
  lmsysKorean,
  lmsysKoreanOs,
  lmsysMultiturn,
  lmsysMultiturnOs,
  lmsysOverall,
  lmsysOverallOs,
  lmsysRussian,
  lmsysRussianOs,
  lmsysSpanish,
  lmsysSpanishOs,
  lmsysVision,
  moaChat,
  moaCoding,
  moaCodingFast,
  moaCodingOs,
  sealSpanish
}
