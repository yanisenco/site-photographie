interface CommentCardProps {
  name: string;
  comment: string;
  rating: number;
  profile_photo_url: string;
}

import Image from "next/image";
import { IoStar } from "react-icons/io5";

export default function CommentCard({
  name,
  comment,
  rating,
  profile_photo_url,
}: CommentCardProps) {
  return (
    <div className="flex flex-col h-full max-w-sm mx-auto bg-blue-dark border border-custom-white/10 p-8">
      <div className="flex gap-1 mb-6">
        {Array.from({ length: rating }).map((_, index) => (
          <IoStar key={index} className="w-3.5 h-3.5 text-yellow" />
        ))}
      </div>
      <blockquote className="font-serif italic text-custom-white/85 leading-relaxed mb-8 line-clamp-[8] flex-grow">
        &ldquo;{comment}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3 pt-6 border-t border-custom-white/10">
        <Image
          src={profile_photo_url}
          alt=""
          width={40}
          height={40}
          className="w-10 h-10 rounded-full object-cover"
        />
        <p className="text-custom-white/50 text-[11px] tracking-[0.2em] uppercase">{name}</p>
      </div>
    </div>
  );
}
