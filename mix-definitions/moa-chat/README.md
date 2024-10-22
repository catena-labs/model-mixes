# Chat Mixture of Agents

This is a Mixture-of-Agents (MoA) synthesis mix optimized for chat. This mix leverages two 'proposer' models (Llama 3.1 70B on Groq and DeepSeek v2.5) with an 'aggregation' model (Llama 3.1 70B) that synthesizes their outputs. The goal is to produce fast and balanced responses by sourcing responses from multiple models.

This model is availale on [Decent](https://www.decent.xyz), an open-source chat client on Android and iOS.

To learn more about mixture of agents, check out our Github repo [here](https://github.com/catena-labs/moa).

## Categories

- 🦾 **Mixture of Agents**
- 💬 **General**
- 🌐 **Open-Source**

## Composition

This mix produces responses from the following models:

| Model Name                  | Type       |
| --------------------------- | ---------- |
| Meta-Llama-3.1-70B-Instruct | Proposer   |
| DeepSeek-Chat               | Proposer   |
| Meta-Llama-3.1-70B-Instruct | Aggregator |
