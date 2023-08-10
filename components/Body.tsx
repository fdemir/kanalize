import Generator from "../islands/Generator.tsx";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import Examples from "../islands/Examples.tsx";

export default function Body(props: {
  slug?: string;
}) {
  return (
    <main className="min-h-screen bg-gray-200 w-full md:px-0 px-8">
      <div className="container mx-auto py-4 gap-4 px-0 md:px-20 min-h-screen">
        <Header />
        <Generator defaultSkill={props.slug} />
      </div>

      <div className="container mx-auto py-4 gap-4 px-0 md:px-20 ">
        <Examples />
        <Footer />
      </div>
    </main>
  );
}
