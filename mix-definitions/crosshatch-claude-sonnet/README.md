# Claude 3.5 Sonnet Super Mix

This mix provides seamless access to Claude 3.5 Sonnet by combining Anthropic and Bedrock as providers. By automatically failing over between providers, users get the best of both worlds - Anthropic's direct API access with Bedrock's enterprise-grade reliability. This means you don't have to worry about managing multiple API keys, hitting rate limits, or dealing with provider outages. The mix will automatically route your requests to ensure maximum uptime and performance.

## Categories

- 💬 **General**
- 💻 **Coding**
- 🗣️**Multilingual**
- 🧠 **Reasoning**
- ⭐ **Super Mix**

## Composition

This mix produces responses from the following models in failover order:

| Model                                    | Provider   | Priority |
| ---------------------------------------- | ---------- | -------- |
| "claude-3-5-sonnet-20241022"             | Anthropic  | Primary  |
| "claude-3-5-sonnet-20241022"             | Bedrock    | Backup   |
