import { Head } from "$fresh/runtime.ts";

import Body from "../components/Body.tsx";
import DefaultMeta from "../components/DefaultMeta.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Open Source Project ideas powered by AI
        </title>
        <meta
          name="description"
          content="Kanalize is a simple tool to generate open-source project ideas for developers. It's a tool that you can use when you're bored and want to work on something new. "
        />

        <DefaultMeta />
      </Head>
      <Body />
    </>
  );
}
