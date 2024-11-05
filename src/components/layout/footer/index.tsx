import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#5C1919] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-lg mb-4">Contact Us</h3>
            <p className="text-sm">Zurich, Switzerland</p>
            <p className="text-sm">info@bodhifoundation.org</p>
          </div>
          <div>
            <h3 className="font-serif text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-[#D4AF37] transition-colors">
                Twitter
              </Link>
              <Link href="#" className="hover:text-[#D4AF37] transition-colors">
                Facebook
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Bodhi Foundation. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
