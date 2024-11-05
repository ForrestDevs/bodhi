import Link from "next/link";
import React from "react";
import ContractAddress from "../contract-address";

export default function Footer() {
  return (
    <footer className="bg-[#5C1919] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <Link
            href="#home"
            className="hover:text-[#D4AF37] transition-colors text-sm"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="hover:text-[#D4AF37] transition-colors text-sm"
          >
            About
          </Link>
          <Link
            href="#vision"
            className="hover:text-[#D4AF37] transition-colors text-sm"
          >
            Vision
          </Link>
          <Link
            href="#end-goal"
            className="hover:text-[#D4AF37] transition-colors text-sm"
          >
            End Goal
          </Link>
        </div>
        <div className="flex justify-center space-x-4 mb-8">
          <Link
            href="#"
            className="hover:text-[#D4AF37] transition-colors text-sm"
          >
            Discord
          </Link>
          <Link
            href="#"
            className="hover:text-[#D4AF37] transition-colors text-sm"
          >
            Email
          </Link>
        </div>
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} $BODHI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
