interface CommentCardProps {
  name: string;
  comment: string;
  rating: number;
  profile_photo_url: string;
}

import Image from "next/image";

export default function CommentCard({
  name,
  comment,
  rating,
  profile_photo_url,
}: CommentCardProps) {
  return (
    <div className="flex flex-col max-w-sm mx-4 my-auto min-w-64">
      <div className=" max-h-96 px-4 py-12 transition-shadow duration-300 shadow-lg dark:shadow-[0_4px_10px_#ffc13b] rounded-t-lg sm:px-8 md:px-12 bg-custom-white">
        <div className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="currentColor"
            className="w-8 h-8 text-violet-600"
          >
            <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
            <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
          </svg>
          <p className="line-clamp-[8] sm:w-48">{comment}</p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="currentColor"
            className="absolute right-0 w-8 h-8 text-violet-600"
          >
            <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
            <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
          </svg>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-[#63588F] text-[#f5f0e1]">
        <Image
          src={profile_photo_url}
          alt=""
          width={50}
          height={50}
          className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full "
        />
        <p className="text-xl font-semibold leading-tight">{name}</p>
        <div className="text-sm uppercase flex items-center">
          {Array.from({ length: rating }).map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="#fbbf24"
              className="w-6 h-6 text-yellow-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
}
