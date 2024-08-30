# SynthCode Mix

This is a synthesis mix that uses a mixture-of-agents architecture to give you the highest quality answers. Your request is sent to two "proposer" models (Claude 3.5 Sonnet and GPT-4 Turbo). The responses from these models are passed to an "aggregation" model (GPT-4o) which synthesizes the answers, corrects issues, and returns code.

## Quality

According to our evaluations, this mix performs 12% better than the current leader in Bigcodebench Instruct Hard, an evaluation aimed at measuring the performance of LLMs for difficult coding tasks.

## Performance

This model may take longer to produce a response due to the multiple sub-requests. We are working hard to reduce the latency while retaining the same high quality.

## Composition

This mix produces responses from the following models:

## | Model Name | Type |

| Claude 3.5 Sonnet | Proposer |
| GPT-4 Turbo | Proposer |
| GPT-4o | Aggregator |
