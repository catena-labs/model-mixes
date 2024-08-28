import { RouterConfig } from "./router-configs"

export interface BaseMixConfig {
  /**
   * The slug for the mix (lower, kebab-case), used as the `model` field in API
   * requests
   */
  slug: string
  /**
   * The name for the mix
   */
  name: string
  /**
   * A short description for the mix
   */
  description: string
  /**
   * When this version of the mix was created
   */
  createdAt: Date
  /**
   * External documentation link
   */
  externalDocsUrl?: string
  /**
   * The readme content for the mix
   */
  readmeContent?: string
}

export interface IndexMixConfig extends BaseMixConfig {
  type: "index"
  config: RouterConfig
}

export interface MoaMixConfig extends BaseMixConfig {
  type: "moa"
}

export type MixConfig = IndexMixConfig | MoaMixConfig
