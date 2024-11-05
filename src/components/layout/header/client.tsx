"use client";

import { X } from "lucide-react";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function HeaderClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="bg-[#D4AF37] text-[#5C1919]">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center">
            <div className="hidden md:flex space-x-8 py-4">
              <Link
                href="/"
                className="font-medium hover:text-white transition-colors"
              >
                HOME
              </Link>
              <Link
                href="/about"
                className="font-medium hover:text-white transition-colors"
              >
                ABOUT US
              </Link>
              <Link
                href="/vision"
                className="font-medium hover:text-white transition-colors"
              >
                THE VISION
              </Link>
              <Link
                href="/goal"
                className="font-medium hover:text-white transition-colors"
              >
                THE END GOAL
              </Link>
            </div>
            <div className="md:hidden flex items-center py-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#5C1919]"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <MenuIcon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#D4AF37] border-t border-[#5C1919]/20">
            <div className="container mx-auto px-4 py-2">
              <div className="flex flex-col space-y-2">
                <Link
                  href="#home"
                  className="py-2 font-medium hover:text-white transition-colors"
                >
                  HOME
                </Link>
                <Link
                  href="#about"
                  className="py-2 font-medium hover:text-white transition-colors"
                >
                  ABOUT US
                </Link>
                <Link
                  href="#vision"
                  className="py-2 font-medium hover:text-white transition-colors"
                >
                  THE VISION
                </Link>
                <Link
                  href="#end-goal"
                  className="py-2 font-medium hover:text-white transition-colors"
                >
                  THE END GOAL
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
