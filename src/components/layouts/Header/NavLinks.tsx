"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About Us", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Project", path: "/project" },
];

type NavLinksProps = {
  className?: string;
  classNameLink?: string;
};

const NavLinks = ({ className, classNameLink }: NavLinksProps) => {
  const pathname = usePathname();

  return (
    <nav className={cn("", className)}>
      {navItems.map((item) => (
        <Link
          key={item.id}
          href={item.path}
          className={cn(
            "hover:text-primary transition-colors duration-300",
            pathname === item.path && "text-primary",
            classNameLink
          )}>
          {item.name}
        </Link>
      ))}
    </nav>
  );
};
export default NavLinks;
