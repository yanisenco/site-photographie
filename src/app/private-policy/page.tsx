import PageTemplate from "@/components/PageTemplate/PageTemplate";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

export default function PrivatePolicy() {
  return (
    <PageTemplate>
      <SectionTitle idSection={"private-policy"} title={"Mentions Légales"} />

      <h2>Éditeur du site</h2>
      <p>
        Le site <strong>focusetlumiere.fr</strong> est édité par :
      </p>
      <p>
        <strong>Nom de la société</strong> : Focus et Lumière
      </p>
      <p>
        <strong>Forme juridique</strong> : auto-entrepreneur
      </p>
      <p>
        <strong>Adresse</strong> : [Adresse complète]
      </p>
      <p>
        <strong>Téléphone</strong> : [Numéro de téléphone]
      </p>
      <p>
        <strong>Email</strong> : [Adresse email de contact]
      </p>
      <p>
        <strong>Numéro d’immatriculation</strong> : [Numéro SIRET ou autre
        numéro d’identification]
      </p>
      <p>
        <strong>Directeur de la publication</strong> : [Nom du responsable de la
        publication]
      </p>

      <h2>Hébergement du site</h2>
      <p>Le site est hébergé par :</p>
      <p>
        <strong>Nom de l’hébergeur</strong> : [Nom de l’hébergeur]
      </p>
      <p>
        <strong>Adresse</strong> : [Adresse complète de l’hébergeur]
      </p>
      <p>
        <strong>Téléphone</strong> : [Numéro de téléphone de l’hébergeur]
      </p>
      <p>
        <strong>Site web</strong> : [Site de l’hébergeur]
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
        email à [Adresse email de contact].
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
        <strong>Par email</strong> : [Adresse email de contact]
      </p>
      <p>
        <strong>Par courrier</strong> : [Adresse postale]
      </p>
    </PageTemplate>
  );
}
