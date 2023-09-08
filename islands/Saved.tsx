import { remove, saved } from "../utils/saved.ts";

export default function Saved() {
  return (
    <div className="mb-12 w-full">
      <h2 className="text-2xl font-bold mb-4">
        Saved {saved.value.length > 0 && `(${saved.value.length})`}
      </h2>

      {saved.value.length === 0 && (
        <p className="text-white">
          You don't have any saved ideas yet.
        </p>
      )}
      <div className="grid md:grid-cols-2 gap-4">
        {saved.value.map((item) => (
          <div
            className=""
            role="button"
            key={item.id}
          >
            <div className="bg-white bg-opacity-10 rounded-md p-4 flex flex-col">
              <span className="text-white">
                {item.content}
              </span>
              <div className="pt-4">
                <span
                  class="font-bold font-italic select-none"
                  onClick={() => remove(item.id)}
                >
                  remove
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
