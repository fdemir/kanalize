export default function Footer() {
  return (
    <div className="py-4 flex justify-between items-center w-full">
      <div>
        <span>
          Powered by OpenAI, Langchain and Fresh
        </span>
        <br />
        <span className="text-gray-600">
          Check out the{" "}
          <a className="text-underline text-green-600">Dokusearch</a>{" "}
          project to talk with documents.
        </span>
      </div>
      <div className="flex gap-2">
        <a href="https://github.com/fdemir/kanalize">
          <img src="/github.svg" className="w-8 inline-block" />
        </a>
        <a href="https://twitter.com/furkaneulogy" target="_blank">
          <img src="/twitter.svg" className="w-8 inline-block" />
        </a>
      </div>
    </div>
  );
}
