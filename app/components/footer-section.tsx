"use client";

import Image from "next/image";

export default function FooterSection() {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden">
      <div className="flex-1 flex items-center justify-center px-4 sm:px-8 md:px-20 py-20">
        <h4 className="text-[32px] leading-[32px] font-normal text-center tracking-[0%]">
          Join our community and harvest $SALT
        </h4>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-8 md:px-20 pb-8">
        <div className="border-t border-gray-700 pt-6">
          <nav className="flex items-center justify-center gap-8 mb-6">
            <a href="#" className="text-white hover:text-gray-300 transition-colors text-base sm:text-lg font-medium">
              How It Works
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors text-base sm:text-lg font-medium">
              Buy Salt AI
            </a>
          </nav>
        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Image
                src="/images/logos/telegram-logo.png"
                alt="Telegram"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Image
                src="/images/x-logo.png"
                alt="X"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </a>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Terms of Use
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

