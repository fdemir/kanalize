import { Handlers } from "$fresh/server.ts";
import { PromptTemplate } from "langchain/prompts";
import { llm } from "../../utils/llm.ts";

const prompt_text = `
"Provide a concise open-source project idea tailored to an expert in {field}. The idea should be a single sentence and can encompass tools, libraries, frameworks, or developer-oriented products."
`;

export const handler: Handlers = {
  async GET(req) {
    const url = new URL(req.url);
    const fields = url.searchParams.get("fields");

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
