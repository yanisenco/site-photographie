"use client";
import React, { useEffect, useRef } from "react";
import "./pagelink.css";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface PageLinkProps {
  photo: StaticImageData;
  title: string;
  color: string;
  link: string;
}

export default function PageLink({ photo, title, color, link }: PageLinkProps) {
  const linkRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      linkRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: linkRef.current,
          start: "top 90%", // Démarre quand le composant entre dans la vue
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <Link href={link} ref={linkRef} rel="canonical">
      <div className="card min-h-fit min-w-fit">
        <Image src={photo} alt={title} className="pic" />
        <p className="text-6xl sm:text-[4vw]">{title}</p>
        <button className={`${color}`}></button>
      </div>
    </Link>
  );
}
