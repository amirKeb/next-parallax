"use client";

import { motion, useAnimationControls } from "framer-motion";

export default function CrowdsourcingSection() {
  const controls = useAnimationControls();

  return (
    <motion.div
      className="w-full max-w-[100vw] px-4 sm:px-8 md:px-20 py-10 flex flex-col items-start justify-center gap-6"
      initial="hidden"
      animate={controls}
      onViewportEnter={() => controls.start("show")}
      onViewportLeave={() => controls.start("hidden")}
      viewport={{ amount: 0.25, once: false }}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            delayChildren: 0.2,
            staggerChildren: 0,
          },
        },
      }}
    >
      <motion.h2
        className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-[64px] max-w-4xl font-medium leading-none text-left"
        variants={{
          hidden: { opacity: 0, y: 50 },
          show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        Crowdsourcing our collective intelligence to build the best AI
      </motion.h2>

      <motion.p
        className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-4xl text-left"
        variants={{
          hidden: { opacity: 0, y: 50 },
          show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        Open source AI has been lagging behind the likes of Google and OpenAI by
        billions of dollars.
      </motion.p>

      <motion.p
        className="text-sm sm:text-base lg:text-lg text-gray-300  max-w-[860px] text-left"
        variants={{
          hidden: { opacity: 0, y: 50 },
          show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        Salt aims to solve that by rewarding open source developers who
        contribute to the democratization of AI. We run competitions between AI
        models to find and reward the best AI models. As a result, our users
        will be able to access the latest cutting edge AI models.
      </motion.p>

      <motion.button
        className="btn-outline mt-2"
        variants={{
          hidden: { opacity: 0, y: 50 },
          show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        Use The Cutting Edge AI
      </motion.button>
    </motion.div>
  );
}

