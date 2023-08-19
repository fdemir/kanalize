export default function Home() {
  return (
    <div>
      <div
        className="min-h-screen min-w-screen "
        style={{
          background:
            "radial-gradient(49.10% 52.07% at 95.73% -0.00%, rgba(5, 150, 105, 0.30) 0%, rgba(5, 150, 105, 0.00) 100%), radial-gradient(51.81% 64.89% at 9.39% 17.56%, rgba(5, 150, 105, 0.30) 0%, rgba(5, 150, 105, 0.00) 100%), radial-gradient(70.77% 73.42% at 98.67% 105.72%, rgba(5, 150, 105, 0.20) 0%, rgba(5, 150, 105, 0.00) 100%), radial-gradient(50.46% 63.85% at 0.00% 124.20%, rgba(5, 150, 105, 0.20) 0%, rgba(5, 150, 105, 0.00) 100%), #000",
        }}
      >
      </div>

      <div
        style={{
          background: "url(/noise.png)",
          width: "100vw",
          height: "100vh",
          backgroundRepeat: "repeat",
          position: "absolute",
          left: 0,
          top: 0,
          mixBlendMode: "color-dodge",
          opacity: 0.1,
        }}
      >
      </div>
    </div>
  );
}
