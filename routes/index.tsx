import Shortcuts from "../components/Shortcuts.tsx";
import Templates from "../components/Templates.tsx";
import IdeaCard from "../islands/IdeaCard.tsx";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <img src="/new_logo.svg" width={208} height={27} alt="Kanalize" />

      <div className="my-10 w-full gap-12 flex flex-col">
        <IdeaCard />
        <Shortcuts />
        <Templates />
      </div>
    </div>
  );
}
