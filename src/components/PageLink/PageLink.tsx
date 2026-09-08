"use client";
import { useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface PageLinkProps {
  photo: StaticImageData;
  title: string;
  link: string;
  className?: string;
}

export default function PageLink({ photo, title, link, className = "" }: PageLinkProps) {
  const linkRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      linkRef.current,
      { opacity: 0, scale: 0.92 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: linkRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <Link
      href={link}
      ref={linkRef}
      rel="canonical"
      title={title}
      className={`group relative block overflow-hidden bg-blue-dark h-full w-full ${className}`}
    >
      <Image
        src={photo}
        alt={title}
        fill
        sizes="(min-width: 1024px) 25vw, 50vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-blue/85 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 p-4">
        <p className="text-custom-white text-xs tracking-[0.15em] uppercase">{title}</p>
      </div>
    </Link>
  );
}
