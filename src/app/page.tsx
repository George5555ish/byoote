"use client";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { useEffect, useRef, useState } from "react";
import { Edu_QLD_Beginner, Manrope } from "next/font/google";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { Linkedin, Facebook, Instagram } from "lucide-react";
import Footer from "@/components/footer";
const platpyi = Edu_QLD_Beginner({ subsets: ["latin"], weight: "400" });
const manrope = Manrope({ subsets: ["latin"], weight: ["400", "600", "800"] });

interface ILatestNews {
  title: string;
  img_url: string;
  description: string;
}
export default function Home() {
  const navRef = useRef(null);
  const digitRef1 = useRef(null);
  const digitRef2 = useRef(null);
  const digitRef3 = useRef(null);
  const headerH1Ref = useRef(null);

  const [latestNews, setLatestNews] = useState<ILatestNews[]>([
    {
      title: "Female Robotics Team wins award",
      img_url: "images/loader5.jpeg",
      description: "Female robots Team wins award",
    },
    {
      title: "Female Robotics Team wins award",
      img_url: "images/loader5.jpeg",
      description: "Female robots Team wins award",
    },
    {
      title: "Female Robotics Team wins award",
      img_url: "images/loader5.jpeg",
      description: "Female robots Team wins award",
    },
  ]);
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      gsap.set(navRef.current, { y: -150 });
      gsap.set(".website-content", {
        display: "none",
      });
      gsap.set(".hide-div", {
        display: "none",
      });
      gsap.set(".socials > *", { x: 100 });
      gsap.set(".main-content", {
        opacity: 0,
      });
      gsap.set(".main-navbar", {
        opacity: 0,
      });
      const splitTextToSpans = (selector: any) => {
        if (selector) {
          var text = selector.innerText;
          var splitText = text
            .split("")
            .map((char: string, idx:number) => `<span key=${idx}>${char}</span>`)
            .join("");
          selector.innerHTML = splitText;
        }
      };

      splitTextToSpans(headerH1Ref.current);

      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 10; j++) {
          const div = document.createElement("div");
          div.className = "num";
          div.textContent = `${j}`;
          if (digitRef3.current) {
            digitRef3.current!.appendChild(div);
          }
        }
      }

      const finalDigit = document.createElement("div");
      finalDigit.className = "num";
      finalDigit.textContent = "0";
      digitRef3.current!.appendChild(finalDigit);

      const animate = (digit, duration, delay = 1) => {
        const numHeight = digit.clientHeight + 0.5 * digit.clientHeight;
        // console.log(numHeight)
        const totalDistance =
          (digit.querySelectorAll(".num").length - 1) * numHeight;
        gsap.to(digit, {
          y: -totalDistance,
          duration,
          delay: delay,
          ease: "power2.inOut",
        });
      };
      animate(digitRef3.current, 5);
      animate(digitRef2.current, 6);
      animate(digitRef1.current, 2, 5);

      gsap.to(".progress-bar", {
        width: "30%",
        duration: 2,
        ease: "power4.inOut",
        delay: 7,
      });

      gsap.to(".progress-bar", {
        width: "100%",
        opacity: 0,
        duration: 2,
        ease: "power3.out",
        delay: 8.5,
        onComplete: () => {
          gsap.set(".pre-loader", {
            display: "none",
          });
        },
      });

      gsap.to(".hero-imgs > img", {
        clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
        duration: 0.75,
        ease: "power4.inOut",
        stagger: 0.25,
        delay: 8.7,
      });

      gsap.to(".hero", {
        duration: 3,
        ease: "power4.inOut",
        scale: 1.25,
        delay: 8.5,
      });
      gsap.to(".hero", {
        duration: 1,
        ease: "power4.inOut",
        opacity: 0,
        y: -10,
        delay: 11,
        onComplete: () => {
          setTimeout(() => {
            gsap.set(".hero-imgs", {
              display: "none",
            });
            gsap.set(".main-content", {
              display: "block",
              overflowX: "hidden",
            });
            gsap.set(".hide-div", {
              display: "flex",
            });
            gsap.set(".hero", {
              display: "none",
            });
          }),
            1000;
        },
      });
      gsap.to(".main-content", {
        duration: 2,
        ease: "power4.inOut",
        opacity: 1,
        scale: 1.15,
        y: 10,
        paddingTop: 20,
        delay: 12,
      });
      gsap.to(navRef.current, {
        duration: 1,
        ease: "power3.inOut",
        delay: 13,
        y: 50,
      });
      gsap.to(".socials > *", {
        x: -50,
        duration: 0.75,
        ease: "power4.inOut",
        stagger: 0.25,
        delay: 13,
      });
      gsap.to(".main-navbar", {
        opacity: 1,
        duration: 2,
        ease: "power4.inOut",
        stagger: 0.25,
        delay: 14,
      });
      gsap.to("h1 span", {
        top: "0px",
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
        delay: 14,
      });

      gsap.to(".site-info p", {
        top: "0px",
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
        delay: 13,
      });
    }
  }, []);
  return (
    <div className="hero-container w-full h-full">
      <section className="hero">
        <div className="pre-loader">
          <p className={cn("block", platpyi.className)}>
            <img
              src={"images/single-logo.svg"}
              alt="single logo"
              className="w-[100px]"
            />
          </p>

          <div className={cn("counter", platpyi.className)}>
            <div className="digit-1" ref={digitRef1}>
              <div className="num">0</div>
              <div className="num offset">1</div>
            </div>
            <div className="digit-2" ref={digitRef2}>
              <div className="num">0</div>
              <div className="num offset">1</div>
              <div className="num">2</div>
              <div className="num">3</div>
              <div className="num">4</div>
              <div className="num">5</div>
              <div className="num">6</div>
              <div className="num">7</div>
              <div className="num">8</div>
              <div className="num">9</div>
              <div className="num">0</div>
            </div>
            <div className="digit-3" ref={digitRef3}>
              <div className="num">0</div>
              <div className="num">1</div>
              <div className="num">2</div>
              <div className="num">3</div>
              <div className="num">4</div>
              <div className="num">5</div>
              <div className="num">6</div>
              <div className="num">7</div>
              <div className="num">8</div>
              <div className="num">9</div>
            </div>
            <div className="digit-4">%</div>
          </div>

          <div className="progress-bar"></div>
        </div>

        <div className="hero-imgs">
          <img
            src="images/loader6.jpg"
            alt="loader imgs"
            className="landing-img"
          />
          <img
            src="images/loader5.jpeg"
            alt="loader imgs"
            className="landing-img"
          />
          <img
            src="images/loader1.jpg"
            alt="loader imgs"
            className="landing-img"
          />
          <img
            src="images/loader2.jpg"
            alt="loader imgs"
            className="landing-img"
          />
          <img
            src="images/loader3.jpg"
            alt="loader imgs"
            className="landing-img"
          />
          <img
            src="images/loader6.jpg"
            alt="loader imgs"
            className="landing-img"
          />
          <img
            src="images/loader5.jpeg"
            alt="loader imgs"
            className="landing-img"
          />
        </div>

        <div className="website-content">
          <nav className="landing-nav" ref={navRef}>
            <div className="landing-nav-inner">
              <div className="logo">
                <Image
                  src="/images/logo-lg.png"
                  alt="logo"
                  className="cursor-pointer"
                  width={80}
                  height={120}
                />
              </div>

              <div className="menu">
                <p>Menu</p>
              </div>
            </div>
          </nav>
        </div>
      </section>

      <div className="max-w-[100vw] h-[100vh] main-content">
        <div className="main-cnt-header">
          <h1
            ref={headerH1Ref}
            className={cn(
              "text-2xl md:text-9xl font-bold text-[#FED0BB]",
              platpyi.className
            )}
          >
            BYOOTE
          </h1>
          <div className="site-info text-[#FED0BB]">
            <p>Changing the world, one woman at a time</p>
          </div>
          <div className="socials">
            <div className="social">
              <Linkedin />
            </div>
            <div className="social">
              <Instagram />
            </div>{" "}
            <div className="social">
              <Facebook />
            </div>
          </div>
        </div>

        <div className="main-content-img-container">
          <img
            src="images/loader5.jpeg"
            alt="loader imgs"
            className="main-content-img"
          />
        </div>
      </div>
      <div className="flex justify-center w-full bg-[#FED0BB]">
           <div className="flex flex-col max-w-[1200px] p-12 md:p-24 py-52 latest-news hide-div">
        <p
          className={cn(
            "text-7xl font-bold py-7 text-[#540910]",
            platpyi.className
          )}
        >
          Latest News
        </p>
        <div className="flex flex-col items-center md:flex-row">
          {latestNews.map((news, idx) => (
            <div key={idx} className="m-4 p-2 rounded-sm shadow-2xl cursor-pointer bg-[#fff] w-full">
              <img src={news.img_url} alt="news img" className="rounded-sm" />
              <p
                className={cn(
                  "text-2xl font-bold text-slate-400  pt-2",
                  platpyi.className
                )}
              >
                {news.title}
              </p>
              <p
                className={cn(
                  "text-xl font-bold text-[#000] ",
                  manrope.className
                )}
              >
                {news.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      </div>
   

      <div className="flex flex-col items-center my-20 hide-div">
        {/* <div className="border border-sky-200 w-full mb-4" /> */}
        <p
          className={cn(
            "text-2xl font-bold text-[#FED0BB] text-center ",
            manrope.className
          )}
        >
          I am no bird; and no net ensnares me; I am a free human being with
          an independent will.  
        </p>

        <p
          className={cn(
            "text-2xl font-bold text-[#FED0BB] text-center ",
            platpyi.className
          )}
        >
          - Charlotte Bronte, Jane Eyre -
        </p>
        {/* <div className="border border-sky-200 w-full mt-4" /> */}
      </div>

      <div className="flex flex-col md:flex-row items-center bg-[#FED0BB]  hide-div">
        <div className="flex flex-1 w-[50%] flex-col items-center justify-center p-7">
          <p
            className={cn(
              "text-4xl font-bold text-[#540910] p-3 text-center",
              platpyi.className
            )}
          >
            We Empower women to be the best versions of themselves.
          </p>
        </div>
        <div className="flex flex-1 flex-col w-[50%]">
          <img src={"images/loader3.jpg"} alt="news img" className=" " />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center text-[#FED0BB] hide-div">
        <div className="flex flex-1 flex-col w-[50%]">
          <img src={"images/loader2.jpg"} alt="news img" className="w-[100%]" />
        </div>
        <div className="flex flex-1 flex-col  w-[50%] items-center justify-center p-7">
          <p
            className={cn(
              "text-4xl font-bold text-[#FED0BB] bg-[#540910] p-3 text-center",
              platpyi.className
            )}
          >
           Carrying prestige wherever we seem fit.
          </p>
        </div>
      </div>
      <div className="flex flex-col p-20 latest-news bg-[#FED0BB] text-[#540910] hide-div">
        <p
          className={cn(
            "text-7xl font-bold py-7 text-[#540910]",
            platpyi.className
          )}
        >
          Upcoming Events
        </p>
        <div className="flex flex-col items-center w-full">
          {latestNews.map((news, idx) => (
            <div key={idx} className="m-4 p-2 rounded-sm shadow-xl bg-white cursor-pointer flex flex-col md:flex-row items-start w-full transition-all hover:mb-4">
              <div className="w-full md:w-[200px]">
                <img src={news.img_url} alt="news img" className="rounded-sm" />
              </div>
              <div className="flex flex-1 flex-col items-start pl-2">
                <p
                  className={cn(
                    "text-2xl font-bold text-slate-400",
                    platpyi.className
                  )}
                >
                  {news.title}
                </p>
                <p>{news.description}</p>
                <p>{new Date().toDateString()}</p>
           
              </div>
              <button>Register</button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row bg-blue-600 hide-div">
        <div className="flex flex-1 flex-col items-center justify-center p-7">
          <p
            className={cn(
              "text-6xl font-bold text-[#FED0BB]",
              platpyi.className
            )}
          >
            Join Us
          </p>
          <p
            className={cn(
              "text-4xl font-bold text-blue-300 p-3 text-center",
              platpyi.className
            )}
          >
            Empower Our Women and Girls
          </p>
          <button className="text-[#FED0BB] bg-[#540910] p-3 my-4 rounded-sm shadow-2xl">
            Donate Now
          </button>
        </div>
        <div className="flex flex-1 flex-col">
          <img src={"images/loader5.jpeg"} alt="news img" className=" " />
        </div>
      </div>
      <Footer />
    </div>
  );
}
