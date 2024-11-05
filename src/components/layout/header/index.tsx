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
                className="w-[100px] sm:w-[150px] md:w-[175px] lg:w-[200px] h-auto"
              />
            </Link>
            <div className="mt-4 md:mt-0 text-center md:flex-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif tracking-wide">
                $BODHI
              </h1>
              <p className="mt-1 sm:mt-2 text-base sm:text-lg font-light">
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
