"use client";
import { useState, useEffect } from "react";
import { RichText } from "@payloadcms/richtext-lexical/react";

type FaqItem = { question: string; answer: unknown };

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [items, setItems] = useState<FaqItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaqs = async () => {
      setLoading(true);
      const base = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/+$/, "");
      const res = await fetch(`${base}/api/faqs?sort=order`, {
        cache: "no-store",
      });
      const { docs } = await res.json();
      setItems(docs ?? []);
      setLoading(false);
    };
    fetchFaqs();
  }, []);

  const toggle = (index: number) => setOpenIndex(openIndex === index ? null : index);

  if (loading || items.length === 0) return null;

  return (
    <div className="divide-y divide-foreground/10">
      {items.map((item, index) => (
        <div key={index}>
          <button
            className="w-full flex items-center justify-between gap-6 py-5 text-left group"
            onClick={() => toggle(index)}
          >
            <span
              className={`text-sm font-medium transition-colors duration-200 ${
                openIndex === index ? "text-yellow" : "text-foreground/80 group-hover:text-foreground"
              }`}
            >
              {item.question}
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
            <div className="text-foreground/55 text-sm leading-relaxed pb-6 max-w-3xl [&_p]:mb-2 [&_a]:underline [&_a]:decoration-orange/40 [&_a:hover]:text-orange">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              <RichText data={item.answer as any} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
