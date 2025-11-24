import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function getRecipeFromOpenAI(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");

  const response = await openai.chat.completions.create({
    model: "gpt-4", 
    max_tokens: 1024,
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
    ],
  });

  return response.choices[0].message.content;
}