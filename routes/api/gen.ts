import { Handlers } from "$fresh/server.ts";
import { PromptTemplate } from "langchain/prompts";
import { llm } from "../../utils/llm.ts";
import { sectors } from "../../utils/sectors.ts";

const prompt_text = `
  Generate an project idea for a {field}. 
  The response must be easy to understand, one sentence, concise, and actionable. 
  Use simple words.
  If the user doesn't provide a specific sector, then you can choose {sector}.
`;

export const handler: Handlers = {
  async POST(req) {
    const { fields } = await req.json();

    if (!fields) {
      return new Response(
        JSON.stringify({
          error: "You must select some fields.",
        }),
        {
          status: 400,
        },
      );
    }

    const prompt = new PromptTemplate({
      template: prompt_text,
      inputVariables: ["field", "sector"],
    });

    const randomSector = sectors[Math.floor(Math.random() * sectors.length)];

    const result = await prompt.format({
      field: fields,
      sector: randomSector,
    });

    const res = await llm.call(
      result,
    );

    return new Response(JSON.stringify({
      result: res,
    }));
  },
};
