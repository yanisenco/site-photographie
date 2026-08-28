import PageTemplate from "@/components/PageTemplate/PageTemplate";
import Link from "next/link";

export default function PrivatePolicy() {
  return (
    <PageTemplate>
      <div className="pt-4 pb-16 max-w-3xl">
        <p className="text-yellow text-[10px] tracking-[0.3em] uppercase mb-4">Informations légales</p>
        <h1 className="font-serif text-4xl leading-none mb-6">Mentions légales</h1>
        <div className="h-px w-20 bg-orange" />
      </div>

      <div className="max-w-3xl pb-24 space-y-12 text-foreground/70 leading-relaxed [&_strong]:text-foreground [&_strong]:font-medium">
        <section>
          <h2 className="font-serif text-xl text-yellow mb-4">Éditeur du site</h2>
          <p className="mb-2">
            Le site <strong>focusetlumiere.fr</strong> est édité par :
          </p>
          <p className="mb-2">
            <strong>Nom de la société</strong> : Focus et Lumière
          </p>
          <p className="mb-2">
            <strong>Forme juridique</strong> : micro-entreprise
          </p>
          <p className="mb-2">
            <strong>Adresse</strong> : 6 rue Georges Escoulan, Saint-Nazaire,
            Loire-Atlantique (44600)
          </p>
          <p className="mb-2">
            <strong>Téléphone</strong> : 07 81 95 15 03
          </p>
          <p className="mb-2">
            <strong>Email</strong> : ianaletrillard3@gmail.com
          </p>
          <p className="mb-2">
            <strong>Numéro d&apos;immatriculation</strong> : 93511180700027
          </p>
          <p>
            <strong>Directeur de la publication</strong> : Yanis ENCOGNERE
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-yellow mb-4">Hébergement du site</h2>
          <p className="mb-2">Le site est hébergé par :</p>
          <p className="mb-2">
            <strong>Nom de l&apos;hébergeur</strong> : IONOS SARL
          </p>
          <p className="mb-2">
            <strong>Adresse</strong> : 7 Place DE LA GARE 57200 SARREGUEMINES
          </p>
          <p>
            <strong>Site web</strong> :{" "}
            <Link
              href="https://www.ionos.fr/"
              target="_blank"
              rel="noopener"
              title="redirection-site-officiel-ionos"
              className="underline decoration-orange/40 hover:text-orange"
            >
              https://www.ionos.fr/
            </Link>
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-yellow mb-4">Propriété intellectuelle</h2>
          <p className="mb-4">
            L&apos;ensemble des contenus présents sur le site (textes, images,
            illustrations, vidéos, etc.) sont protégés par le droit
            d&apos;auteur et sont la propriété exclusive de{" "}
            <strong>focusetlumiere.fr</strong> ou de ses partenaires.
          </p>
          <p>
            Toute reproduction, distribution, modification, adaptation ou
            publication, même partielle, des différents éléments du site est
            strictement interdite sans l&apos;autorisation écrite préalable de{" "}
            <strong>focusetlumiere.fr</strong>.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-yellow mb-4">Données personnelles</h2>
          <p className="mb-4">
            <strong>focusetlumiere.fr</strong> s&apos;engage à ce que la
            collecte et le traitement de vos données, effectués à partir du
            site <strong>focusetlumiere.fr</strong>, soient conformes au
            Règlement Général sur la Protection des Données (RGPD).
          </p>
          <p>
            Vous disposez d&apos;un droit d&apos;accès, de rectification,
            d&apos;effacement, d&apos;opposition et de portabilité de vos
            données en nous contactant par email à ianaletrillard3@gmail.com.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-yellow mb-4">Cookies</h2>
          <p>
            Le site <strong>focusetlumiere.fr</strong> utilise des cookies
            pour améliorer l&apos;expérience utilisateur et réaliser des
            statistiques de visites. Vous avez la possibilité de désactiver
            les cookies en modifiant les paramètres de votre navigateur.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-yellow mb-4">Limitation de responsabilité</h2>
          <p>
            <strong>focusetlumiere.fr</strong> met tout en œuvre pour offrir
            aux utilisateurs des informations et/ou des outils disponibles et
            vérifiés, mais ne saurait être tenu pour responsable des erreurs,
            d&apos;une absence de disponibilité des fonctionnalités ou de la
            présence de virus sur son site.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-yellow mb-4">Contact</h2>
          <p className="mb-2">
            Pour toute question ou demande d&apos;information concernant les
            mentions légales, vous pouvez nous contacter :
          </p>
          <p>
            <strong>Par email</strong> : ianaletrillard3@gmail.com
          </p>
        </section>
      </div>
    </PageTemplate>
  );
}
