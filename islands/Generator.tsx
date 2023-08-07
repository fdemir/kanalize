import IdeaBox from "./IdeaBox.tsx";
import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

export default function Wrapper() {
  const idea = useSignal("");
  const status = useSignal<"loading" | "success" | "error">("loading");
  const getNewIdea = async () => {
    status.value = "loading";

    try {
      const response = await fetch("/api/gen");
      const data = await response.json();
      status.value = "success";

      idea.value = data.result?.trim();
    } catch {
      status.value = "error";
    }
  };

  useEffect(() => {
    getNewIdea();
  }, []);

  return (
    <div className="my-12">
      <div className="relative">
        <IdeaBox content={idea.value} like={getNewIdea} dislike={getNewIdea} />
      </div>
    </div>
  );
}
