import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#5C1919]/5 py-12 md:py-20 lg:py-24" id="home">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#5C1919] mb-8">
                Spiritual Growth Through Digital Innovation
              </h2>
              <p className="text-xl sm:text-2xl text-gray-700 mb-10">
                Welcome to the Bodhi Foundation, where ancient wisdom meets
                modern technology in pursuit of global peace and spiritual
                awakening.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "lg" }),
                    "bg-[#D4AF37] text-[#5C1919] hover:bg-[#5C1919] hover:text-white text-lg"
                  )}
                >
                  DexScanner
                </Link>
                <Link
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "lg" }),
                    "bg-[#5C1919] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#5C1919] text-lg"
                  )}
                >
                  Discord
                </Link>
                <Link
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "lg" }),
                    "bg-[#D4AF37] text-[#5C1919] hover:bg-[#5C1919] hover:text-white text-lg"
                  )}
                >
                  Email
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 md:py-20 bg-white" id="about">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#5C1919] mb-8 text-left">
                    About Us
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-700 mb-8">
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
                    src="/b3.svg"
                    alt="About Us"
                    width={600}
                    height={600}
                    className="w-full max-w-[600px] animate-levitate"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is Bodhi Section */}
        <section className="py-12 md:py-20 bg-[#5C1919]/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="flex justify-center">
                  <Image
                    src="/b2.svg"
                    alt="What is Bodhi"
                    width={600}
                    height={600}
                    className="w-full max-w-[600px]"
                  />
                </div>
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#5C1919] mb-8">
                    What is Bodhi?
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-700">
                    In Buddhism, &ldquo;Bodhi&rdquo; represents awakening and
                    enlightenment - a profound understanding of reality&rsquo;s
                    true nature. Just as the Buddha achieved enlightenment under
                    the Bodhi tree, transcending ignorance and overcoming
                    attachment, our foundation seeks to guide others on this
                    transformative path. This token is presented by the Gaden
                    Phodrang Foundation of the Dalai Lama, established in 2015
                    by His Holiness the 14th Dalai Lama of Tibet, Tenzin Gyatso,
                    under Article 80 and following provisions of the Swiss Civil
                    Code. Headquartered in Zurich, Switzerland, the foundation
                    was created to uphold and support the tradition and role of
                    the Dalai Lama, particularly in relation to his religious
                    and spiritual responsibilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-12 md:py-20 bg-white" id="vision">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#5C1919] mb-10 text-center">
                The Vision
              </h2>
              <div className="grid md:grid-cols-3 gap-10">
                <div className="text-center">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#5C1919] mb-6">
                    Spiritual Growth
                  </h3>
                  <p className="text-lg sm:text-xl text-gray-700">
                    Fostering personal and collective spiritual development
                    through technology, guiding each individual toward their own
                    awakening
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#5C1919] mb-6">
                    Pursuit of Happiness
                  </h3>
                  <p className="text-lg sm:text-xl text-gray-700">
                    Enabling individuals to find true happiness by recognizing
                    the impermanent and interconnected nature of all things
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#5C1919] mb-6">
                    Universal Peace
                  </h3>
                  <p className="text-lg sm:text-xl text-gray-700">
                    Promoting harmony and understanding among all human beings
                    through wisdom and compassion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* End Goal Section */}
        <section className="py-12 md:py-20 bg-[#5C1919]/5" id="end-goal">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#5C1919] mb-8">
                The End Goal
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 mb-10">
                Our ultimate aim is to achieve Bodhi - the state of perfect
                wisdom and compassion that frees one from the cycle of samsara.
                Through the harmonious integration of spiritual traditions and
                technological innovation, we strive to create a world where
                every individual has the opportunity to transcend ignorance,
                overcome attachment, and contribute to global peace.
              </p>
              <Button className="bg-[#D4AF37] text-[#5C1919] hover:bg-[#5C1919] hover:text-white transition-colors text-lg py-6 px-8">
                Join Our Mission
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
