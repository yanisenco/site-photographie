"use client";

import { useEffect, useState, useCallback } from "react";
import { fetchComments } from "@/utils/commentsService";
import CommentCard from "../CommentCard/CommentCard";
import useEmblaCarousel from "embla-carousel-react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function CommentCarrousel() {
  interface Review {
    text: string;
    author_name: string;
    profile_photo_url: string;
    rating: number;
  }

  const [reviewsTab, setReviewsTab] = useState<Review[]>([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center",skipSnaps: false, });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const getYourComments = async () => {
    const fetched = await fetchComments();
    setReviewsTab(fetched);
  };

  useEffect(() => {
    getYourComments();
  }, []);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative px-4 sm:px-12">
      <div className="mt-12">
        <div className="md:relative">
          {/* Embla actif uniquement en dessous de xl */}
          <div
            className="embla overflow-hidden 2xl:hidden"
            ref={emblaRef}
          >
            <div className="flex">
              {reviewsTab.map((review, index) => (
                <div
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.3333%] px-2"
                  key={index}
                >
                  <CommentCard
                    name={review.author_name}
                    comment={review.text}
                    rating={review.rating}
                    profile_photo_url={review.profile_photo_url}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mode XL : sans carrousel */}
          <div className="hidden 2xl:flex sm:items-center sm:justify-center overflow-x-auto sm:overflow-x-visible">
            {reviewsTab.map((review, index) => (
                <CommentCard
                  name={review.author_name}
                  comment={review.text}
                  rating={review.rating}
                  profile_photo_url={review.profile_photo_url}
                  key={index}
                />
            ))}
          </div>

          {/* Flèches (masquées en xl) */}
          <div className="hidden md:flex 2xl:hidden justify-between absolute top-1/2 left-0 right-0 px-4 -translate-y-1/2">
            <button
              onClick={scrollPrev}
              className="bg-custom-white dark:bg-blue-dark border border-blue/10 dark:border-custom-white/10 text-foreground p-2 rounded-full shadow"
              aria-label="Précédent"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={scrollNext}
              className="bg-custom-white dark:bg-blue-dark border border-blue/10 dark:border-custom-white/10 text-foreground p-2 rounded-full shadow"
              aria-label="Suivant"
            >
              <FaArrowRight />
            </button>
          </div>

          {/* Points (masqués en xl) */}
          <div className="hidden md:flex 2xl:hidden justify-center gap-2 mt-4">
            {reviewsTab.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === selectedIndex
                    ? "bg-orange"
                    : "bg-foreground/20"
                }`}
              />
            ))}
          </div>
        </div>


        {/* Voir plus */}
        <div className="flex justify-center mt-6">
          <a
            href="https://www.google.com/maps/place/Focus+%26+Lumi%C3%A8re/@47.281767,-2.224451,17z/data=!4m8!3m7!1s0x4805650c727b2f11:0x6eae1052bd1a2961!8m2!3d47.281767!4d-2.224451!9m1!1b1!16s%2Fg%2F11y8_q3v5b?entry=ttu&g_ep=EgoyMDI1MDUxMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-yellow hover:text-orange transition-colors gap-2 text-sm tracking-[0.1em] uppercase"
          >
            Voir plus d&apos;avis →
          </a>
        </div>
      </div>
    </section>
  );
}
