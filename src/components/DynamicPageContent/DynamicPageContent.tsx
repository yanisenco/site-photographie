"use client";
import { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { usePathname } from 'next/navigation';
import './article.css';
import DynamicPageContentSkeleton from './DynamicPageContentSkeleton';

interface Page {
  id: string | number;
  title: string;
  html: string;
}

export default function DynamicPageContent() {
  const [page, setPage] = useState<Page>();
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const slug = pathname.split('/').filter(Boolean).pop(); 

  useEffect(() => {
    fetch(`/api/getPages?slug=${slug}`)
      .then(res => res.json())
      .then(data => {
        setPage(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <DynamicPageContentSkeleton />;
  if (!page) return <p>Page non trouvée.</p>;
  return (
    <div className='mb-6'>
        <SectionTitle 
            title={page.title}
            idSection={String(page.title)}
            level={1}
            size="l"
        />
        <div dangerouslySetInnerHTML={{ __html: page.html }} className='article-content' />
    </div>
  );
}
