import { CheckCircle } from "lucide-react";

const Experience = () => {
  return (
    <section className="py-7">
      <div className="container">
        <div className="size-full lg:h-[500px] flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex-1 h-full flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-4">
            <div className="w-full lg:max-w-max p-4 lg:bg-primary rounded-lg flex flex-col lg:flex-row items-center gap-2">
              <div className="bg-foreground text-background p-2 inline-flex items-center gap-2 text-sm rounded-md">
                <p className="text-4xl text-primary font-semibold">25+</p>
                <span className="font-medium">
                  Years of <br /> Experience
                </span>
              </div>

              <div className="bg-foreground text-background p-2 inline-flex items-center gap-2 text-sm rounded-md">
                <p className="text-4xl text-primary font-semibold">378+</p>
                <span className="font-medium">
                  Project <br /> Complete
                </span>
              </div>

              <div className="bg-foreground text-background p-2 inline-flex items-center gap-2 text-sm rounded-md">
                <p className="text-4xl text-primary font-semibold">69+</p>
                <span className="font-medium">
                  Winning
                  <br /> Global Award
                </span>
              </div>
            </div>

            <div className="max-w-md p-4 bg-primary rounded-lg space-y-2">
              <p className="inline-flex items-center gap-2 text-xs sm:text-sm">
                <CheckCircle className="size-5" />
                <span className="font-medium">
                  Quality Control System, 100% Satisfaction Guarantee
                </span>
              </p>
              <p className="inline-flex items-center gap-2 text-xs sm:text-sm">
                <CheckCircle className="size-5" />
                <span className="font-medium">
                  Highly Proffesional Staff, Accurate Testing Processes
                </span>
              </p>
              <p className="inline-flex items-center gap-2 text-xs sm:text-sm">
                <CheckCircle className="size-5" />
                <span className="font-medium">
                  Unrivalled Workmanship, Proffesional and Qualified
                </span>
              </p>
            </div>
          </div>

          <div className="flex-1 h-full flex flex-col justify-center gap-4">
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-center lg:text-start">
              <span className="text-primary">25 Years</span> <br /> of
              Experience!
            </h3>

            <div className="space-y-4 text-sm sm:text-base sm:text-center lg:text-start">
              <p>
                We have a team of experienced professionals who have been in the
                industry for over 25 years. Our contractors have a wealth of
                knowledge and skills that they have acquired over the years,
                making them experts in their field.
              </p>

              <p>
                With 25 years of experience, our contractors have a deep
                understanding of industry standards and regulations. We ensure
                that all our projects comply with the latest safety and building
                codes, and that the final product meets or exceeds our
                client&apos;s expectations.
              </p>
            </div>

            <p className="text-sm sm:text-base sm:text-center lg:text-start">
              Henry Kurnia Adhi - Founder
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
