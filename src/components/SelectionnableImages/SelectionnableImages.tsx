"use client";

import React from "react";
import Image from "next/image";
import styles from "../Gallery/gallery.module.css";

interface ImageProps {
  isSelected: boolean;
  src: string;
  alt: string;
}

interface SelectionnableImagesProps extends ImageProps {
  onCheckboxChange: (src: string, checked: boolean) => void;    
}

const SelectionnableImages = ({ isSelected, src, alt, onCheckboxChange }: SelectionnableImagesProps, ) => {

  return (
    <div className="relative">
      <input
        type="checkbox"
        className="absolute top-2 right-2 block z-10 w-6 h-6 rounded-lg"
        checked={isSelected}
        onClick={(e) => e.stopPropagation()}
        onChange={(e) => onCheckboxChange(src, e.target.checked)}
      />
      <Image
        src={src}
        alt={alt}
        className={styles.image}
        quality={70}
        width={800}
        height={800}
        loading="lazy"
      />

    </div>
  );
};

export default SelectionnableImages;