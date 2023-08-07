export default function Header() {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold mb-3">Kanalize</h1>
      <p className="text-gray-600 md:w-8/12 w-full text-xl">
        Kanalize is a simple tool to generate open-source project ideas for
        developers. It's a tool that you can use when you're bored and want to
        work on something new. See{" "}
        <u className="text-green-600 cursor-pointer">
          How It Works
        </u>{" "}
        to learn more.
      </p>
    </div>
  );
}
