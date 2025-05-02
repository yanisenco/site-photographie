"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Masonry from "react-masonry-css";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { gsap } from "gsap";
import styles from "./gallery.module.css";
import SelectionnableImages from "../SelectionnableImages/SelectionnableImages"; // Adjust the path as needed
import SendingSelection from "../SendingSelection/SendingSelection";

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
  const imageRefs = useRef<HTMLDivElement[]>([]); 
  const galleryRef = useRef<ImageGallery>(null);
  const checkboxRef = useRef<HTMLInputElement>(null);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [, setIsFullscreen] = useState(false);

  const handleScreenChange = (isFs: boolean) => {
    setIsFullscreen(isFs);
    if (!isFs) closeCarousel();
  };

  const handleCheckboxChange = (src: string, checked: boolean) => {
    if (checked) {
      setSelectedImages((prev) => [...prev, src]);
    } else {
      setSelectedImages((prev) => prev.filter((imageSrc) => imageSrc !== src));
    }
  };

  const closeCarousel = () => {
    setIsOpen(false);
  };

  const galleryImages = images.map((image) => ({
    original: image.src,
    thumbnail: image.src,
    description: image.alt,
  }));

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  useEffect(() => {
    const isMobile = window.innerWidth <= 768; 
    if (!isMobile && imageRefs.current.length > 0) {
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

  const openCarousel = (index: number) => {
  setCurrentIndex(index);
  setIsOpen(true);

    setTimeout(() => {
      galleryRef.current?.fullScreen();
    }, 100);
  };

  return (
    <>
      <SendingSelection selectedImages={selectedImages} />
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
            }}
          >
              <SelectionnableImages
                src={image.src}
                alt={image.alt}
                onCheckboxChange={handleCheckboxChange} 
              />
          </div>
        ))}
      </Masonry>
      {/* Carrousel plein écran */}
      {isOpen && (
        <div className={styles.overlay}>
          <ImageGallery
            ref={galleryRef}
            items={galleryImages}
            startIndex={currentIndex}
            showThumbnails={true}
            showFullscreenButton={true}
            showPlayButton={false}
            onScreenChange={handleScreenChange}
            renderCustomControls={() => (
              <input
                ref={checkboxRef}
                type="checkbox"
                className="absolute top-4 right-4 z-50 w-12 h-12 bg-white/90 border rounded"
                onClick={(e) => e.stopPropagation()}
                onChange={(e) => handleCheckboxChange(galleryImages[currentIndex].original, e.target.checked)}
              />
            )}
          />
        </div>
      )}

    </>
  );
};

export default Gallery;
