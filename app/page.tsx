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
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ container: containerRef });

  const [statsShouldExit, setStatsShouldExit] = useState(false);

  // Phase 1 (0 -> 200px): subtle lift + stats reveal
  const heroLiftY = useTransform(scrollY, [0, 1080], [0, -130]);
  const backgroundLiftY = useTransform(scrollY, [0, 1080], [0, -80]);
  const statsRevealY = useTransform(scrollY, [0, 1080], [120, 0]);
  // Planet drifts a bit more once stats are on screen, and even more during the slider handoff.
  const planetLiftExtraY = useTransform(
    scrollY,
    [0, 580, 1080, 1760],
    [0, 0, -72, -160]
  );
  // Crossfade between two CSS-defined gradients as stats come into view.
  const heroGradientTwoOpacity = useTransform(scrollY, [0, 1080], [0, 1]);
  const heroGradientOneOpacity = useTransform(scrollY, [0, 1080], [1, 0]);

  // Phase 2 (200 -> 600px): handoff to logos (hero+stats exit, logos enter)
  const heroStageExitY = useTransform(scrollY, [1080, 1260], [0, -1260]);
  const logosEnterY = useTransform(scrollY, [1080, 1260], [1260, 0]);

  const navbarOpacity = useTransform(scrollY, [1080, 1260], [1, 0]);

  useMotionValueEvent(scrollY, "change", (v) => {
    // Exit should only start once we're clearly transitioning into the logo section.
    // (If we jump/scroll to 1080 for "How it works", we still want stats visible.)
    setStatsShouldExit(v >= 1760);
  });

  const scrollToHowItWorks = () => {
    setStatsShouldExit(false);
    containerRef.current?.scrollTo({ top: 1080, behavior: "smooth" });
  };

  return (
    <div ref={containerRef} className="relative h-screen overflow-auto">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-black -z-10" />

      {/* Background blur images */}
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

        {/* Planet image (kept in the fixed background layer) */}
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

      {/* Navigation */}
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

      {/* Main content */}
      <main>
        {/* Scroll scene (internal scroll container drives transforms) */}
        <section className="relative h-[calc(280vh)]">
          <div className="sticky top-0">
            <div className="relative z-10 flex min-h-[calc(100vh-80px)] items-center">
              {/* Hero + Stats stage */}
              <motion.div
                className="relative z-10 w-full px-8 md:px-20"
                style={{ y: heroStageExitY }}
              >
                <motion.div className="relative" style={{ y: heroLiftY }}>
                  <div className="flex-1 max-w-[85vw] flex flex-col gap-9">
                    <div className="relative">
                      {/* The semantic H1 (keeps layout); visible layers are aria-hidden */}
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

                  {/* Stats reveal (152px below hero block) */}
                  <motion.div
                    className="absolute left-0 right-0 top-full mt-[152px]"
                    style={{ y: statsRevealY }}
                  >
                    <StatsContainer shouldExit={statsShouldExit} />
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Logos stage (centered, fades in as hero+stats fade out) */}
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
