import PageTemplate from "@/components/PageTemplate/PageTemplate";
import ContactBlock from "@/components/ContactBlock/ContactBlock";

export const metadata = {
  title: "Contact — Focus & Lumière, photographes à Saint-Nazaire",
  description:
    "Contactez Focus & Lumière pour réserver une séance photo à Saint-Nazaire et en Loire-Atlantique.",
};

export default function ContactPage() {
  return (
    <PageTemplate>
      <div className="pt-4 pb-16">
        <p className="text-yellow text-[10px] tracking-[0.3em] uppercase mb-4">Discutons</p>
        <h1 className="font-serif text-4xl lg:text-5xl leading-none mb-6">Contact</h1>
        <div className="h-px w-20 bg-orange" />
      </div>

      <div className="pb-24">
        <ContactBlock />
      </div>
    </PageTemplate>
  );
}
