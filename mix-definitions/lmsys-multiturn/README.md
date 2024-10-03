# Top Chat Models (LMSys)

Optimized for extended conversations, this mix utilizes top-performing models in multi-turn interactions. It leverages the LMSys Chatbot Arena rankings for conversations with two or more turns, ensuring high-quality responses in longer dialogues. The weight is a function of the Elo score adjusted for number of votes and variance. Models with more consistently high votes will be weighed more heavily.

## Tags

- 💬 **Chat**
- 🧠 **Reasoning**

## Composition

This mix produces responses from the following models:

| Model                        | Weight % |
| ---------------------------- | -------- |
| "chatgpt-4o-latest"          | 50.32%   |
| "gpt-4o-2024-05-13"          | 19.40%   |
| "claude-3-5-sonnet-20240620" | 18.14%   |
| "gemini-1.5-pro-exp-0827"    | 7.57%    |
| "gemini-1.5-pro-exp-0801"    | 4.57%    |

Update Frequency: Based on LMSys
Source: https://lmarena.ai/
