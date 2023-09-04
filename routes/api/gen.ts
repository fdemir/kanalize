import { Handlers } from "$fresh/server.ts";
import { PromptTemplate } from "langchain/prompts";
import { llm } from "../../utils/llm.ts";

const prompt_text = `
"Generate a innovative startup idea in any bussiness type, it can be random. The user wants to create helpful products. It can be on any field, sector, and business, but it must be a software solution. It must be only one or two sentence. Concise idea. Simple and easy to understand. The maker expertises in the {field}. Don't use the field in sentence.
 You can use one of them to add extra context, deep dive if needed: animals, foods, people, programmers, algorithms, art, logic, music, producers, science
"
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
      inputVariables: ["field"],
    });

    const result = await prompt.format({
      field: fields,
    });

    const res = await llm.call(
      result,
    );

    return new Response(JSON.stringify({
      result: res,
    }));
  },
};
