import { useEffect, useState } from "react";
import {X, Menu }from 'lucide-react'
import { cn } from "../utils/utils";
const navItem = [
  { name: "Home", href: "#hero" },
  { name: "about", href: "#about" },
  { name: "Skills", href: "#Skills" },
  { name: "Projects", href: "#Projects" },
  { name: "Contact", href: "#Contact" },
];
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isopen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md shandow-xs"
          : "py-5",
      )}
    >
      <div className="container flex items-center justify-between ">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">CodeXKrish</span>{" "}
            Portfolio
          </span>
        </a>
        {/* deskstop version */}
        <div className="hidden md:flex space-x-8">
          {navItem.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-color duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
        {/* mobile version */}
        <button onClick={() => setIsOpen((prev)=> !prev)} className="md:hidden p-2 text-foreground z-50" aria-label={isopen ? 'close menu' : 'open menu'}>
             {isopen ? <X size={24}/> : <Menu size={24} />}</button>
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isopen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none",
          )}>
          <div className="flex flex-col space-y-8 text-xl">
            {navItem.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-color duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
