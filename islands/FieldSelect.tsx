import { useEffect } from "preact/hooks";
import { useSignal } from "@preact/signals";

import { fields, generating, genIdea, idea } from "../utils/idea.ts";

export default function FieldSelect() {
  const fieldInput = useSignal("");
  const inputRef = useSignal<HTMLInputElement | null>(null);

  useEffect(() => {});

  // TODO: type event
  const handleInputChange = (event: any) => {
    fieldInput.value = event.target.value;
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    const validations = [
      event.key === "Enter",
      fieldInput.value.length > 0,
      fieldInput.value.length < 100,
    ];
    const isValidAction = validations.every(Boolean);
    const newItemExists = fields.value.includes(fieldInput.value);

    if (isValidAction && !newItemExists) {
      fields.value = [
        ...fields.value,
        fieldInput.value,
      ];
      fieldInput.value = "";
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    const isRemoveAction = event.key === "Backspace" || event.key === "Delete";
    const isInputEmpty = fieldInput.value.length === 0;

    if (isRemoveAction && isInputEmpty) {
      const newfields = [...fields.value];
      newfields.pop();

      fields.value = newfields;
    }
  };

  const removeItem = (item: string) => {
    fields.value = fields.value.filter(
      (i) => i !== item,
    );
  };

  const handleGen = async () => {
    const data = await genIdea(fields.value);
    idea.value = data.result;
  };

  return (
    <div className="relative w-full bg-white border-t rounded-md bg-opacity-10 border-t-white border-opacity-5 backdrop-blur-md ">
      <div
        className="flex flex-wrap gap-3 md:pr-[135px] p-4"
        onClick={() => inputRef.value?.focus()}
      >
        {fields.value.map((item) => {
          return (
            <span
              className="px-3 py-2 text-sm text-white bg-white rounded-md shadow-sm cursor-pointer text-opacity-70 bg-opacity-10"
              onClick={() => removeItem(item)}
            >
              {item}
            </span>
          );
        })}
        <input
          type="text"
          placeholder="Type field or skill..."
          className="p-0 text-sm text-white bg-transparent border-0 outline-none placeholder:text-white placeholder:text-opacity-20 text-opacity-70 min-h-[39px]"
          onInput={handleInputChange}
          onKeyPress={handleKeyPress}
          onKeyDown={handleKeyDown}
          value={fieldInput.value}
          ref={(input) => inputRef.value = input}
        />
      </div>
      <div className="md:p-0 p-4 pt-0">
        <button
          className="md:absolute md:w-auto w-full top-0 right-0 px-3 flex disabled:opacity-50 items-center justify-center h-[39px] md:mt-4 rounded-md border-white border-opacity-20 border-2 focus:outline-none mr-4 shadow-md text-white text-opacity-70"
          onClick={handleGen}
          disabled={generating.value}
        >
          <img
            src="/sparkle-fill.svg"
            width={20}
            height={20}
            className={"mr-3"}
          />
          Generate
        </button>
      </div>
    </div>
  );
}
