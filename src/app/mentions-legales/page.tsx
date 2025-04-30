import PageTemplate from "@/components/PageTemplate/PageTemplate";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import Link from "next/link";

export default function PrivatePolicy() {
  return (
    <PageTemplate>
      <SectionTitle idSection={"mentions-legales"} title={"Mentions Légales"} />

      <h2>Éditeur du site</h2>
      <p>
        Le site <strong>focusetlumiere.fr</strong> est édité par :
      </p>
      <p>
        <strong>Nom de la société</strong> : Focus & Lumière
      </p>
      <p>
        <strong>Forme juridique</strong> : micro-entreprise
      </p>
      <p>
        <strong>Adresse</strong> : 6 rue Georges Escoulan, Saint-Nazaire,
        Loire-Atlantique (44600)
      </p>
      <p>
        <strong>Téléphone</strong> : 07 81 95 15 03
      </p>
      <p>
        <strong>Email</strong> : ianaletrillard3@gmail.com
      </p>
      <p>
        <strong>Numéro d’immatriculation</strong> : 93511180700019
      </p>
      <p>
        <strong>Directeur de la publication</strong> : Yanis ENCOGNERE
      </p>

      <h2>Hébergement du site</h2>
      <p>Le site est hébergé par :</p>
      <p>
        <strong>Nom de l’hébergeur</strong> : IONOS SARL
      </p>
      <p>
        <strong>Adresse</strong> : 7 Place DE LA GARE 57200 SARREGUEMINES
      </p>
      <p>
        <strong>Site web</strong> :{" "}
        <Link href={"https://www.ionos.fr/"} target="_blank" rel="noopener" title="redirection-site-officiel-ionos">
          https://www.ionos.fr/
        </Link>
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L’ensemble des contenus présents sur le site (textes, images,
        illustrations, vidéos, etc.) sont protégés par le droit d’auteur et sont
        la propriété exclusive de <strong>focusetlumiere.fr</strong> ou de ses
        partenaires.
      </p>
      <p>
        Toute reproduction, distribution, modification, adaptation ou
        publication, même partielle, des différents éléments du site est
        strictement interdite sans l’autorisation écrite préalable de{" "}
        <strong>focusetlumiere.fr</strong>.
      </p>

      <h2>Données personnelles</h2>
      <p>
        <strong>focusetlumiere.fr</strong> s’engage à ce que la collecte et le
        traitement de vos données, effectués à partir du site{" "}
        <strong>focusetlumiere.fr</strong>, soient conformes au Règlement
        Général sur la Protection des Données (RGPD).
      </p>
      <p>
        Vous disposez d’un droit d’accès, de rectification, d’effacement,
        d’opposition et de portabilité de vos données en nous contactant par
        email à ianaletrillard3@gmail.com .
      </p>

      <h2>Cookies</h2>
      <p>
        Le site <strong>focusetlumiere.fr</strong> utilise des cookies pour
        améliorer l’expérience utilisateur et réaliser des statistiques de
        visites. Vous avez la possibilité de désactiver les cookies en modifiant
        les paramètres de votre navigateur.
      </p>

      <h2>Limitation de responsabilité</h2>
      <p>
        <strong>focusetlumiere.fr</strong> met tout en œuvre pour offrir aux
        utilisateurs des informations et/ou des outils disponibles et vérifiés,
        mais ne saurait être tenu pour responsable des erreurs, d’une absence de
        disponibilité des fonctionnalités ou de la présence de virus sur son
        site.
      </p>

      <h2>Contact</h2>
      <p>
        Pour toute question ou demande d’information concernant les mentions
        légales, vous pouvez nous contacter :
      </p>
      <p>
        <strong>Par email</strong> : ianaletrillard3@gmail.com
      </p>
    </PageTemplate>
  );
}
