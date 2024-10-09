# Top Chat Models (LMSys)

Optimized for extended conversations, this mix utilizes top-performing models in multi-turn interactions. It leverages the LMSys Chatbot Arena rankings for conversations with two or more turns, ensuring high-quality responses in longer dialogues. The weight is a function of the Elo score adjusted for number of votes and variance. Models with more consistently high votes will be weighed more heavily.

## Categories

- 💬 **General**
- 🏆 **Leaderboard**
- 🌐 **Open-Source**
- 🧠 **Reasoning**

## Composition

This mix produces responses from the following models:

| Model                                     | Weight % |
| ----------------------------------------- | -------- |
| "meta-llama/Meta-Llama-3.1-405B-Instruct" | 76.37%   |
| "mistralai/large-2"                       | 11.17%   |
| "meta-llama/Meta-Llama-3.1-70B-Instruct"  | 8.20%    |
| "Qwen/Qwen2.5-72B-Instruct"               | 4.27%    |

Update Frequency: Based on LMSys
Source: <https://lmarena.ai/>
