# Open-Source Coding Mixture of Agents

This is a synthesis mix that uses a mixture-of-agents architecture to provide high-quality coding assistance. Your request is sent to two "proposer" models (DeepSeek-2.5 and Mistral Large 2). The responses from these models are then passed to an "aggregation" model (Llama 3.1 405B) which synthesizes the answers, corrects issues, and returns the final code.

To learn more about mixture of agents, check out our Github repo [here](https://github.com/catena-labs/moa-llm).

## Tags

- 🌐 **Open-Source**
- 👩🏽‍💻 **Programming**
- 🧠 **Reasoning**

## Quality

According to our evaluations, this mix outperforms several leading commercial models on the Bigcodebench Instruct Hard dataset, a benchmark aimed at measuring the performance of LLMs for difficult coding tasks.

We ran the evaluation on 144 problems in the Bigcodebench Instruct Hard dataset using the provided [docker container](https://github.com/bigcode-project/bigcodebench). Our Open-Source Coding Mix scored 28.4% (Pass@1) on this dataset, surpassing individual models like GPT-4 (26.35%), Claude 3.5 Sonnet (24.32%), and OpenAI's o1-preview (26.84%).

## Performance

This mix demonstrates faster response times compared to `moa-coding` which uses commercial models and only performs marginally worse. While GPT-4 Turbo can take 3-10 seconds per response, our proposer models (DeepSeek-2.5 and Mistral Large 2) generate responses significantly quicker. The aggregator (Llama 3.1 405B) uses [Together.ai](http://together.ai/)'s fast inference endpoint, ensuring the aggregation step doesn't become a bottleneck.

## Cost-Effectiveness

This open-source mix is 56% cheaper than equivalent commercial MOA setups. For a typical coding task (5,800 input tokens with a 4:1 input/output ratio), it costs $0.085 per request compared to $0.193 for a commercial MOA.

## Composition

This mix produces responses from the following models:

| Model Name      | Type       |
| --------------- | ---------- |
| DeepSeek-2.5    | Proposer   |
| Mistral Large 2 | Proposer   |
| Llama 3.1 405B  | Aggregator |

## Future Directions

We're continuously working to improve this mix. Future enhancements may include:

- Exploring new open-source models as proposers
- Experimenting with more complex topologies (e.g., more proposers, multiple layers)
- Optimizing for specific programming languages or frameworks

We welcome contributions and feedback from the community to help push the boundaries of what's possible with open-source AI-assisted coding.
