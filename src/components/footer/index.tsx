import { cn } from "@/lib/utils";
import React from "react";

function Footer() {
  return (
    <div className="relative my-52 mx-12 pb-52 flex flex-col md:flex-row hide-div">
       <div className="absolute -top-36 left-10 w-[100px]">
       <img src={'images/category/shape.svg'} />
       </div>
      <div className="flex flex-col flex-1">
        <img
          src={"images/single-logo.svg"}
          alt="single logo"
          className="w-[200px]"
        />

        <div>
          <p className="w-[80%] text-[#FED0BB] pt-4">We believe in equal opportunities and equality of outcome for all women </p>
          <div className="flex flex-row">
            <p className={cn(" font-bold text-[#FED0BB] pr-2")}>Email:</p>
            <p className={cn(" font-bold text-[#FED0BB]")}>
              adaorambj@gmail.com
            </p>
          </div>
          <div className="flex flex-row">
            <p className={cn(" font-bold text-[#FED0BB]")}>Phone:</p>
            <p className={cn(" font-bold text-[#FED0BB]")}>
              07939663606
            </p>
          </div>
          {/* <div className="flex flex-row">
            <p className={cn("text-xl font-bold text-[#FED0BB]")}>
              Registered Business:
            </p>
            <p className={cn("text-2xl font-bold text-[#FED0BB]")}>
              adaorambj@gmail.com
            </p>
          </div> */}
        </div>
      </div>

      <div className="flex flex-col items-start flex-1">
        <p className={cn("text-3xl font-bold text-[#FED0BB] pb-4")}>Sign Up for Our NewsLetter</p>
        <div className="flex flex-col">
          <input type="text" placeholder="Email" name="email" className="p-4  flex flex-1 shadow-md rounded-sm" />
          <button className="text-[#540910] bg-[#FED0BB] p-3 my-4 rounded-sm shadow-2xl">
            Sign Up
          </button>
        </div>
      </div>
      <div className="absolute bottom-24 right-5 w-[100px]">
       <img src={'images/category/shape.svg'} />
       </div>
    </div>
  );
}

export default Footer;
