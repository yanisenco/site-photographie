"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fetchComments } from "@/utils/commentsService";
import CommentCard from "../CommentCard/CommentCard";

export default function CommentCarrousel() {
  interface Review {
    text: string;
    author_name: string;
    profile_photo_url: string;
    rating: number;
  }
  const containerRef = useRef<HTMLDivElement>(null);
  const [reviewsTab, setReviewsTab] = useState<Review[]>([]);
  const getYourComments = async () => {
    setReviewsTab(await fetchComments());
  };

  useEffect(() => {
    getYourComments();
    console.log("reviewsTab");
    gsap.registerPlugin(ScrollTrigger);
    const container = containerRef.current;
    const content = container?.querySelector(".scroll-content");
  
      if (content) {
        const contentWidth = content.scrollWidth;
        console.log(contentWidth);
        // Animation du contenu horizontal avec changement d'opacité du background
        gsap.to(content, {
          x: () => -(contentWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: () => `+=${contentWidth}`,
            scrub: true,
            pin: true,
            onUpdate: (self) => {
              if (self) {
                // Vérifier que self n'est pas undefined
                const opacity = 0 + self.progress; // De 1 à 0 en fonction du scroll
                gsap.to(content, {
                  backgroundColor: `rgba(99, 88, 143, ${opacity})`, // Transition de couleur avec opacité
                });
              }
            },
          },
        });
      }
  }, []);

  return (
    <section ref={containerRef} className=" h-screen overflow-hidden">
      <div className="scroll-content flex w-[500vw] sm:w-[200vw]">
        {/* Panels avec classes identifiables */}
        <div className="h-screen flex sm:items-center sm:justify-center">
          {reviewsTab.map((review, index) => (
            <CommentCard
              key={index}
              name={review.author_name}
              comment={review.text}
              rating={review.rating}
              profile_photo_url={review.profile_photo_url}
            />
          ))}
        </div>
        <div className="h-screen flex items-center justify-center text-[#f5f0e1]">
          <p className="text-center text-xl">
            Ils nous ont fait confiance&nbsp;— Leurs avis comptent pour nous. Ces retours nous permettent de nous améliorer et de vous offrir un service de qualité. S&apos;ils ont été satisfaits, pourquoi pas vous ?
          </p>
        </div>
      </div>
    </section>
  );
}
