## Coding Mixture of Agents

This is a synthesis mix that uses a mixture-of-agents architecture to give you the highest quality answers. Your request is sent to two "proposer" models (Claude 3.5 Sonnet and GPT-4 Turbo). The responses from these models are passed to an "aggregation" model (GPT-4o) which synthesizes the answers, corrects issues, and returns code.

To learn more about mixture of agents, check out our Github repo [here](https://github.com/catena-labs/moa).

## Quality

According to our evaluations, this mix performs 18% better than the current leader in Bigcodebench Instruct Hard, an evaluation aimed at measuring the performance of LLMs for difficult coding tasks.

We ran the evaluation on 148 problems in the Bigcodebench Instruct Hard dataset using the provided [docker container](https://github.com/bigcode-project/bigcodebench). Our SynthCode Mix score 31.1% (Pass@1) on this dataset compared to the next best model, GPT-4o, which scored 26.4% (Pass@1).

![Results](https://imgur.com/QrcRcsS.png)

## Performance

This model may take longer to produce a response due to the multiple sub-requests. We are working hard to reduce the latency while retaining the same high quality.

## Composition

This mix produces responses from the following models:

| Model Name        | Type       |
| ----------------- | ---------- |
| Claude 3.5 Sonnet | Proposer   |
| GPT-4 Turbo       | Proposer   |
| GPT-4o            | Aggregator |
