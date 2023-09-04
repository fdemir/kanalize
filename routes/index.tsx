import FieldSelect from "../islands/FieldSelect.tsx";
import Result from "../islands/Result.tsx";
// import Generator from "../islands/Generator.tsx";
// import Templates from "../components/Templates.tsx";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <img src="/new_logo.svg" width={208} height={27} alt="Kanalize" />

      <div className="flex flex-col w-full gap-12 my-10">
        <div>
          <FieldSelect />
        </div>

        <Result />

        {/* <Templates /> */}
      </div>
    </div>
  );
}
