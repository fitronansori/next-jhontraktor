import { Button } from "@/components/ui/button";
import { CircleArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section>
      <div className="relative h-[calc(100vh-64px)] lg:h-[calc(100vh-80px)]">
        <div className="container text-center pt-10 flex flex-col items-center justify-center gap-4 sm:gap-6">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold">
            We Prepare For The <span className="text-primary">Future</span>
          </h2>

          <p className="text-sm sm:text-base w-full max-w-lg">
            We provide the best architectural design, contruction, and building
            maintance services for you.
          </p>

          <div className="flex items-center gap-4">
            <Button asChild>
              <Link href="/services">
                Our Services <CircleArrowRight className="size-5" />
              </Link>
            </Button>

            <Button variant={"ghost"} asChild>
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
        <Image
          src={"/assets/hero.jpg"}
          alt="unsplah-image"
          width={1920}
          height={1282}
          className="size-full absolute left-0 top-0 object-cover -z-20 brightness-50"
        />
      </div>
    </section>
  );
};
export default Hero;
