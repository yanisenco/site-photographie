"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Masonry from "react-masonry-css";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { gsap } from "gsap";
import styles from "./gallery.module.css";

interface Image {
  src: string;
  alt: string;
}

interface GalleryProps {
  images: Image[];
}

const Gallery = ({ images }: GalleryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRefs = useRef<HTMLDivElement[]>([]); // Array of refs for each image

  const openCarousel = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeCarousel = () => {
    setIsOpen(false);
  };

  // Préparation des images pour le carrousel
  const galleryImages = images.map((image) => ({
    original: image.src,
    thumbnail: image.src,
    description: image.alt,
  }));

  // Configuration de la grille Masonry
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  useEffect(() => {
    // Animation d'apparition avec GSAP
    if (imageRefs.current.length > 0) {
      gsap.fromTo(
        imageRefs.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    }
  }, [images]);

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.myMasonryGrid}
        columnClassName={styles.myMasonryGridColumn}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={styles.imageWrapper}
            onClick={() => openCarousel(index)}
            ref={(el) => {
              if (el) imageRefs.current[index] = el;
            }} // Assign ref to each image
          >
            <Image
              src={image.src}
              alt={image.alt}
              className={styles.image}
              layout="responsive"
              objectFit="cover"
              quality={80}
              width={800}
              height={800}
            />
          </div>
        ))}
      </Masonry>

      {/* Carrousel plein écran */}
      {isOpen && (
        <div className={styles.overlay}>
          <ImageGallery
            items={galleryImages}
            startIndex={currentIndex}
            showThumbnails={false}
            showFullscreenButton={true}
            showPlayButton={false}
            onScreenChange={(isFullscreen: boolean) =>
              !isFullscreen && closeCarousel()
            }
          />
          <button className={styles.closeButton} onClick={closeCarousel}>
            ✕
          </button>
        </div>
      )}
    </>
  );
};

export default Gallery;
