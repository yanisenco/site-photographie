"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ImageGallery() {
  interface ImageType {
    public_id: string;
    secure_url: string;
  }

  const [images, setImages] = useState<ImageType[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/getImages");
        if (response.ok) {
          const data = await response.json();
          setImages(data.images);
        } else {
          console.error(
            "Erreur lors de la récupération des images :",
            response.statusText
          );
        }
      } catch (error) {
        console.error("Erreur :", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((image) => (
        <Image
          key={image.public_id}
          src={image.secure_url}
          alt={image.public_id}
          className="w-full h-auto"
        />
      ))}
    </div>
  );
}
