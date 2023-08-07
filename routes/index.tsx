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

      <main className="min-h-screen bg-gray-200 w-screen">
        <div className="container mx-auto py-4 gap-4 px-0 md:px-20">
          <Header />
          <Generator />
          <Footer />
        </div>
      </main>
    </>
  );
}
