export default function Footer() {
  return (
    <div className="min-h-20 bg-white bg-opacity-5 w-screen border-t-white border-opacity-5 border-t">
      <div className="container flex justify-between mx-auto items-center h-full md:flex-row flex-col gap-4 py-4">
        <div className="flex flex-col gap-3">
          <span>Powered by OpenAI, Langchain and Fresh.</span>
          <img src="/new_logo.svg" width={110} height={40} alt="Kanalize" />
          <a
            href="https://www.producthunt.com/products/kanalize/reviews?utm_source=badge-product_review&utm_medium=badge&utm_souce=badge-kanalize"
            target="_blank"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=546854&theme=dark"
              alt="Kanalize - Open&#0032;source&#0032;project&#0032;ideas&#0032;powered&#0032;by&#0032;AI | Product Hunt"
              style="width: 200px; height: 44px;"
              width="200"
              height="44s"
            />
          </a>
        </div>
        <div className="flex gap-2">
          <a href="https://x.com/furkaneulogy" target="_blank">X/Twitter</a>
          <a href="https://github.com/fdemir/kanalize" target="_blank">
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
