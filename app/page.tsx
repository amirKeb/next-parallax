"use client";

import Image from "next/image";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

import StatsContainer from "./components/stats-container";
import LogosSlider from "./components/logos-slider";

export default function Home() {
  const HOW_IT_WORKS_SCROLL_TOP = 1080;
  const STATS_EXIT_SCROLL_TOP = 1760;

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ container: containerRef });

  const [statsShouldExit, setStatsShouldExit] = useState(false);

  const heroLiftY = useTransform(
    scrollY,
    [0, HOW_IT_WORKS_SCROLL_TOP],
    [0, -130]
  );
  const backgroundLiftY = useTransform(
    scrollY,
    [0, HOW_IT_WORKS_SCROLL_TOP],
    [0, -80]
  );
  const statsRevealY = useTransform(
    scrollY,
    [0, HOW_IT_WORKS_SCROLL_TOP],
    [120, 0]
  );
  const planetLiftExtraY = useTransform(
    scrollY,
    [0, 580, HOW_IT_WORKS_SCROLL_TOP, STATS_EXIT_SCROLL_TOP],
    [0, 0, -72, -160]
  );
  const heroGradientTwoOpacity = useTransform(
    scrollY,
    [0, HOW_IT_WORKS_SCROLL_TOP],
    [0, 1]
  );
  const heroGradientOneOpacity = useTransform(
    scrollY,
    [0, HOW_IT_WORKS_SCROLL_TOP],
    [1, 0]
  );

  const heroStageExitY = useTransform(
    scrollY,
    [HOW_IT_WORKS_SCROLL_TOP, 1260],
    [0, -1260]
  );
  const logosEnterY = useTransform(
    scrollY,
    [HOW_IT_WORKS_SCROLL_TOP, 1260],
    [1260, 0]
  );

  const navbarOpacity = useTransform(
    scrollY,
    [HOW_IT_WORKS_SCROLL_TOP, 1260],
    [1, 0]
  );

  useMotionValueEvent(scrollY, "change", (v) => {
    const next = v >= STATS_EXIT_SCROLL_TOP;
    setStatsShouldExit((prev) => (prev === next ? prev : next));
  });

  const scrollToHowItWorks = () => {
    setStatsShouldExit(false);
    containerRef.current?.scrollTo({
      top: HOW_IT_WORKS_SCROLL_TOP,
      behavior: "smooth",
    });
  };

  return (
    <div ref={containerRef} className="relative h-screen overflow-auto">
      <div className="fixed inset-0 bg-black -z-10" />

      <motion.div
        className="fixed inset-0 -z-10"
        style={{ y: backgroundLiftY }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[40vh] flex items-start justify-center">
          <Image
            src="/images/blue-blur.svg"
            alt=""
            width={1195}
            height={684}
            className="object-contain"
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

        <motion.div
          className="hidden lg:block absolute right-18 bottom-16 w-[816px] h-[816px]"
          style={{ y: planetLiftExtraY }}
        >
          <Image
            src="/images/planet.png"
            alt=""
            fill
            className="object-contain object-bottom"
            priority
          />
        </motion.div>
      </motion.div>

      <motion.nav
        className="sticky top-0 z-10 flex items-center justify-center gap-6 px-8 py-6 md:px-16"
        style={{ opacity: navbarOpacity }}
      >
        <button
          type="button"
          className="btn-ghost"
          onClick={scrollToHowItWorks}
        >
          How It Works
        </button>
        <button className="btn-outline">Buy Salt AI</button>
      </motion.nav>

      <main>
        <section className="relative h-[280vh]">
          <div className="sticky top-0">
            <div className="relative z-10 flex min-h-[calc(100vh-80px)] items-center">
              <motion.div
                className="relative z-10 w-full px-8 md:px-20"
                style={{ y: heroStageExitY }}
              >
                <motion.div className="relative" style={{ y: heroLiftY }}>
                  <div className="flex-1 max-w-[85vw] lg:gap-9 gap-6 flex flex-col">
                    <div className="relative">
                      {/* Semantic h1 keeps layout; visible layers are aria-hidden */}
                      <h1 className="invisible">
                        A new economic primitive for funding decentralized AI
                      </h1>

                      <motion.h1
                        aria-hidden
                        className="absolute inset-0 gradient-text-1"
                        style={{ opacity: heroGradientOneOpacity }}
                      >
                        A new economic primitive for funding decentralized AI
                      </motion.h1>
                      <motion.h1
                        aria-hidden
                        className="absolute inset-0 gradient-text-2"
                        style={{ opacity: heroGradientTwoOpacity }}
                      >
                        A new economic primitive for funding decentralized AI
                      </motion.h1>
                    </div>
                    <p className="hero-subtitle">
                      We track, rank and pay for the best open source
                      decentralized LLMs to compete against OpenAI.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6">
                      <button className="btn-outline">Buy Salt AI</button>
                      <button className="btn-ghost">Try Now</button>
                    </div>
                  </div>

                  <motion.div
                    className="absolute left-0 right-0 top-full lg:mt-[152px] mt-[64px]"
                    style={{ y: statsRevealY }}
                  >
                    <StatsContainer shouldExit={statsShouldExit} />
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute inset-0 z-0 flex items-center justify-center"
                style={{ y: logosEnterY }}
              >
                <LogosSlider />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
