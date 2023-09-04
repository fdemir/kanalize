import IdeaCard from "../islands/IdeaCard.tsx";
import Shortcuts from "../components/Shortcuts.tsx";
import { useEffect } from "preact/hooks";
import { fields, generating, genIdea, idea } from "../utils/idea.ts";

export default function Result() {
  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      const focus = document.activeElement?.tagName == "INPUT";

      if (focus) {
        return;
      }

      switch (event.key) {
        case "i":
          alert("Not implemented yet!");
          break;
        case "ArrowLeft":
          genIdea(fields.value);
          break;
        case "ArrowRight":
          genIdea(fields.value);
          break;
      }
    };

    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  if (generating.value) {
    return <div>Generating...</div>;
  }

  if (!idea.value) {
    return (
      <div className="font-italic ">
        Fill what you know. Press the generate and wait for the magic.
      </div>
    );
  }

  return (
    <>
      <IdeaCard content={idea.value} />
      <Shortcuts />
    </>
  );
}
