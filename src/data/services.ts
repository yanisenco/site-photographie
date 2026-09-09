export interface ServicePlan {
  name: string;
  duration: string;
  photos: string;
  price: string;
  popular?: boolean;
}

export interface ServiceSubcategory {
  title: string;
  desc: string;
  plans?: ServicePlan[];
  items?: string[];
}

export interface ServiceStep {
  n: string;
  title: string;
  desc: string;
}

export interface ServicePricingRow {
  duration: string;
  photos: string | null;
  price: string;
}

export interface ServicePricingTable {
  title: string;
  desc: string;
  colLabels?: [string, string | null, string];
  rows: ServicePricingRow[];
  note: string;
}

export interface ServiceOption {
  label: string;
  detail: string;
}

export interface Service {
  id: string;
  tag: string;
  title: string;
  shortDesc: string;
  desc: string;
  includes: string[];
  steps?: ServiceStep[];
  subcategories?: ServiceSubcategory[];
  pricingTables?: ServicePricingTable[];
  options?: ServiceOption[];
  cardNote?: string;
}

export const SERVICES: Service[] = [
  {
    id: "animaux",
    tag: "Vos compagnons",
    title: "Animaux de compagnie",
    shortDesc:
      "Séances dédiées à votre animal : compagnon seul, duo avec vous, ou toute la famille réunie.",
    desc: "Chaque animal a une personnalité qui lui est propre. Nos séances sont pensées pour mettre votre compagnon à l'aise et révéler ce qui le rend unique. Chien, chat, chevaux ou autre compagnon à quatre pattes, tous les animaux sont photogéniques. Il n'est pas nécessaire qu'il sache poser, qu'il soit parfaitement calme ou habitué à l'objectif pour réaliser de belles images. Un animal timide, énergique, joueur, curieux ou même un peu têtu n'est jamais un frein à une séance photo. Au contraire, son caractère fait partie de son histoire et mérite d'être capturé.",
    includes: [
      "Échange et préparation de la séance",
      "Conseil en amont du shooting",
      "Séance en studio à domicile ou en extérieur",
      "Conseils et accompagnement pendant la séance",
      "Direction naturelle des poses si vous posez avec votre animal",
      "Galerie privée en ligne et choisissez-vous-même vos photos",
      "Photographies soigneusement retouchées et livrées en haute définition",
    ],
    steps: [
      { n: "01", title: "Échange préalable", desc: "On discute ensemble du caractère de votre animal, du lieu idéal et du style souhaité pour préparer la séance au mieux." },
      { n: "02", title: "Mise en confiance", desc: "Arrivés sur place, on prend le temps de laisser votre compagnon explorer et s'habituer à nous avant de sortir l'appareil." },
      { n: "03", title: "La séance", desc: "On shoot au rythme de votre animal — pauses, jeux, friandises. Aucune pose forcée : on capture ce qui est vrai." },
      { n: "04", title: "Pré-sélection en ligne", desc: "Sous 5 jours, une pré-sélection de vos meilleures photos est mise en ligne dans la rubrique « Mes photos ». Vous choisissez celles que vous souhaitez garder." },
      { n: "05", title: "Livraison retouchée HD", desc: "Les photos choisies sont retouchées individuellement (lumière, couleurs, détails) et livrées en haute définition, prêtes pour l'impression ou les réseaux." },
    ],
    subcategories: [
      {
        title: "Séance compagnon",
        desc: "Une séance photo dédiée à votre animal, en studio, à domicile ou en extérieur.",
        plans: [
          { name: "Essentiel", duration: "30min", photos: "3 photos", price: "60 €" },
          { name: "Signature", duration: "1h", photos: "5 photos", price: "90 €", popular: true },
          { name: "Premium", duration: "1h30", photos: "10 photos", price: "140 €" },
        ],
      },
      {
        title: "Séance duo",
        desc: "Votre animal et vous, pour immortaliser votre complicité.",
        plans: [
          { name: "Essentiel", duration: "30min", photos: "3 photos", price: "70 €" },
          { name: "Signature", duration: "1h", photos: "5 photos", price: "100€", popular: true },
          { name: "Premium", duration: "1h30", photos: "10 photos", price: "150 €" },
        ],
      },
      {
        title: "Séance famille",
        desc: "Toute la famille réunie, avec ou sans vos animaux.",
        plans: [
          { name: "Essentiel", duration: "1h", photos: "3 photos", price: "90 €" },
          { name: "Signature", duration: "1h30", photos: "5 photos", price: "120 €", popular: true  },
          { name: "Premium", duration: "2h", photos: "10 photos", price: "170 €"},
        ],
      },
    ],
    cardNote: "Frais de déplacement non inclus dans le tarif.",
    options: [
      { label: "Déplacement", detail: "Offert dans Saint-Nazaire · 0,40 cts/km au-delà" },
      { label: "Personne ou animal supplémentaire", detail: "+15 € par personne ou animal en plus" },
      { label: "Photo supplémentaire", detail: "+20 € par photo au-delà du forfait" },
    ],
  },
  {
    id: "portraits",
    tag: "Portrait",
    title: "Portraits individuels & familles",
    shortDesc:
      "Du portrait solo à la grande famille recomposée, des images qui vous ressemblent.",
    desc: "Du portrait individuel à la séance en famille, nous prenons le temps de créer des images qui vous ressemblent. Que vous soyez à l’aise devant l'objectif ou que vous ne sachiez pas vraiment comment poser, nous vous guidons tout au long de la séance pour obtenir des photographies naturelles, spontanées et authentiques. En studio à domicile comme en extérieur, nous adaptons chaque séance à votre personnalité, à vos envies et à l'ambiance que vous souhaitez créer.",
    includes: [
      "Échange et préparation de la séance",
      "Conseil en amont du shooting",
      "Séance en studio à domicile ou en extérieur",
      "Conseils et accompagnement pendant la séance",
      "Direction naturelle des poses",
      "Galerie privée en ligne et choisissez-vous-même vos photos",
      "Photographies soigneusement retouchées et livrées en haute définition"
    ],
    steps: [
      { n: "01", title: "Consultation", desc: "On échange sur vos envies : ambiance, tenues, lieu, moments à immortaliser. C'est aussi l'occasion de répondre à toutes vos questions." },
      { n: "02", title: "La séance", desc: "Dans une ambiance détendue, on guide les poses avec naturel. Pas de mise en scène rigide — on cherche avant tout l'authenticité." },
      { n: "03", title: "Pré-sélection en ligne", desc: "Sous 5 jours, une pré-sélection de vos meilleures photos est disponible dans la rubrique « Mes photos ». Vous choisissez librement celles que vous souhaitez conserver." },
      { n: "04", title: "Retouche sur mesure", desc: "Chaque photo choisie est retouchée individuellement — lumière, couleurs, grain — pour un rendu soigné et cohérent." },
      { n: "05", title: "Livraison HD", desc: "Vos photos finales sont livrées en haute définition via votre galerie privée, téléchargeables à tout moment." },
    ],
    subcategories: [
      {
        title: "Portrait individuel / duo",
        desc: "Portrait en studio, à domicile ou en extérieur — un moment rien que pour vous.",
        plans: [
          { name: "Essentiel", duration: "30min", photos: "3 photos", price: "60 €" },
          { name: "Signature", duration: "1h", photos: "5 photos", price: "90 €", popular: true },
          { name: "Premium", duration: "1h30", photos: "10 photos", price: "140 €" },
        ],
      },
      {
        title: "Portrait en famille",
        desc: "Famille, couple, grossesse, famille avec animaux — toutes les compositions sont les bienvenues.",
        plans: [
          { name: "Essentiel", duration: "1h", photos: "3 photos", price: "90 €" },
          { name: "Signature", duration: "1h30", photos: "5 photos", price: "120 €", popular: true  },
          { name: "Premium", duration: "2h", photos: "10 photos", price: "170 €"},
        ],
      },
    ],
    cardNote: "Frais de déplacement non inclus dans le tarif.",
    options: [
      { label: "Déplacement", detail: "Offert dans Saint-Nazaire · 0,40 cts/km au-delà" },
      { label: "Photo supplémentaire", detail: "+20 € par photo au-delà du forfait" },
    ],
  },
  {
    id: "pro-evenements",
    tag: "Pro & Événement",
    title: "Professionnels & Événements",
    shortDesc:
      "Portraits corporate, photos d'équipe, séminaires et célébrations privées.",
    desc: "Vous êtes une entreprise souhaitant valoriser votre image ou un organisateur d'événement, nous intervenons avec discrétion et professionnalisme pour documenter vos moments avec naturel. Que ce soit pour mettre en valeur votre équipe, vos locaux, vos produits, votre savoir-faire ou immortaliser un événement, nous adaptons chaque prestation à vos besoins et à votre univers. (Mariages non couverts.) ",
    includes: [
      "Un échange en amont pour définir vos besoins et vos attentes",
      "Une prestation adaptée à votre activité ou au type d’événement",
      "Les prises de vue réalisées sur le lieu de votre choix",
      "Selon la formule choisie, sélectionnez vous-même vos photos préférées parmi les images réalisées, ou livraison de la galerie complète de toutes les photos réussies et retouchées",
      "Livraisons des photos en haute définition, soigneusement retouchées",
    ],
    steps: [
      { n: "01", title: "Brief préalable", desc: "On échange sur vos objectifs, le programme de l'événement ou les besoins de votre entreprise pour préparer une intervention sur mesure." },
      { n: "02", title: "Présence sur place", desc: "On intervient discrètement, sans perturber le déroulé — shooting des équipes en situation, mise en valeur des espaces, capture des gestes métier. Notre approche documentaire privilégie les moments naturels plutôt que les poses figées." },
      { n: "03", title: "Sélection des photos", desc: "En Formule Reportage, toutes les images réussies sont conservées — vous repartez avec l'intégralité du reportage. En Formule Shooting, vous sélectionnez vous-même vos photos préférées parmi les prises de vue réalisées." },
      { n: "04", title: "Retouche", desc: "Chaque photo retenue est retouchée individuellement : exposition, couleurs, netteté, cohérence de l'ensemble." },
      { n: "05", title: "Livraison sous 7 jours", desc: "Votre galerie complète est mise en ligne en haute résolution dans les 7 jours suivant l'événement, prête pour vos usages print ou web." },
    ],
    subcategories: [
      {
        title: "Pour l'entreprise",
        desc: "Valorisez votre image professionnelle avec des visuels authentiques et soignés.",
        items: [
          "Photos de locaux",
          "Photos d'équipe",
          "Portraits professionnels",
          "Photos de produits & prestations",
          "Photos pour réseaux sociaux & site internet",
          "Mise en valeur d'un commerce ou d'un savoir-faire",
        ],
      },
      {
        title: "Associations & Événements privés",
        desc: "Captez l'ambiance et les émotions de vos moments forts, grandes ou petites occasions.",
        items: [
          "Spectacles",
          "Compétitions",
          "Événements associatifs",
          "Anniversaires",
          "Galas & soirées",
          "Événements familiaux",
        ],
      },
    ],
    pricingTables: [
      {
        title: "Formule Reportage",
        desc: "Galerie complète de toutes les photos réussies, retouchées et livrées en HD au format numérique.",
        rows: [
          { duration: "1h", photos: null, price: "150 €" },
          { duration: "2h", photos: null, price: "270 €" },
          { duration: "3h", photos: null, price: "360 €" },
          { duration: "4h", photos: null, price: "450 €" },
          { duration: "6h", photos: null, price: "600 €" },
        ],
        note: "Frais de déplacement non inclus · Déplacement offert dans Saint-Nazaire, sinon 0,40 cts/km supplémentaire",
      },
      {
        title: "Formule Shooting",
        desc: "Shooting préparé et personnalisé. Sélectionnez vos photos préférées parmi les images réalisées, retouchées et livrées en HD.",
        rows: [
          { duration: "1h30", photos: "10 photos", price: "180 €" },
          { duration: "2h", photos: "15 photos", price: "230 €" },
          { duration: "2h30", photos: "20 photos", price: "280 €" },
          { duration: "3h", photos: "30 photos", price: "350 €" },
        ],
        note: "Frais de déplacement non inclus · Déplacement offert dans Saint-Nazaire, sinon 0,40 cts/km · +15 € la photo supplémentaire",
      },
    ],
    options: [
      { label: "Déplacement", detail: "Offert dans Saint-Nazaire · 0,40 cts/km au-delà" },
      { label: "Photo supplémentaire (Formule Shooting)", detail: "+15 € par photo au-delà du nombre inclus dans la formule" },
    ],
  },
  {
    id: "sport-animalier",
    tag: "Sport animalier",
    title: "Photographie sportive animalière",
    shortDesc:
      "Agility, flyball, canicross — l'animal en plein effort, chaque performance immortalisée.",
    desc: "Ce service s’adresse aux responsables de centres équestres, de clubs canins et aux structures organisant des compétitions ou événements animaliers. Nous venons sur place le jour d'une compétition ou d'un événement — agility, obéissance, canicross, dressage, jumping, reining, mountain trail, ranch riding, etc — et photographions l'ensemble des participants. Les photos sont ensuite proposées à la vente via une galerie privée sécurisée, accessible par code. En contrepartie de l'accueil sur votre site, aucun frais n’est demandé, nous offrons un lot de photos et vous bénéficierez de tous les droits d’utilisation. Vous pourrez les utiliser pour votre communication, vos réseaux sociaux, sur votre site internet, etc. ",
    includes: [
      "Présence complète sur l'événement (journée entière)",
      "Tous les participants photographiés individuellement",
      "Photos d'action nettes, retouchées HD",
      "Galerie privée en ligne accessible par code sous 5 jours",
      "Vente directe aux participants sans intermédiaire",
      "Lot de photos haute résolution offert à la structure",
    ],
    steps: [
      { n: "01", title: "Prise de contact", desc: "On définit ensemble la date, le lieu, le programme de l'événement et le nombre attendu de participants pour organiser notre intervention." },
      { n: "02", title: "Présence le jour J", desc: "On arrive en avance pour s'installer et shooter chaque participant en action tout au long de l'événement — aucun passage ne passe inaperçu." },
      { n: "03", title: "Mise en ligne sous 5 jours", desc: "Les photos sont sélectionnées, retouchées et déposées dans des galeries privées individuelles, accessibles par code unique." },
      { n: "04", title: "Vente & remise à la structure", desc: "Les participants achètent leurs photos directement en ligne. La structure reçoit son lot de photos HD offertes en guise de remerciement." },
    ],
    pricingTables: [
      {
        title: "Tarif photos — Participants",
        desc: "Les photos sont disponibles à l'achat en ligne dès la mise en ligne de la galerie privée, accessible par code personnel.",
        colLabels: ["Quantité achetée", "Photos offertes", "Prix total"],
        rows: [
          { duration: "1 photo", photos: "—", price: "15 €" },
          { duration: "2 photos", photos: "1 offerte", price: "30 €" },
          { duration: "4 photos", photos: "2 offertes", price: "60 €" },
          { duration: "6 photos", photos: "3 offertes", price: "90 €" },
          { duration: "Quantité libre — cumulable à l'infini", photos: "1 offerte / 2 achetées", price: "15 € / unité" },
        ],
        note: "Pour chaque tranche de 2 photos achetées, 1 photo supplémentaire est offerte · Téléchargement HD inclus",
      },
      {
        title: "Lot offert — Structure",
        desc: "En contrepartie de l'accueil sur votre site, la structure reçoit gratuitement un lot de photos représentatives de l'événement, sans aucun frais.",
        colLabels: ["Ce qui est inclus", null, ""],
        rows: [
          { duration: "Photos d'ambiance générale", photos: null, price: "Offert" },
          { duration: "Portraits de quelques participants en action", photos: null, price: "Offert" },
          { duration: "Photos du décor et du lieu", photos: null, price: "Offert" },
          { duration: "Fichiers haute résolution libres d'utilisation", photos: null, price: "Offert" },
        ],
        note: "Lot remis après l'événement · Fichiers HD utilisables librement pour vos communications",
      },
    ],
  },
];

export function getService(id: string) {
  return SERVICES.find((s) => s.id === id);
}
