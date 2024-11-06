import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderClient from "./client";

export default function Header() {
  return (
    <div>
      <header className="bg-[#5C1919] text-white py-8 border-t border-[#6c2020]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <Link href="/" className="flex-shrink-0 mx-auto md:mx-0">
              <Image
                src="/logo.webp"
                alt="Bodhi Foundation Logo"
                width={150}
                height={150}
                className="w-[80px] sm:w-[120px] md:w-[140px] lg:w-[160px] h-auto"
              />
            </Link>
            <div className="mt-4 md:mt-0 text-center md:flex-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif tracking-wide">
                Bodhi Mission
              </h1>
              <p className="mt-1 sm:mt-2 text-xl sm:text-2xl md:text-3xl font-light">
                Awakening • Enlightenment • Peace
              </p>
            </div>
            <div className="hidden md:block md:w-[175px] lg:w-[200px]"></div>
          </div>
        </div>
      </header>

      <HeaderClient />
    </div>
  );
}
