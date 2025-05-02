"use client";
import { useEffect, useRef, useState } from "react";
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
  }, []);

  return (
    <section ref={containerRef}>
      <div className="my-12">
        <div className="flex sm:items-center sm:justify-center overflow-x-auto sm:overflow-x-visible">
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
      </div>

      <div className="items-center justify-center text-[#63588F] p-8">
        <p className="text-center text-xl ">
          Ils nous ont fait confiance — Leurs avis comptent pour nous. Ces retours nous permettent de nous améliorer et de vous offrir un service de qualité. S&apos;ils ont été satisfaits, pourquoi pas vous ?
        </p>
      </div> 
    </section>

  );
}
