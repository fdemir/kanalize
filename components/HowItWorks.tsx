export default function HowItWorks() {
  return (
    <div className="mb-32">
      <a name="how-it-works"></a>
      <h2 className="text-2xl font-bold mb-4">How it works</h2>
      <div className="text-xl gap-4 flex flex-wrap">
        <p>
          Kanalize is a simple tool to generate open-source project ideas for
          developers. It's a tool that you can use when you're bored and want to
          work on something new.
        </p>

        <p>
          It generates ideas by using given keywords. The keywords are used to
          generate ideas by connecting to OpenAI API. You can like or dislike
          the ideas that are generated.
        </p>

        <p>
          In the future, Kanalize is going to give more conceise, detailed and
          better ideas by saving the liked results and using them to generate
          new ideas.
        </p>
      </div>
    </div>
  );
}
