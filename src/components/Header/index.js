"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import "./header.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useScrollPosition from "./hooks/useScrollPosition";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MenuIcon, X, Linkedin, Instagram } from "lucide-react";
 
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Instrument_Sans } from "next/font/google";
const font = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

function Navbar() {
  const menuLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/shop", label: "Shop" },
    { path: "/donate", label: "Donate" },
  ];

  const container = useRef();
  const tl = useRef();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  gsap.registerPlugin(useGSAP);
  const { showBar } = useScrollPosition();
  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 75 });

      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%,100% 100%, 0% 100%)",

          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: container }
  );
  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);
  return (
    <nav className="w-full main-navbar">
      <div className="menu-container w-full" ref={container}>
        <div className={showBar ? "menu-bar animate" : "menu-bar"}>
          <div className="flex  flex-grow items-center justify-center w-full ">
            <div className="flex  flex-row items-center justify-between pr-2 menu-container-bar w-full ">
              <div className="menu-logo">
                <Link href="/">
                  <Image
                    src={"/images/single-logo.svg"}
                    width={200}
                    height={60}
                    alt="image"
                  />
                </Link>
              </div>
              <div className="phoneNumber">
                <ul className="flex flex-row items-center justify-between">
                  <a
                  href='/'
                    className={cn(
                      "text-slate-200 transition cursor-pointer hover:text-violet-300 p-3 mx-4 font-md font-bold",
                      font.className
                    )}
                  >
                    Home
                  </a>
                  <a
                    href='/about'
                    className={cn(
                      "text-slate-200 transition cursor-pointer hover:text-violet-600 p-3 mx-4 font-md",
                      font.className
                    )}
                  >
                    About
                  </a>
                  <a
                    href='/contact'
                    className={cn(
                      "text-slate-200 transition cursor-pointer hover:text-violet-300 p-3 mx-4 font-md",
                      font.className
                    )}
                  >
                    Contact Us
                  </a>
                  <a
                    href='/shop'
                    className={cn(
                      "text-slate-200 transition cursor-pointer hover:text-violet-300 p-3 mx-4 font-md",
                      font.className
                    )}
                  >
                    Shop
                  </a>
                  <a
                    href='/donate'
                    className={cn(
                      "text-slate-200 transition cursor-pointer hover:text-violet-300 p-3 mx-4 font-md",
                      font.className
                    )}
                  >
                    Donate
                  </a>
                </ul>
              </div>
              <div
                className="menu-open  block md:hidden cursor-pointer hover:opacity-80"
                onClick={toggleMenu}
              >
                <MenuIcon color={"#fff"} />
              </div>
              <div className="hidden md:flex">
                <Button
                  variant={"workaloonLight"}
                  className={cn("font-bold text-md", font.className)}
                  size={"lg"}
                  onClick={() => {
                    router.push("/signup");
                  }}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-overlay">
          <div className="menu-overlay-bar">
            <div className="menu-logo">
            <Link href="/">
                  <Image
                    src={"/images/single-logo.svg"}
                    width={200}
                    height={60}
                    alt="image"
                  />
                </Link>
            </div>
            <div
              className="relative pr-4 menu-open cursor-pointer hover:opacity-80 "
              onClick={toggleMenu}
            >
              <X color="#fff" className="relative right-10 top-0" />
            </div>
          </div>

          <div className="menu-copy">
            <div className="menu-links">
              {menuLinks.map((link, idx) => {
                return (
                  <div className="menu-link-item" key={idx}>
                    <div className="menu-link-item-holder">
                      <Link
                        href={link.path}
                        className="menu-link text-white"
                        onClick={toggleMenu}
                      >
                        {link.label}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="menu-info">
              <div className="menu-info-col flex-row">
                {/* <a href="#">X &#8599;</a> */}
                <a
                  className="pr-4"
                  href="https://github.com/George5555ish"
                  target={"_blank"}
                >
                  <Instagram color="violet" />
                </a>
                <a
                  href="https://www.linkedin.com/in/george-mbajiaku-8747b2ab/"
                  target={"_blank"}
                >
                  <Linkedin color="violet" />
                </a>
              </div>
              {/* <div className="menu-info-col">
                <p>35a Darnley Rd, Gravesend DA11 0SD</p>
                <p>info@pb1xbarbers.com</p>
                <p>07300892028</p>
              </div> */}
            </div>
          </div>
          <div className="menu-preview">{/* <p>View Showreel</p> */}</div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
