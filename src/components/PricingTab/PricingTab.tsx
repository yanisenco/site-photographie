"use client";
import { useState } from "react";
import Image from "next/image";
import photo1 from "@/images/photo-tarif-studio.webp";
import photo2 from "@/images/photo-tarif-exterieur.webp";
import photo3 from "@/images/photo-tarif-sportive.webp";

export default function PricingTab() {
  const [selected, setSelected] = useState(0); // Track the selected position (0, 1, or 2)

  // Function to handle the click event to move the indicator
  const handleSelect = (position: number) => {
    setSelected(position);
  };


  return (
    <div className="flex flex-col overflow-hidden">
      {/* Rotate Button */}
      <div className="flex justify-center z-10 items-center">
        {/* Container for the button */}
        <div className="relative flex w-fit h-12 rounded-full ">
          {/* Background to show 3 options */}
          <div className="flex w-full h-full justify-between items-center px-2">
            <button
              onClick={() => handleSelect(0)}
              className={`flex-1 h-full text-center font-semibold ${
                selected === 0 ? "text-white bg-[#ff6e40]" : " bg-transparent"
              } rounded-full transition-colors`}
            >
              Portrait Studio
            </button>
            <button
              onClick={() => handleSelect(1)}
              className={`flex-1 h-full text-center font-semibold ${
                selected === 1 ? "text-white bg-[#ff6e40]" : " bg-transparent"
              } rounded-full transition-colors`}
            >
              Portrait Extérieur
            </button>
            <button
              onClick={() => handleSelect(2)}
              className={`flex-1 h-full text-center font-semibold ${
                selected === 2 ? "text-white bg-[#ff6e40]" : " bg-transparent"
              } rounded-full transition-colors`}
            >
              Photo Sportive
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row">
        {/* Full Circle with Four Colored Quarters */}
        <div className="w-[0px] h-[20px] lg:w-[600px] lg:h-[600px]">
          <div
             className={`origin-center ${ selected === 0
              ? "rotate-0"
              : selected === 1
              ? "rotate-90"
              : selected === 2
              ? "rotate-180"
              : ""} relative hidden lg:block z-0 w-[1000px] h-[1000px] bottom-[-100px] left-[-500px] transition-transform duration-300 ease-out`}
          >
            {/* Top-right quarter */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 z-30">
              <Image
                src={photo1}
                alt={""}
                className="rounded-t-3xl"
                width={400}
                height={400}
              />
            </div>

            {/* Top-left quarter */}
            <div className="absolute top-0 left-0 w-1/2 h-1/2 -rotate-90 z-20">
              <Image
                src={photo2}
                alt={""}
                className="rounded-t-3xl"
                width={400}
                height={400}
              />
            </div>

            {/* Bottom-left quarter */}
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 -rotate-180 z-10 ">
              <Image
                src={photo3}
                alt={""}
                className="rounded-t-3xl"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
        <div className="mt-10 sm:m-auto mx-10 drop-shadow-lg z-40">
          <p className="text-4xl limelight mb-8 p-6 rounded-full">
            <b>2 photos :{""}</b> {selected === 0 ? "40€" : "35€"}
          </p>
          <p className="text-4xl limelight mb-8 p-6 rounded-full">
            <b>5 photos :{""}</b> {selected === 0 ? "75€" : "70€"}
          </p>
          <p className="text-4xl limelight p-6 rounded-full">
            <b>10 photos :{""}</b> {selected === 0 ? "130€" : "125€"}
          </p>
        </div>
      </div>
    </div>
  );
}
