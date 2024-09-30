type Category = "general" | "coding"

interface BaseRoute {
  model: string
  provider?: string
}

interface WeightedRoute extends BaseRoute {
  weight: number
}

interface WeightedRouterConfig {
  strategy: "weighted"
  routes: WeightedRoute[]
}

interface FailoverRouterConfig {
  strategy: "failover"
  routes: BaseRoute[]
}

type RouterConfig = WeightedRouterConfig | FailoverRouterConfig

interface MoaModel {
  model: string
  provider: string
  temperature: number
}

interface MoaConfig {
  bypassModel: MoaModel
  proposers: MoaModel[]
  aggregator: MoaModel
}

interface BaseModelMixDefinition {
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
   * A list of categories that apply to this model
   */
  categories: Category[]
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
  /**
   * The cost of the model on Crosshatch
   */
  cost: {
    inputCostPerUnit: number
    outputCostPerUnit: number
    unit: "token"
  }
}

export interface IndexModelMixDefinition extends BaseModelMixDefinition {
  type: "index"
  config: RouterConfig
}

export interface MoaModelMixDefinition extends BaseModelMixDefinition {
  type: "moa"
  config: MoaConfig
}

export type ModelMixDefinition = IndexModelMixDefinition | MoaModelMixDefinition
