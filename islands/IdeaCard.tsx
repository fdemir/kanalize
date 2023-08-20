import Button from "../components/Button.tsx";

interface IdeaProps {
  content: string;
}

export default function IdeaCard(props: IdeaProps) {
  return (
    <div className="w-full bg-white bg-opacity-10 rounded-md min-h-[160px] px-8 py-6 relative border-t-white border-opacity-5 border-t backdrop-blur-md ">
      <p className="pb-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facilis,
        nisi eos dolores ipsa vel sequi, minus animi officia ut ducimus maiores
        quasi dolorum, aliquam accusamus reprehenderit! Ab, repellat numquam!
      </p>
      <div className="flex justify-end gap-3">
        <Button>
          <img src="/share.svg" width={20} height={20} alt="Share" />
        </Button>
        <Button>
          <img src="/bookmark.svg" width={20} height={20} alt="Bookmark" />
        </Button>
      </div>

      <Button className="absolute -left-5 top-1/2 transform -translate-y-1/2 hover:-translate-x-1">
        <img src="/arrow.svg" width={20} height={20} alt="" />
      </Button>

      <Button className="absolute -right-5 top-1/2 transform -translate-y-1/2 hover:translate-x-1 rotate-180">
        <img src="/arrow.svg" width={20} height={20} alt="" />
      </Button>
    </div>
  );
}
