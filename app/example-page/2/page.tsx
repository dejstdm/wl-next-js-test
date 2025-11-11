"use client";

import type { JSX } from "react";
import {
  NavBar,
  Hero,
  ProductSlider,
  FAQ,
  Footer,
} from "@dejstdm/white-label-ui";
import laysLogo from "@/public/lays-logo.png";

const navItems = [
  { label: "Home", href: "/", active: true },
  { label: "Flavor Finder", href: "/flavor-finder" },
  { label: "Snack Stories", href: "/snack-stories" },
  { label: "Example Layout", href: "/example-page/1" },
];

const heroContent = {
  backgroundImage:
    "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1600&q=80",
  subheadline: "<p>Lay’s Summer Crunch Tour</p>",
  headline: "Bright, crispy chips for every sunny hang",
  body: "<p>Celebrate the season with limited-run Lay’s flavors, sunshine-ready recipes, and snackable inspiration straight from the Flavor Kitchen.</p>",
  buttonLabel: "Explore flavors",
  buttonHref: "#flavors",
};

const productSlides = [
  {
    id: "gourmet",
    image:
      "https://www.lays.fr/prod/s3fs-public/2025-09/3168930179146---LAYS-GOURMET-SALT.png",
    imageAlt: "Sachet Lay’s Gourmet Sel de Mer",
    title: "Lay’s Gourmet",
    description:
      "<p>Avec Lay’s Gourmet, nous associons à chaque saveur, la texture qui saura la sublimer au mieux. Lay’s Gourmet, sublimez votre apéritif.</p>",
    buttonLabel: "Découvrir Lay’s Gourmet",
    buttonHref: "https://www.lays.fr/",
  },
  {
    id: "classique",
    image:
      "https://www.lays.fr/prod/s3fs-public/2025-06/LAYS-NATURE-135G_0.png",
    imageAlt: "Paquet Lay’s Classique nature 135g",
    title: "Lay’s Classique",
    description:
      "<p>La mission de Lay’s est de vous offrir des chips irrésistibles pour égayer vos apéritifs, vos barbecues d’été ou vos pique-niques.</p>",
    buttonLabel: "Découvrir Lay’s Classique",
    buttonHref: "https://www.lays.fr/",
  },
  {
    id: "ancienne",
    image:
      "https://www.lays.fr/prod/s3fs-public/2025-06/LAY%27S%20ANCIENNE%20NATURE%20155G%201_0.png",
    imageAlt: "Paquet Lay’s Recette à l’Ancienne nature",
    title: "Lay's Recette à l'Ancienne",
    description:
      "<p>Lay’s Recette à l’Ancienne, ce sont des pommes de terre coupées en fines tranches et cuites doucement pour plus de croustillant.</p>",
    buttonLabel: "Découvrir la Recette à l’Ancienne",
    buttonHref: "https://www.lays.fr/",
  },
  {
    id: "paysanne",
    image:
      "https://www.lays.fr/prod/s3fs-public/2024-11/05_FR_LAY%27S%20PAYSANNE%20NATURE%20155G_826x826px_0.png",
    imageAlt: "Sachet Lay’s Recette Paysanne nature",
    title: "Lay's Recette Paysanne",
    description:
      "<p>Craquez pour la générosité des chips Lay’s Recette Paysanne : de grandes chips ondulées, épaisses et terriblement croquantes.</p>",
    buttonLabel: "Découvrir la Recette Paysanne",
    buttonHref: "https://www.lays.fr/",
  },
  {
    id: "cuites-four",
    image:
      "https://www.lays.fr/prod/s3fs-public/2023-08/Lays-cuites-four-NATURE_0.png",
    imageAlt: "Paquet Lay’s Cuites au Four nature",
    title: "Lay's Cuites au four",
    description:
      "<p>Légèrement striées pour plus de croustillance, elles offrent un bon goût de pommes de terre tout en limitant leur apport en matières grasses.</p>",
    buttonLabel: "Découvrir les Cuites au four",
    buttonHref: "https://www.lays.fr/",
  },
  {
    id: "format-individuel",
    image:
      "https://www.lays.fr/prod/s3fs-public/2024-03/LAY%27S-MPK-SEL-6x25g_0.png",
    imageAlt: "Pack Lay’s format individuel sel",
    title: "Lay's Format Individuel",
    description:
      "<p>Retrouvez vos saveurs préférées en format individuel pour encore plus de plaisir : idéal à emporter pour vos pique-niques et barbecues.</p>",
    buttonLabel: "Découvrir les formats individuels",
    buttonHref: "https://www.lays.fr/",
  },
  {
    id: "max",
    image:
      "https://www.lays.fr/prod/s3fs-public/2023-08/LAYS-MAX-NATURE_0.png",
    imageAlt: "Paquet Lay’s MAX nature ondulées",
    title: "Lay's MAX",
    description:
      "<p>Lay’s MAX, la gamme de chips ondulées de Lay’s pour un croquant extrême et une gourmandise assumée.</p>",
    buttonLabel: "Découvrir Lay’s MAX",
    buttonHref: "https://www.lays.fr/",
  },
];

const faqItems = [
  {
    id: "limited-flavors",
    question: "How often do new Lay’s flavors launch?",
    answer:
      "<p>Our Flavor Kitchen debuts seasonal drops a few times per year. Join the Lay’s newsletter to be the first to sample new blends.</p>",
  },
  {
    id: "ingredients",
    question: "Are Lay’s chips gluten-free?",
    answer:
      "<p>Most classic potato chip varieties are gluten-free, but always check the nutritional panel on each bag for the latest allergen guidance.</p>",
  },
  {
    id: "freshness",
    question: "What is the best way to keep chips fresh after opening?",
    answer:
      "<p>Press out extra air, roll the top of the bag, and secure it with a clip. Store in a cool, dry spot away from direct sunlight.</p>",
  },
];

const footerLinks = [
  { label: "Privacy Policy", href: "https://www.lays.com/privacy-policy" },
  { label: "Contact Lay’s", href: "https://contact.pepsico.com/lays" },
  { label: "Store Locator", href: "https://www.lays.com/store-locator" },
];

const logoSrc = laysLogo.src;
const logoAlt = "Lay’s logo";

export default function HomePage(): JSX.Element {
  return (
    <>
      <NavBar logoSrc={logoSrc} logoAlt={logoAlt} items={navItems} />

      <Hero
        backgroundImage={heroContent.backgroundImage}
        subheadline={heroContent.subheadline}
        headline={heroContent.headline}
        body={heroContent.body}
        buttonLabel={heroContent.buttonLabel}
        buttonHref={heroContent.buttonHref}
      />

      <ProductSlider
        id="flavors"
        headline="Fan-favorite Lay’s flavors"
        subheadline="<p>Swipe through bright, craveable drops curated for this season’s snacking.</p>"
        products={productSlides}
      />

      <FAQ
        id="faq"
        headline="Lay’s fan FAQ"
        subheadline="<p>Quick answers sourced from our consumer care team.</p>"
        items={faqItems}
      />

      <Footer
        logoSrc={logoSrc}
        logoAlt={logoAlt}
        links={footerLinks}
        copyright="Lay’s"
        copyrightYear={new Date().getFullYear().toString()}
      />
    </>
  );
}
