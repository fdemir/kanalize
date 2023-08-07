interface IdeaBoxProps {
  content: string;

  dislike: () => void;
  like: () => void;
}

export default function IdeaBox(props: IdeaBoxProps) {
  const { content, like, dislike } = props;

  return (
    <div className="py-4 flex items-center justify-center">
      <div className="rounded-md bg-white min-h-[350px] md:w-[600px] w-full p-8 flex flex-col justify-between">
        <span className="text-xl font-bold flex">
          {content}
        </span>

        {content.length > 0 && (
          <div className="flex justify-center gap-6 text-xl">
            <button
              className="border-2 border-black rounded-full cursor-pointer p-4"
              onClick={dislike}
            >
              <img
                src="/close.svg"
                alt=""
                width={32}
                height={32}
              />
            </button>
            <button
              className="border-2 border-black rounded-full cursor-pointer p-4"
              onClick={like}
            >
              <img
                src="/earth.svg"
                alt=""
                width={32}
                height={32}
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
