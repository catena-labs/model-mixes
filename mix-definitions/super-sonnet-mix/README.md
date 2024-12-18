# Super Sonnet Mix

Super Sonnet Mix enhances Anthropic’s Sonnet 3.5 with integrated tools and multi-provider support, making it even more powerful and reliable for production deployments. It addresses common challenges teams face when scaling their LLM applications, including rate limiting, provider management, and tool integration.

## Categories

- 🦸‍♂️ Super Mix

## Features

### Multi-Provider Reliability

Super Sonnet Mix implements an intelligent failover strategy to ensure high availability:

1. Requests are first routed to Anthropic's API
2. If rate limited, automatically fails over to AWS Bedrock
   This approach effectively increases your rate limits without requiring multiple API keys or complex integration logic.

### Integrated Tools

The mix includes built-in capabilities that work out of the box:

- `crosshatch:search`: Powered by Exa and Tavily APIs for up-to-date information
- `crosshatch:create_image`: Integrated Flux capabilities via Replicate

These tools are available by passing them in the `tools` parameter, without requiring any implementation.

For example

```json
{
  "tools": [
    { "name": "crosshatch:create_image" },
    { "name": "crosshatch:search" }
  ]
}
```

## Composition

This mix intelligently routes requests through the following providers:

| Provider    | Priority | Model                      |
| ----------- | -------- | -------------------------- |
| Anthropic   | 1st      | claude-3-5-sonnet-20241022 |
| AWS Bedrock | 2nd      | claude-3-5-sonnet-20241022 |

## Aliases

For convenience during development and testing, this mix is aliased as `super-sonnet-3.5-latest`. However, this alias may point to a different version of the mix in the future, so it is not recommended for production use.
