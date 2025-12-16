"use client";

import Image from "next/image";
import "./LogoSlider.css";
import { div } from "framer-motion/client";

const logos = [
  { src: "/images/logos/solana-logo.png", alt: "Solana Logo" },
  { src: "/images/logos/arweave-logo.png", alt: "Arweave Logo" },
  { src: "/images/logos/bittensor-logo.png", alt: "Bittensor Logo" },
  { src: "/images/logos/red-logo.png", alt: "Red Logo", aspectRatio: "1" },
  {
    src: "/images/logos/telegram-logo.png",
    alt: "Telegram Logo",
    aspectRatio: "1",
  },
];

const LogoSlider = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 py-10">
      <h2 className="text-[64px]">
        Projects integrated into the Arrakis AI Ecosystem
      </h2>
      <div className="logo-slider-container">
        <div className="logo-slider-track">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div key={`first-${index}`} className="logo-item">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.aspectRatio ? 100 : 200}
                height={100}
              />
            </div>
          ))}
          {/* Second, duplicate set of logos */}
          {logos.map((logo, index) => (
            <div key={`second-${index}`} className="logo-item">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.aspectRatio ? 100 : 200}
                height={100}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
