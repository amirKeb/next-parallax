import Image from "next/image";
import StatsContainer from "./components/stats-container";
import LogosSlider from "./components/logos-slider";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-auto">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-black -z-10" />

      {/* Background blur images */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[40vh] flex items-start justify-center">
          <Image
            src="/images/blue-blur.svg"
            alt=""
            width={1195}
            height={684}
            className="object-contain backdrop-blur-[200px]"
            priority
          />
        </div>
        <div className="absolute -bottom-20 translate-y-20 left-0 w-full h-[30vh] flex items-end justify-start">
          <Image
            src="/images/red-blur.svg"
            alt=""
            width={873}
            height={521}
            className="object-contain opacity-60"
            priority
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-center gap-6 px-8 py-6 md:px-16">
        <a href="#" className="btn-ghost">
          How It Works
        </a>
        <button className="btn-outline">Buy Salt AI</button>
      </nav>

      {/* Main content */}
      <main className="px-8 md:px-20">
        <div className="relative z-10 flex min-h-[calc(100vh-80px)] items-center">
          <div className="flex-1 max-w-[85vw] flex flex-col gap-9">
            <h1 className="gradient-text">
              A new economic primitive for funding decentralized AI.
            </h1>
            <p className="hero-subtitle">
              We track, rank and pay for the best open source decentralized LLMs
              to compete against OpenAI.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="btn-outline">Buy Salt AI</button>
              <button className="btn-ghost">Try Now</button>
            </div>
          </div>

          {/* Planet image */}
          <div className="hidden lg:block absolute right-0 bottom-0 w-[816px] h-[816px] -z-10">
            <Image
              src="/images/planet.png"
              alt=""
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>
        <StatsContainer />
        <LogosSlider />
      </main>
    </div>
  );
}
