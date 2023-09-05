import { signal } from "@preact/signals";

export const fields = signal<string[]>([]);

export const idea = signal<string>("");
export const generating = signal<boolean>(false);

export const genIdea = async (input: string[]) => {
  generating.value = true;
  try {
    const response = await fetch("/api/gen", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fields: input }),
    });
    const data = response.json();
    return data;
  } catch (error) {
    console.error(error);
  } finally {
    generating.value = false;
  }
};

export const setIdea = (newIdea: string) => {
  idea.value = newIdea;
};
