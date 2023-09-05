import IdeaCard from "../islands/IdeaCard.tsx";
import Shortcuts from "../islands/Shortcuts.tsx";
import { generating, idea } from "../utils/idea.ts";

export default function Result() {
  return (
    <>
      {generating.value && <span>Generating...</span>}
      {idea.value && !generating.value
        ? <IdeaCard content={idea.value} />
        : (
          <div className="font-italic ">
            Fill what you know. Press the generate and wait for the magic.
          </div>
        )}
      <Shortcuts />
    </>
  );
}
