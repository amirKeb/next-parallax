"use client";

import { motion, MotionValue } from "framer-motion";
import Image from "next/image";

interface CommunitySectionProps {
    moonY: MotionValue<number>;
    moonOpacity: MotionValue<number>;
}

export default function CommunitySection({ moonY, moonOpacity }: CommunitySectionProps) {
    return (
        <div className="relative w-full min-h-screen flex items-center overflow-hidden">
            <motion.div
                className="absolute top-18 right-0 w-[200px] h-[200px] lg:w-[400px] lg:h-[400px]"
                style={{ y: moonY, opacity: moonOpacity }}
            >
                <Image
                    src="/images/moon.svg"
                    alt=""
                    fill
                    className="object-contain"
                    priority
                />
            </motion.div>

            <div className="relative z-10 w-full max-w-[100vw] px-4 sm:px-8 md:px-20 py-10 flex flex-col items-start justify-center gap-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-[64px] max-w-3xl font-medium leading-tight text-left">
                    Join our community
                </h2>

                <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-3xl text-left">
                    Join us on our mission to to the moon & revolutionize open source AI development
                    so that we can build a permissionless, democratized, and decentralized AI.
                </p>

                <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-3xl text-left">
                    Let the fate of AI be in our hands and not that of big tech companies.
                </p>

                <div className="flex items-center gap-6 mt-4">
                    <a href="#" className="hover:opacity-80 transition-opacity">
                        <Image
                            src="/images/logos/telegram-logo.png"
                            alt="Telegram"
                            width={40}
                            height={40}
                            className="w-8 h-8 sm:w-10 sm:h-10"
                        />
                    </a>
                    <a href="#" className="hover:opacity-80 transition-opacity">
                        <Image
                            src="/images/x-logo.png"
                            alt="X"
                            width={40}
                            height={40}
                            className="w-8 h-8 sm:w-10 sm:h-10"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}

