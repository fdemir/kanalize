export default function Shortcuts() {
  return (
    <div className="gap-1 flex text-opacity-50 w-full items-center justify-center">
      <div className="bg-white bg-opacity-5 rounded-md p-2 gap-1  inline-flex text-sm">
        <span className="w-5 h-5 flex items-center justify-center bg-white bg-opacity-10 rounded-md">
          I
        </span>
        <span>Info</span>
      </div>
      <div className="bg-white bg-opacity-5 rounded-md p-2 gap-1  inline-flex text-sm">
        <span className="w-5 h-5 flex items-center justify-center bg-white bg-opacity-10 rounded-md">
          ←
        </span>
        <span>Dislike</span>
      </div>
      <div className="bg-white bg-opacity-5 rounded-md p-2 gap-1  inline-flex text-sm">
        <span className="w-5 h-5 flex items-center justify-center bg-white bg-opacity-10 rounded-md">
          →
        </span>
        <span>Like</span>
      </div>
    </div>
  );
}
