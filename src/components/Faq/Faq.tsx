'use client';
import { useState, useEffect } from 'react';

type FAQProps = { tag: string };

export default function FAQ({ tag }: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [posts, setPosts] = useState<Array<{ title: string; excerpt: string }>>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`/api/getPosts?tag=${tag}`)
        .then(res => res.json())
        .then(data => {
            setPosts(data);
            setLoading(false);
        })
        .catch(() => setLoading(false));
    }, [tag]);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  if (loading) return <>Chargement..</>
  return (
    <div className='px-3 sm:px-14 my-6'>
      <h2 className="text-4xl font-bold mb-4">Foire aux questions</h2>
      {posts && posts.map((item, index) => (
        <div key={index} className="mb-2 border-b border-blue dark:border-custom-white text-xl">
          <button
            className="w-full text-left font-medium py-2 flex justify-between items-center"
            onClick={() => toggle(index)}
          >
            {item.title}
            <span className="text-lg">{openIndex === index ? '−' : '+'}</span>
          </button>
          <div
            className={`unna pb-2 transition-all duration-300 ease-in overflow-hidden ${
              openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {item.excerpt}
          </div>
        </div>
      ))}
    </div>
  );
}
