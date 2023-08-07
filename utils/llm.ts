import { OpenAI } from "npm:langchain/llms/openai";

export const llm = new OpenAI({
  openAIApiKey: Deno.env.get("OPENAI_API_KEY")!,
});
