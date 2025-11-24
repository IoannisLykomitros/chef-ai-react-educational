import OpenAI from 'openai';

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page. Don't forger to add a description of the recipe in the beginning of your response, above the title of the recipe.
`

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function getRecipeFromOpenAI(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");

  const response = await openai.chat.completions.create({
    model: "gpt-5.1", 
    max_tokens: 1024,
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
    ],
  });

  return response.choices[0].message.content;
}