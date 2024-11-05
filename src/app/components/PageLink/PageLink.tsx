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
}

export default function PageLink({ photo, title, color }: PageLinkProps) {
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
    <Link href="/service" className={`pageLink rounded ${color}`} ref={linkRef}>
      <div className="titleSection">
        <p className="title">{title}</p>
      </div>
      <div className="imageSection">
        <Image className="picture" src={photo} alt="Portrait icon" />
      </div>
    </Link>
  );
}
