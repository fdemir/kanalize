import { assertEquals } from "https://deno.land/std@0.197.0/testing/asserts.ts";

import { DEFAULT_FIELDS, getField, setField } from "./field.ts";

Deno.test("getField", () => {
  const data = getField();

  assertEquals(DEFAULT_FIELDS, data);
});

Deno.test("setField", () => {
  const example = ["javascript", "llm"];

  setField(example);

  assertEquals(getField(), example);
});
