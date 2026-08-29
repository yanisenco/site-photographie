import Link from "next/link";
import Image from "next/image";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import Faq from "@/components/Faq/Faq";
import { SERVICES } from "@/data/services";
import { SERVICE_IMAGES } from "@/data/service-images";

export const metadata = {
  title: "Services & Tarifs — Focus & Lumière, photographes à Saint-Nazaire",
  description:
    "Découvrez nos formules et tarifs : animaux de compagnie, portraits, professionnels & événements, photographie sportive animalière.",
};

export default function ServicesPage() {
  return (
    <PageTemplate>
      <div className="pt-4 pb-16">
        <p className="text-yellow text-[10px] tracking-[0.3em] uppercase mb-4">
          Nos prestations
        </p>
        <h1 className="font-serif text-4xl lg:text-5xl leading-none mb-6">
          Services &amp; Tarifs
        </h1>
        <div className="h-px w-20 bg-orange mb-6" />
        <p className="text-foreground/60 max-w-xl leading-relaxed">
          Choisissez la rubrique qui vous correspond, pour découvrir nos
          formules détaillées et nos tarifs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-24">
        {SERVICES.map((svc, index) => {
          const image = SERVICE_IMAGES[svc.id].card;
          return (
            <Link
              key={svc.id}
              href={`/service/${svc.id}`}
              rel="canonical"
              title={svc.title}
              className="group relative overflow-hidden bg-blue-dark text-left h-[420px]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, #1e3d59 38%, rgba(30,61,89,0.15) 100%)" }}
              />
              <div className="absolute top-5 left-5">
                <span className="px-2.5 py-1 bg-purple text-custom-white text-[10px] tracking-[0.2em] uppercase">
                  {svc.tag}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <span className="text-custom-white/40 text-[10px] tracking-[0.25em] uppercase mb-2 block">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="font-serif text-2xl lg:text-3xl text-custom-white mb-3 leading-tight">
                  {svc.title}
                </h2>
                <p className="text-custom-white/60 text-sm mb-5 leading-relaxed">
                  {svc.shortDesc}
                </p>
                <span className="inline-flex items-center gap-2 text-yellow text-sm font-medium group-hover:gap-3 transition-all">
                  Voir les formules &amp; tarifs →
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* FAQ */}
      <div className="mb-24">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-10 bg-orange" />
          <p className="text-yellow text-[10px] tracking-[0.3em] uppercase">
            Questions fréquentes
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl leading-tight lg:col-span-1">
            Vous avez des
            <br />
            questions ?
          </h2>
          <p className="text-foreground/45 leading-relaxed text-sm lg:col-span-2 lg:pt-2">
            Retrouvez les réponses aux questions les plus courantes. Si vous
            ne trouvez pas ce que vous cherchez, n&apos;hésitez pas à nous
            contacter directement.
          </p>
        </div>
        <Faq />
        <div className="mt-10 pt-8 border-t border-foreground/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-foreground/40 text-sm">
            Une autre question ? Nous sommes disponibles.
          </p>
          <Link
            href="/contact"
            rel="canonical"
            title="Nous contacter"
            className="inline-flex items-center gap-2 text-orange text-sm font-medium hover:text-yellow transition-colors"
          >
            Nous contacter →
          </Link>
        </div>
      </div>
    </PageTemplate>
  );
}
