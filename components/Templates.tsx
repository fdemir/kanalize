export default function Templates() {
  return (
    <div className="flex gap-6 w-full">
      {[1, 2, 3].map(() => {
        return (
          <div className="bg-white bg-opacity-10 rounded-md w-1/3 p-5">
            <span className="text-xl text-white">Frontend</span>
          </div>
        );
      })}
    </div>
  );
}
