"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fetchComments } from "@/utils/commentsService";

gsap.registerPlugin(ScrollTrigger);



export default function CommentCarrousel () {
  const containerRef = useRef<HTMLDivElement>(null);
  interface Review {
    text: string;
    author_name: string;
    profile_photo_url:  string;
    rating: number;
  }
  const [reviewsTab, setReviewsTab] = useState<Review[]>([]);
  const getYourComments = async () => {
    setReviewsTab(await fetchComments());
  };

  useEffect(() => {
    getYourComments();
    const container = containerRef.current;
    const content = container?.querySelector(".scroll-content");

    if (container && content) {
      const contentWidth = content.scrollWidth;

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
            if (self) { // Vérifier que self n'est pas undefined
              // Calcul de l'opacité en fonction du scroll
              const opacity = 0 + self.progress; // De 1 à 0 en fonction du scroll
              gsap.to(content, {
                backgroundColor: `rgba(255, 211, 182, ${opacity})`, // Transition de couleur avec opacité
              });
            }
          },
        },
      });
    }
  }, []);

  console.log(reviewsTab);

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden">
      <div className="scroll-content flex w-[300vw]">
        {/* Panels avec classes identifiables */}
        <div className="w-screen h-screen flex items-center justify-center text-4xl font-bold">
          {reviewsTab.map((review) => ( review.text ))}
        </div>
        <div className="w-screen h-screen flex items-center justify-center text-4xl font-bold">
          Panel 2
        </div>
        <div className="w-screen h-screen flex items-center justify-center text-4xl font-bold">
          Panel 3
        </div>
      </div>
    </section>
  );
}
