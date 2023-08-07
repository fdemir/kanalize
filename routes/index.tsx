import { Head } from "$fresh/runtime.ts";

import Generator from "../islands/Generator.tsx";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kanalize</title>
      </Head>

      <main className="min-h-screen bg-gray-200 w-full md:px-0 px-8">
        <div className="container mx-auto py-4 gap-4 px-0 md:px-20 min-h-screen">
          <Header />
          <Generator />
        </div>
        <div className="container gap-4 px-0 md:px-20">
          <Footer />
        </div>
      </main>
    </>
  );
}
