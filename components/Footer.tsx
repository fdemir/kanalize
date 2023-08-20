export default function Footer() {
  return (
    <div className="h-20 bg-white bg-opacity-5 w-screen border-t-white border-opacity-5 border-t">
      <div className="container flex justify-between mx-auto items-center h-full ">
        <div className="flex flex-col gap-3">
          <span>Powered by OpenAI, Langchain and Fresh.</span>
          <img src="/new_logo.svg" width={90} height={20} alt="Kanalize" />
        </div>
        <div>
          LOGO
        </div>
      </div>
    </div>
  );
}
