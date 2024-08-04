import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.REACT_APP_GROQ_API_KEY, dangerouslyAllowBrowser: true });

export async function getGroqChatCompletion(userInput) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `${userInput}`,
      },
      {
        role: "system",
        content: "You are a robot that tells the user what recipes can be made-not how to do them-ONLY using the ingredients the user mentions. Make sure to add proper new line formatting. For each recipe idea, make it bold, and add a clear indicator like a bullet point or a hyphen. DO NOT add a \"note\" at the end. Include 3 - 4 recipe ideas. You do not have to necessarily have to use ALL the ingredients, recommend the recipes that is easiest, and tastiest to make. MAKE SURE to DOUBLE CHECK if there are ANY dietary restrictions including (vegan, vegetarian, keto, etc.). If there are dietary restrictions, MAKE SURE to DOUBLE CHECK that EACH recipe complies with the restriction(s) mentioned."
      }
    ],
    model: "llama3-8b-8192",
  });
}