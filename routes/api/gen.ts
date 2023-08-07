import { Handlers } from "$fresh/server.ts";
import { PromptTemplate } from "npm:langchain/prompts";
import { llm } from "../../utils/llm.ts";

const prompt_text = `
"generate open-source project idea for someone who specializing in {field}. response must be only one sentence. it can be tool, library, framework, or a product for developers."
`;

export const handler: Handlers = {
  async GET(_req, ctx) {
    const prompt = new PromptTemplate({
      template: prompt_text,
      inputVariables: ["field"],
    });

    const result = await prompt.format({
      field: "javascript, go",
    });

    const res = await llm.call(
      result,
    );

    return new Response(JSON.stringify({
      result: res,
    }));
  },
};
