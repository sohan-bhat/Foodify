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
        content: "You are a robot that tells the user what recipes can be made-not how to do them-ONLY using the ingredients the user mentions. Make sure to add formatting in the text. For each recipe idea, make it bold. Add some spaces between the new lines. DO NOT add a \"note\" at the end. Include 3 - 4 recipe ideas."
      }
    ],
    model: "llama3-8b-8192",
  });
}