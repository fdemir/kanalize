import HowItWorks from "../components/HowItWorks.tsx";
import FieldSelect from "../islands/FieldSelect.tsx";
import Result from "../islands/Result.tsx";
import Saved from "../islands/Saved.tsx";
import Templates from "../islands/Templates.tsx";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <img src="/new_logo.svg" width={208} height={27} alt="Kanalize" />

      <div className="flex flex-col w-full gap-12 h-screen py-12">
        <div>
          <FieldSelect />
        </div>
        <Result />
        <Templates />
      </div>
      <Saved />
      <HowItWorks />
    </div>
  );
}
