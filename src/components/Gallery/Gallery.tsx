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
  id?: string;
}

const Gallery = ({ images, id }: GalleryProps) => {
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
    // Vérifier la taille de l'écran pour ne pas appliquer GSAP sur mobile
    const isMobile = window.innerWidth <= 768; // Défini comme mobile si la largeur est inférieure ou égale à 768px

    if (!isMobile && imageRefs.current.length > 0) {
      // Animation d'apparition avec GSAP, seulement pour les écrans plus larges
      gsap.fromTo(
        imageRefs.current,
        { opacity: 0, y: 50, force3D: true },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          stagger: 0.1,
          ease: "power3.out",
          force3D: true,
        }
      );
    }
  }, [images]);

  return (
    <div id={`galerie-${id}`} >
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
                quality={70}
                width={800}
                height={800}
                loading="lazy"
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
    </div>
  );
};

export default Gallery;
