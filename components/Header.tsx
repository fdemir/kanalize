export default function Header() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-3">Kanalize</h1>
      <h2 className="text-gray-600 xl:w-8/12 w-full text-xl">
        Kanalize is a simple tool to generate open-source project ideas for
        developers. It's a tool that you can use when you're bored and want to
        work on something new. See{" "}
        <a
          className="text-green-600 cursor-pointer text-underline"
          href="#how-it-works"
        >
          How It Works
        </a>{" "}
        to learn more.
      </h2>
    </div>
  );
}
