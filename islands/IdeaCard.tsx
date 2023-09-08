import { useSignal } from "@preact/signals";
import Button from "../components/Button.tsx";
import { save } from "../utils/saved.ts";

interface IdeaProps {
  content: string;
}

export default function IdeaCard(props: IdeaProps) {
  const isSaved = useSignal(false);
  const icon = isSaved.value ? "bookmark" : "bookmark-outline";

  const handleSave = () => {
    isSaved.value = !isSaved.value;
    save(props.content);
  };

  return (
    <div className="w-full bg-white bg-opacity-10 rounded-md min-h-[160px] px-8 py-6 relative border-t-white border-opacity-5 border-t backdrop-blur-md ">
      <p className="pb-3">
        {props.content}
      </p>
      <div className="flex justify-end gap-3">
        <Button className="!bg-opacity-10">
          <img src="/share.svg" width={20} height={20} alt="Share" />
        </Button>
        <Button className="!bg-opacity-10" onClick={handleSave}>
          <img
            src={`/${icon}.svg`}
            width={20}
            height={20}
            alt="Bookmark"
          />
        </Button>
      </div>

      <Button className="absolute -left-5 top-1/2 transform -translate-y-1/2 hover:-translate-x-1 bg- md:flex !hidden">
        <img src="/arrow.svg" width={20} height={20} alt="" />
      </Button>

      <Button className="absolute -right-5 top-1/2 transform -translate-y-1/2 hover:translate-x-1 items-end md:flex !hidden">
        <span className="rotate-180">
          <img
            src="/arrow.svg"
            width={20}
            height={20}
            alt=""
          />
        </span>
      </Button>
    </div>
  );
}
