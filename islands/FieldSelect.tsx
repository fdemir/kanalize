import { useEffect } from "preact/hooks";
import { useSignal } from "@preact/signals";

export default function FieldSelect() {
  const fieldInput = useSignal("");
  const selectedItems = useSignal<string[]>([]);

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
    const newItemExists = selectedItems.value.includes(fieldInput.value);

    if (isValidAction && !newItemExists) {
      selectedItems.value = [
        ...selectedItems.value,
        fieldInput.value,
      ];
      fieldInput.value = "";
    }
  };

  const removeItem = (item: string) => {
    selectedItems.value = selectedItems.value.filter(
      (i) => i !== item,
    );
  };

  return (
    <div className="relative w-full p-4 bg-white border-t rounded-md bg-opacity-10 border-t-white border-opacity-5 backdrop-blur-md ">
      <div className="flex flex-wrap gap-3">
        {selectedItems.value.map((item) => {
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
          value={fieldInput.value}
        />
      </div>
    </div>
  );
}
