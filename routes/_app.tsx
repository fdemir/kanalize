import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
// import Banner from "../components/Banner.tsx";
import Footer from "../components/Footer.tsx";
import DefaultMeta from "../components/DefaultMeta.tsx";
import Client from "../islands/Client.tsx";

export default function App({ Component }: AppProps) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="main.css" />
      <Head>
        <DefaultMeta />
      </Head>

      <div>
        <div className="bg-gradient" />

        <div className="z-10 absolute w-screen text-opacity-80 text-white">
          {/* <Banner /> */}
          <div className="container md:mx-auto py-36 flex flex-col  min-h-screen">
            <Component />
          </div>
          <Footer />
        </div>
      </div>

      <Client />
    </>
  );
}
