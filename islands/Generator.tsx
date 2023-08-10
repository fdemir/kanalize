import IdeaBox from "./IdeaBox.tsx";
import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import FieldSelect from "./FieldSelect.tsx";
import skills from "../utils/skills.ts";
import { getField, setField } from "../utils/field.ts";

export default function Wrapper(props: {
  defaultSkill?: string;
}) {
  const idea = useSignal("");
  const status = useSignal<"loading" | "error" | "success" | "idle">("idle");
  const error = useSignal("");
  const selectedFields = useSignal<string[]>([]);

  const getNewIdea = async () => {
    idea.value = "";
    status.value = "loading";

    try {
      const response = await fetch(
        `/api/gen?fields=${selectedFields.value.join(",")}`,
      );
      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }
      status.value = "success";
      idea.value = data.result?.trim();
    } catch (err) {
      status.value = "error";
      error.value = err.message;
    }
  };

  useEffect(() => {
    if (props.defaultSkill) {
      selectedFields.value = [props.defaultSkill];
      setField([props.defaultSkill]);
    } else {
      const persistField = getField();

      selectedFields.value = persistField || [];
    }
    getNewIdea();
  }, []);

  const handleOnFieldChange = (newFields: string[]) => {
    selectedFields.value = newFields;
    setField(newFields);
  };

  return (
    <div className="my-8 md:w-[600px] w-full">
      <FieldSelect
        onChange={handleOnFieldChange}
        value={selectedFields.value}
        data={skills}
      />

      <div className="relative w-full">
        {status.value == "success" && (
          <IdeaBox
            content={idea.value}
            like={getNewIdea}
            dislike={getNewIdea}
          />
        )}
        {status.value === "loading" && (
          <div className="inset-0 my-12 flex items-center justify-center">
            <div className="animate-spin rounded-full h-24 w-24 border-b-2 border-green-600" />
          </div>
        )}
        {status.value === "error" && (
          <span className="text-red-600 py-4 block">
            {error.value}
          </span>
        )}
      </div>
    </div>
  );
}
