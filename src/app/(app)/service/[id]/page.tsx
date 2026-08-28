import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import Gallery from "@/components/Gallery/Gallery";
import { SERVICES, getService } from "@/data/services";
import { SERVICE_IMAGES } from "@/data/service-images";
import { CLOUDINARY_FOLDERS } from "@/data/cloudinary-folders";
import { fetchImages } from "@/utils/imagesService";

interface ServiceParams {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ id: s.id }));
}

export default async function Service({ params }: ServiceParams) {
  const { id } = await params;
  const svc = getService(id);
  if (!svc) return notFound();

  const image = SERVICE_IMAGES[svc.id];
  const folder = CLOUDINARY_FOLDERS[svc.id];
  const images = folder ? await fetchImages(folder) : [];

  return (
    <PageTemplate>
      <span className="inline-block px-2.5 py-1 bg-purple text-custom-white text-[10px] tracking-[0.2em] uppercase mb-5">
        {svc.tag}
      </span>
      <h1 className="font-serif text-4xl lg:text-5xl leading-none mb-6">{svc.title}</h1>
      <div className="h-px w-20 bg-orange mb-4" />

      {svc.subcategories ? (
        <section className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
            <div className="relative w-full h-[420px] bg-blue-dark">
              <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div>
              <p className="text-foreground/60 leading-relaxed mb-8">{svc.desc}</p>
              <p className="text-yellow text-[10px] tracking-[0.25em] uppercase mb-3">
                Inclus dans chaque formule
              </p>
              <ul className="space-y-2.5">
                {svc.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground/60 text-sm">
                    <span className="text-orange mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="h-px bg-foreground/10 mb-12" />
          <p className="text-yellow text-[10px] tracking-[0.3em] uppercase mb-8 text-center">
            Choisissez votre séance
          </p>

          <div
            className={`grid grid-cols-1 gap-6 ${
              svc.subcategories.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
            }`}
          >
            {svc.subcategories.map((sub) => (
              <div key={sub.title} className="bg-blue-dark text-custom-white border border-custom-white/10 p-6 flex flex-col">
                <h3 className="font-serif text-xl text-yellow mb-2">{sub.title}</h3>
                <p className="text-custom-white/55 text-sm leading-relaxed mb-5 pb-5 border-b border-custom-white/10">
                  {sub.desc}
                </p>
                {sub.items ? (
                  <ul className="space-y-2 flex-grow">
                    {sub.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-custom-white/70 text-sm">
                        <span className="text-orange mt-0.5 flex-shrink-0">›</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <>
                    <p className="text-yellow text-[9px] tracking-[0.2em] uppercase mb-3">
                      Formules &amp; tarifs
                    </p>
                    <div className="space-y-2 flex-grow">
                      {sub.plans?.map((plan) => (
                        <div
                          key={plan.name}
                          className={`flex items-center justify-between px-3 py-2.5 border ${
                            plan.popular
                              ? "border-orange bg-orange/5"
                              : "border-custom-white/10"
                          }`}
                        >
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium">{plan.name}</span>
                              {plan.popular && <span className="text-orange text-[8px] tracking-widest uppercase">★</span>}
                            </div>
                            <p className="text-custom-white/40 text-xs">
                              {plan.duration} · {plan.photos}
                            </p>
                          </div>
                          <span className="font-serif text-yellow text-lg flex-shrink-0">{plan.price}</span>
                        </div>
                      ))}
                    </div>
                    {svc.cardNote && (
                      <p className="mt-4 pt-4 border-t border-custom-white/10 text-custom-white/30 text-[10px] leading-relaxed">
                        {svc.cardNote}
                      </p>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>

          {svc.options && <ServiceOptions options={svc.options} />}
        </section>
      ) : (
        <section className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="relative w-full h-[480px] bg-blue-dark">
              <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div>
              <p className="text-foreground/60 leading-relaxed mb-8">{svc.desc}</p>
              <p className="text-yellow text-[10px] tracking-[0.25em] uppercase mb-3">
                Inclus dans chaque formule
              </p>
              <ul className="space-y-2.5">
                {svc.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground/60 text-sm">
                    <span className="text-orange mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {svc.pricingTables && (
            <div className="mt-16">
              <div className="h-px bg-foreground/10 mb-12" />
              <p className="text-yellow text-[10px] tracking-[0.3em] uppercase mb-10 text-center">
                Grille tarifaire
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {svc.pricingTables.map((table) => (
                  <div key={table.title} className="bg-blue-dark text-custom-white border border-custom-white/10 overflow-hidden">
                    <div className="px-6 pt-6 pb-4 border-b border-custom-white/10">
                      <h3 className="font-serif text-xl text-yellow mb-1">{table.title}</h3>
                      <p className="text-custom-white/50 text-sm leading-relaxed">{table.desc}</p>
                    </div>
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-custom-white/[0.06]">
                          <th className="text-left px-6 py-3 text-custom-white/35 text-[9px] tracking-[0.2em] uppercase">
                            {table.colLabels?.[0] ?? "Durée"}
                          </th>
                          {table.rows[0].photos !== null && (
                            <th className="text-left px-4 py-3 text-custom-white/35 text-[9px] tracking-[0.2em] uppercase">
                              {table.colLabels?.[1] ?? "Photos"}
                            </th>
                          )}
                          <th className="text-right px-6 py-3 text-custom-white/35 text-[9px] tracking-[0.2em] uppercase">
                            {table.colLabels?.[2] ?? "Tarif"}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {table.rows.map((row, i) => (
                          <tr key={i} className="border-b border-custom-white/[0.05] last:border-0">
                            <td className="px-6 py-3 text-custom-white/80 text-sm">{row.duration}</td>
                            {row.photos !== null && (
                              <td className="px-4 py-3 text-custom-white/55 text-sm">{row.photos}</td>
                            )}
                            <td className="px-6 py-3 text-right font-serif text-yellow">{row.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <p className="px-6 py-4 text-custom-white/35 text-xs leading-relaxed border-t border-custom-white/[0.06]">
                      {table.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {svc.options && <ServiceOptions options={svc.options} />}
        </section>
      )}

      {svc.steps && (
        <section className="py-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-10 bg-orange" />
            <p className="text-yellow text-[10px] tracking-[0.3em] uppercase">Déroulement</p>
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl mb-14 leading-tight">
            Comment se déroule la séance ?
          </h2>
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-0 ${
              svc.steps.length >= 5 ? "lg:grid-cols-5" : "lg:grid-cols-4"
            }`}
          >
            {svc.steps.map((step) => (
              <div key={step.n} className="flex flex-col px-6 pb-10 lg:px-8">
                <div className="w-12 h-12 border border-foreground/15 flex items-center justify-center mb-5">
                  <span className="font-serif text-orange text-sm">{step.n}</span>
                </div>
                <h3 className="font-medium mb-2">{step.title}</h3>
                <p className="text-foreground/45 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {images && images.length > 0 && (
        <section className="py-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-10 bg-orange" />
            <p className="text-yellow text-[10px] tracking-[0.3em] uppercase">Quelques images</p>
          </div>
          <Gallery images={images} id={svc.id} />
        </section>
      )}

      <section className="my-16 py-16 bg-blue-dark text-custom-white -mx-6 lg:-mx-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-custom-white/40 text-sm mb-1">Une question ou un projet particulier ?</p>
            <h2 className="font-serif text-2xl">Parlons-en, nous répondons sous 24h.</h2>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link
              href="/services"
              rel="canonical"
              title="Autres services"
              className="px-5 py-3 border border-custom-white/20 text-custom-white/70 text-sm hover:border-yellow hover:text-yellow transition-colors"
            >
              ← Autres services
            </Link>
            <Link
              href="/contact"
              rel="canonical"
              title="Nous contacter"
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange text-custom-white font-medium hover:bg-[#e85a30] transition-colors text-sm"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}

function ServiceOptions({ options }: { options: { label: string; detail: string }[] }) {
  return (
    <div className="mt-10">
      <p className="text-yellow text-[10px] tracking-[0.25em] uppercase mb-4">Options &amp; précisions</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {options.map((opt) => (
          <div key={opt.label} className="border border-foreground/10 px-5 py-4">
            <p className="text-foreground/50 text-[9px] tracking-[0.18em] uppercase mb-1.5">{opt.label}</p>
            <p className="text-foreground/75 text-sm leading-relaxed">{opt.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
