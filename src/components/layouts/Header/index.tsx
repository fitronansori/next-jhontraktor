import Logo from "@/components/common/Logo";
import NavLinks from "./NavLinks";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header>
      <div className="container h-16 md:h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Logo />

          <div className="hidden lg:block">
            <NavLinks
              className="flex items-center gap-8"
              classNameLink="font-medium"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
};
export default Header;
