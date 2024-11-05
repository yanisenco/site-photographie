"use client";
// Import des modules nécessaires
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./appleEffect.css";

// Déclaration du type pour l'élément HTML vidéo
type VideoElement = HTMLVideoElement | null;

export default function AppleEffect() {
  const videoRef = useRef<VideoElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const video = videoRef.current;
    if (!video) return;

    const src = video.currentSrc || video.src;

    const once = (
      el: EventTarget,
      event: string,
      fn: (e: Event) => void,
      opts?: boolean | AddEventListenerOptions
    ): void => {
      const onceFn = (e: Event) => {
        el.removeEventListener(event, onceFn);
        fn(e);
      };
      el.addEventListener(event, onceFn, opts);
    };

    once(document.documentElement, "touchstart", () => {
      video.play();
      video.pause();
    });

    const tl = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: "#container",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    once(video, "loadedmetadata", () => {
      tl.fromTo(
        video,
        { currentTime: 0 },
        { currentTime: video.duration || 1 }
      );
    });

    setTimeout(async () => {
      if (await window.fetch(src)) {
        fetch(src)
          .then((response) => response.blob())
          .then((blob) => {
            const blobURL = URL.createObjectURL(blob);
            const currentTime = video.currentTime;

            once(document.documentElement, "touchstart", () => {
              video.play();
              video.pause();
            });

            video.setAttribute("src", blobURL);
            video.currentTime = currentTime + 0.01;
          });
      }
    }, 1000);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      URL.revokeObjectURL(video.src);
    };
  }, []);

  return (
    <div id="container" className="container">
      <video
        ref={videoRef}
        className="video-background"
        src="/r7.mp4"
        playsInline
        muted
      ></video>
    </div>
  );
}
