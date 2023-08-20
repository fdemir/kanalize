import { AppProps } from "$fresh/server.ts";
import Footer from "../components/Footer.tsx";

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
      <div>
        <div className="bg-gradient" />

        <div className="z-10 absolute w-screen text-opacity-80 text-white">
          <div className="container mx-auto py-36 flex flex-col  min-h-screen">
            <Component />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
