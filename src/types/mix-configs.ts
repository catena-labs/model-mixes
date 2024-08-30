import type { RouterConfig } from "./router-configs"

export interface BaseModelMixDefinition {
  /**
   * The slug for the mix. Used as the `model` field in API requests
   */
  slug: string
  /**
   * The name for the mix
   */
  name: string
  /**
   * A short description for the mix
   */
  description?: string
  /**
   * When this version of the mix was created
   */
  createdAt: Date
  /**
   * External documentation link
   */
  docsUrl?: string
  /**
   * The readme content for the mix
   */
  readme?: string
}

export interface IndexModelMixDefinition extends BaseModelMixDefinition {
  type: "index"
  config: RouterConfig
}

export interface MoaModelMixDefinition extends BaseModelMixDefinition {
  type: "moa"
}

export type ModelMixDefinition = IndexModelMixDefinition | MoaModelMixDefinition
