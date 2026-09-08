"use client";
import { useState } from "react";
import { FAQ_ITEMS } from "@/data/faq";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="divide-y divide-foreground/10">
      {FAQ_ITEMS.map((item, index) => (
        <div key={item.q}>
          <button
            className="w-full flex items-center justify-between gap-6 py-5 text-left group"
            onClick={() => toggle(index)}
          >
            <span
              className={`text-sm font-medium transition-colors duration-200 ${
                openIndex === index ? "text-yellow" : "text-foreground/80 group-hover:text-foreground"
              }`}
            >
              {item.q}
            </span>
            <span
              className={`flex-shrink-0 w-6 h-6 border flex items-center justify-center transition-all duration-200 ${
                openIndex === index
                  ? "border-yellow text-yellow"
                  : "border-foreground/20 text-foreground/40 group-hover:border-foreground/40"
              }`}
            >
              <span className="text-base leading-none">{openIndex === index ? "−" : "+"}</span>
            </span>
          </button>
          {openIndex === index && (
            <p className="text-foreground/55 text-sm leading-relaxed pb-6 max-w-3xl">
              {item.a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
