"use client";

import Image from "next/image";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

import StatsContainer from "./components/stats-container";
import LogosSlider from "./components/logos-slider";
import CrowdsourcingSection from "./components/crowdsourcing-section";
import LeaderboardTable from "./components/leaderboard-table";

export default function Home() {
  const [vh, setVh] = useState(800);
  useEffect(() => {
    const update = () => setVh(window.innerHeight || 800);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const HOW_IT_WORKS_SCROLL_TOP = useMemo(() => Math.round(vh * 1.2), [vh]);
  const STATS_EXIT_SCROLL_TOP = useMemo(() => Math.round(vh * 2.0), [vh]);
  const HERO_TO_LOGOS_START = HOW_IT_WORKS_SCROLL_TOP;
  const HERO_TO_LOGOS_END = HOW_IT_WORKS_SCROLL_TOP + Math.round(vh * 0.9);
  const CROWDSOURCING_START = useMemo(() => Math.round(vh * 2.6), [vh]);
  const VECTOR5_START_SCROLL = useMemo(() => Math.round(vh * 2.2), [vh]);
  const VECTOR5_FULL_SCROLL = useMemo(() => Math.round(vh * 3.0), [vh]);
  const PAGE_END_SCROLL = useMemo(() => Math.round(vh * 4.5), [vh]);

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
  const blueBlurY = useTransform(
    scrollY,
    [0, vh * 0.65, HOW_IT_WORKS_SCROLL_TOP, HERO_TO_LOGOS_END, CROWDSOURCING_START],
    [0, 0, -72, -72, -vh * 1.6]
  );
  const statsRevealY = useTransform(
    scrollY,
    [0, HOW_IT_WORKS_SCROLL_TOP],
    [120, 0]
  );
  const planetLiftExtraY = useTransform(
    scrollY,
    [0, vh * 0.65, HOW_IT_WORKS_SCROLL_TOP, STATS_EXIT_SCROLL_TOP, PAGE_END_SCROLL],
    [0, 0, -72, -160, -vh * 0.6]
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

  const heroStageExitYRaw = useTransform(
    scrollY,
    [HERO_TO_LOGOS_START, HERO_TO_LOGOS_END],
    [0, -vh * 1.4]
  );
  const heroStageExitY = useSpring(heroStageExitYRaw, {
    stiffness: 140,
    damping: 30,
    mass: 0.6,
  });

  const logosEnterYRaw = useTransform(
    scrollY,
    [HERO_TO_LOGOS_START, HERO_TO_LOGOS_END],
    [vh * 0.55, 0]
  );
  const logosEnterY = useSpring(logosEnterYRaw, {
    stiffness: 140,
    damping: 30,
    mass: 0.6,
  });

  const heroStageOpacity = useTransform(
    scrollY,
    [HERO_TO_LOGOS_START, HERO_TO_LOGOS_END],
    [1, 0]
  );
  const logosOpacity = useTransform(
    scrollY,
    [HERO_TO_LOGOS_START, HERO_TO_LOGOS_END],
    [0, 1]
  );

  const redBlurOpacity = useTransform(
    scrollY,
    [STATS_EXIT_SCROLL_TOP, VECTOR5_START_SCROLL],
    [0.6, 0]
  );

  const vector5Opacity = useTransform(
    scrollY,
    [STATS_EXIT_SCROLL_TOP, VECTOR5_START_SCROLL],
    [0, 0.9]
  );

  const vector5Y = useTransform(
    scrollY,
    [STATS_EXIT_SCROLL_TOP, VECTOR5_FULL_SCROLL],
    [0, -vh * 0.1]
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
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[40vh] flex items-start justify-center"
          style={{ y: blueBlurY }}
        >
          <Image
            src="/images/blue-blur.svg"
            alt=""
            width={1195}
            height={684}
            className="object-contain"
            priority
          />
        </motion.div>
        <motion.div
          className="absolute -bottom-20 translate-y-20 left-0 w-full h-[30vh] flex items-end justify-start"
          style={{ opacity: redBlurOpacity }}
        >
          <Image
            src="/images/red-blur.svg"
            alt=""
            width={873}
            height={521}
            className="object-contain"
            priority
          />
        </motion.div>

        <motion.div
          className="fixed -bottom-16 translate-y-16 left-0 w-full h-[55vh] flex items-end justify-start -z-10 pointer-events-none"
          style={{
            opacity: vector5Opacity,
            y: vector5Y,
          }}
        >
          <Image
            src="/images/Vector 5.svg"
            alt=""
            width={1100}
            height={881}
            className="object-contain"
            priority
          />
        </motion.div>

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

      <motion.nav className=" top-0 z-10 flex items-center justify-center gap-6 px-8 py-6 md:px-16">
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
        <section className="relative h-[300vh]">
          <div className="sticky top-0">
            <div className="relative z-10 flex min-h-[calc(100vh-80px)] items-center">
              <motion.div
                className="relative z-10 w-full px-8 md:px-20"
                style={{ y: heroStageExitY, opacity: heroStageOpacity }}
              >
                <motion.div className="relative" style={{ y: heroLiftY }}>
                  <div className="flex-1 max-w-[85vw] lg:gap-9 gap-4 flex flex-col">
                    <div className="relative">
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
                    className="absolute left-0 right-0 top-full 2xl:mt-[152px] mt-[64px]"
                    style={{ y: statsRevealY }}
                  >
                    <StatsContainer shouldExit={statsShouldExit} />
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute inset-0 z-0 flex items-center justify-center"
                style={{ y: logosEnterY, opacity: logosOpacity }}
              >
                <LogosSlider />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="relative min-h-screen flex items-center justify-center py-20">
          <CrowdsourcingSection />
        </section>

        <section className="relative min-h-screen flex items-center justify-center py-20">
          <LeaderboardTable />
        </section>
      </main>
    </div>
  );
}
