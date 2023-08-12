// deno-lint-ignore-file ban-ts-comment ban-unused-ignore
// @ts-nocheck
import { useEffect } from "preact/hooks";

export default function Client() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      // deno-lint-ignore ban-ts-comment
      // @ts-ignore
      window.dataLayer
        ?.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-L8LSH9G9RP");
  }, []);

  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-L8LSH9G9RP"
      >
      </script>
    </>
  );
}
