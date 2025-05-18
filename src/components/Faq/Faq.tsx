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
    }, []);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  if (loading) return <>Chargement..</>
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Foire aux questions</h2>
      {posts && posts.map((item, index) => (
        <div key={index} className="mb-2 border-b border-blue dark:border-custom-white">
          <button
            className="w-full text-left font-medium py-2 flex justify-between items-center"
            onClick={() => toggle(index)}
          >
            {item.title}
            <span className="text-lg">{openIndex === index ? '−' : '+'}</span>
          </button>
          {openIndex === index && (
            <div className="pb-2 unna">{item.excerpt}</div>
          )}
        </div>
      ))}
    </div>
  );
}
