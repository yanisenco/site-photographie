interface SectionTitleProps {
  title: string;
  idSection: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: string;
}

export default function SectionTitle({
  title,
  idSection,
  level = 1,
  size="l"
}: SectionTitleProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements; 

  return (
    <Tag
      className={`pt-6 mb-6 font-bold ${size==="s" ? "text-[17px] sm:text-[25px] lg:text-[21px] xl:text-[25px]" : "text-[32px] sm:text-[40px] lg:text-[36px] xl:text-[40px]"} `}
      id={idSection}
    >
      {title}
    </Tag>
  );
}
