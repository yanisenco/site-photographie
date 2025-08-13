import { useEffect, useState } from 'react';
import Image from 'next/image';
import photoLavant from '../../images/avant/2.jpg';
import photoLapres from '../../images/après/2.jpg';
import photoSavant from '../../images/avant/3.jpg';
import photoSapres from '../../images/après/3.jpg';

interface MouseMoveEvent {
    currentTarget: HTMLElement;
    clientX: number;
}

export default function PreviewPhoto() {
const [clipValue, setClipValue] = useState(`0px, 175px, auto, 0px`);
const [offsetX, setOffsetX] = useState<number | null>(null);
const [isHovered, setIsHovered] = useState(false);
const isMobile = window.innerWidth < 1280;
const avant = isMobile ? photoSavant : photoLavant;
const apres = isMobile ? photoSapres : photoLapres;
const imageWidth = apres.width || 600;

const handleMouseMove = (e: MouseMoveEvent) => {
    const element = e.currentTarget;
    const x = e.clientX - element.getBoundingClientRect().left;
    setOffsetX(x);
};

const handleMouseEnter = () => setIsHovered(true);
const handleMouseLeave = () => setIsHovered(false);

useEffect(() => {
  setClipValue(`0, ${offsetX}px, auto, 0`);
}, [offsetX]);

useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (!isHovered) {
        let x = offsetX ?? 0;
        const step = 2;
        interval = setInterval(() => {
            x += step;
            if (x > imageWidth) x = 0;
            setOffsetX(x);
        }, 30);
    }
    return () => {
        if (interval) clearInterval(interval);
    };
}, [isHovered, imageWidth, offsetX]);

return (
  <div className="relative w-full ">
      <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      id="container"
      className="relative w-full max-w-sm md:max-w-md z-30 mt-6 md:mt-0 md:pl-6"
      style={{
          aspectRatio: `${avant.width || 600} / ${avant.height || 400}`,
      }}
      >
          <Image
              src={apres}
              id="topImage"
              alt="photo apres retouches"
              width={apres.width || 600}
              height={apres.height || 400}
              priority
              style={{ clip: `rect(${clipValue})` }}
              className="absolute top-0 left-0 w-full h-full z-10"
          />
          <Image
              src={avant}
              id="bottomImage"
              alt="photo avant retouches"
              width={avant.width || 600}
              height={avant.height || 400}
              priority
              className="absolute top-0 left-0 w-full h-full z-0 shadow-[0px_0px_20px_1px_rgba(201,222,225,0.35)]"
          />
      </div>
              <p className="hidden md:block">survollez l&apos;image pour voir le avant/après</p>
              <p className="md:hidden text-center">cliquez sur l&apos;image pour voir le avant/après</p>
  </div>
);
}