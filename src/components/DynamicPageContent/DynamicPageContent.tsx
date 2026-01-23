"use client";
import Image from 'next/image';
import SectionTitle from '../SectionTitle/SectionTitle';
import './article.css';
import DynamicPageContentSkeleton from './DynamicPageContentSkeleton';

interface Cover {
  url: string;
  alt?: string;
}

interface ContentItem {
  cover?: Cover;
  title: string;
  // html: string;
}

interface DynamicPageContentProps {
  content: ContentItem[];
}

export default function DynamicPageContent({ content }: DynamicPageContentProps) {
  console.log("DynamicPageContent content:", content[0].cover, content[0].title);

  if (!content) return <DynamicPageContentSkeleton />;

  return (
    <div className='mb-6'>
        <SectionTitle 
            title={content[0].title}
            idSection={String(content[0].title)}
            level={1}
            size="l"
        />
        {content[0].cover && <Image src={content[0].cover.url} alt={content[0].cover.alt || ''} width={1200} height={800} className="w-full h-auto my-4" />}
        {/* <div dangerouslySetInnerHTML={{ __html: content[0].html }} className='article-content' /> */}
    </div>
  );
}
