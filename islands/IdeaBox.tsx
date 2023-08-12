interface IdeaBoxProps {
  content: string;

  dislike: () => void;
  like: () => void;
}

export default function IdeaBox(props: IdeaBoxProps) {
  const { content, like, dislike } = props;

  return (
    <div className="py-4 flex items-center justify-center">
      <div className="rounded-md bg-white gap-8 w-full p-8 flex flex-col justify-between shadow-sm">
        <span className="text-xl font-bold flex">
          {content}
        </span>

        {content.length > 0 && (
          <div className="flex justify-center gap-6 text-xl">
            <button
              className="hover:text-blue-600 border-2 border-black rounded-full cursor-pointer p-4 hover:border-blue-600 text-2xl w-16 h-16 items-center justify-center flex"
              onClick={dislike}
            >
              <span className="sr-only">Dislike</span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z">
                </path>
              </svg>
            </button>
            <button
              className="hover:text-red-600 border-2 border-black rounded-full cursor-pointer p-4 hover:border-red-600 text-2xl w-16 h-16 items-center justify-center flex"
              alt="Like"
              onClick={like}
            >
              <span className="sr-only">Like</span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z">
                </path>
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
