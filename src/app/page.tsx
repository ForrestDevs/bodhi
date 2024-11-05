import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Component() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-[#5C1919] text-white px-4 py-2">
        <div className="container mx-auto flex justify-between items-center">
          <select className="bg-transparent border-none text-sm focus:outline-none">
            <option value="en">ENGLISH</option>
            <option value="ti">TIBETAN</option>
          </select>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-white hover:text-gold-400">
              <span className="sr-only">Twitter</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Link>
            <Link href="#" className="text-white hover:text-gold-400">
              <span className="sr-only">Facebook</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-[#5C1919] text-white py-8 text-center border-t border-[#6c2020]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-wide">
            BODHI FOUNDATION
          </h1>
          <p className="mt-2 text-lg font-light">
            Awakening • Enlightenment • Peace
          </p>
        </div>
      </header>

      {/* Navigation */}
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
                // onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#5C1919]"
              >
                {/* {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <MenuIcon className="h-6 w-6" />
                )} */}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {/* {isMenuOpen && (
          <div className="md:hidden bg-[#D4AF37] border-t border-[#5C1919]/20">
            <div className="container mx-auto px-4 py-2">
              <div className="flex flex-col space-y-2">
                <Link
                  href="/"
                  className="py-2 font-medium hover:text-white transition-colors"
                >
                  HOME
                </Link>
                <Link
                  href="/about"
                  className="py-2 font-medium hover:text-white transition-colors"
                >
                  ABOUT US
                </Link>
                <Link
                  href="/vision"
                  className="py-2 font-medium hover:text-white transition-colors"
                >
                  THE VISION
                </Link>
                <Link
                  href="/goal"
                  className="py-2 font-medium hover:text-white transition-colors"
                >
                  THE END GOAL
                </Link>
              </div>
            </div>
          </div>
        )} */}
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#5C1919]/5 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif text-[#5C1919] mb-6">
                Spiritual Growth Through Digital Innovation
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Welcome to the Bodhi Foundation, where ancient wisdom meets
                modern technology in pursuit of global peace and spiritual
                awakening.
              </p>
              <Button className="bg-[#D4AF37] text-[#5C1919] hover:bg-[#5C1919] hover:text-white transition-colors">
                Learn More
              </Button>
              <div className="mt-8 flex justify-center space-x-4">
                <Link
                  href="#"
                  className="text-[#5C1919] hover:text-[#D4AF37] transition-colors"
                >
                  DexScanner
                </Link>
                <Link
                  href="#"
                  className="text-[#5C1919] hover:text-[#D4AF37] transition-colors"
                >
                  Discord
                </Link>
                <Link
                  href="#"
                  className="text-[#5C1919] hover:text-[#D4AF37] transition-colors"
                >
                  Telegram
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#5C1919] mb-6 text-left">
                    About Us
                  </h2>
                  <p className="text-gray-700 mb-6">
                    This token is presented by the Gaden Phodrang Foundation of
                    the Dalai Lama, established in 2015 by His Holiness the 14th
                    Dalai Lama of Tibet, Tenzin Gyatso, under Article 80 and
                    following provisions of the Swiss Civil Code. Headquartered
                    in Zurich, Switzerland, the foundation was created to uphold
                    and support the tradition and role of the Dalai Lama,
                    particularly in relation to his religious and spiritual
                    responsibilities.
                  </p>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/b1.svg"
                    alt="About Us"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 bg-[#5C1919]/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-serif text-[#5C1919] mb-6 text-center">
                The Vision
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="font-serif text-xl text-[#5C1919] mb-4">
                    Spiritual Growth
                  </h3>
                  <p className="text-gray-700">
                    Fostering personal and collective spiritual development
                    through technology
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-xl text-[#5C1919] mb-4">
                    Pursuit of Happiness
                  </h3>
                  <p className="text-gray-700">
                    Enabling individuals to find true happiness through mindful
                    practices
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-xl text-[#5C1919] mb-4">
                    Universal Peace
                  </h3>
                  <p className="text-gray-700">
                    Promoting harmony and understanding among all human beings
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* End Goal Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-serif text-[#5C1919] mb-6">
                The End Goal
              </h2>
              <p className="text-gray-700 mb-8">
                Our ultimate aim is to achieve Bodhi - the state of perfect
                wisdom and compassion - through the harmonious integration of
                spiritual traditions and technological innovation. We strive to
                create a world where every individual has the opportunity to
                pursue enlightenment and contribute to global peace.
              </p>
              <Button className="bg-[#D4AF37] text-[#5C1919] hover:bg-[#5C1919] hover:text-white transition-colors">
                Join Our Mission
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
                <Link
                  href="#"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Twitter
                </Link>
                <Link
                  href="#"
                  className="hover:text-[#D4AF37] transition-colors"
                >
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
    </div>
  );
}
