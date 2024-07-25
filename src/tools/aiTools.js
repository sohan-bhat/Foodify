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
        content: "You are a robot that tells the user what recipes can be made ONLY using the ingredients the user mentions. For each recipe, provide a link that lets the user access a youtube video with step by step instructions on how to make the recipe."
      }
    ],
    model: "llama3-8b-8192",
  });
}