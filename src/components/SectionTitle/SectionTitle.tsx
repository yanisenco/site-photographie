interface SectionTitleProps {
  title: string;
  idSection: string;
}

export default function SectionTitle({ title, idSection }: SectionTitleProps) {
  return (
    <h1
      className=" mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px] "
      id={idSection}
    >
      {title}
    </h1>
  );
}
