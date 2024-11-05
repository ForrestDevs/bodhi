import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Component() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white">
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
    </div>
  );
}
