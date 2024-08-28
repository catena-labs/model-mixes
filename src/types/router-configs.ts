export interface BaseRoute {
  model: string
  provider?: string
}

export interface WeightedRoute extends BaseRoute {
  weight: number
}

export interface WeightedRouterConfig {
  strategy: "weighted"
  routes: WeightedRoute[]
}

export interface FailoverRouterConfig {
  strategy: "failover"
  routes: BaseRoute[]
}

export type RouterConfig = WeightedRouterConfig | FailoverRouterConfig
