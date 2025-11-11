"use client";
import type { JSX } from "react";
import {
  NavBar,
  FAQ,
  Footer,
  RecipeSlider,
  TextSection,
 
} from "@dejstdm/white-label-ui";
import laysLogo from "@/public/lays-logo.png";

const navItems = [
  { label: "Snacks", href: "#snacks" },
  { label: "Recipes", href: "#recipes" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const snacksSection = {
  headline: "Snacking pensé pour chaque moment",
  subheadline:
    "<p>La mission de Lay’s est de vous offrir des chips irrésistibles pour égayer vos apéritifs, vos barbecues d’été ou encore accompagner vos pique-niques.</p>",
  text: "<p>Des recettes comme Lay’s Gourmet ou Recette à l’Ancienne associent une texture sur-mesure à chaque assaisonnement, tandis que Lay’s Recette Paysanne offre de grandes chips ondulées, épaisses, terriblement croquantes et au bon goût de pomme de terre. Pour les instants plus légers, adoptez Lay’s Cuites au four : légèrement striées, elles gardent tout le plaisir tout en limitant l’apport en matières grasses.</p>",
};



const recipeSlides = [
  {
    id: "pork-tenderloin-hoagie",
    image:
      "https://www.lays.com/sites/lays.com/files//styles/recipe_thumbnail/public/Low-Country-Pork-Tenderloin-Hoagie-With-Buttermilk-Mustard-Mayo.jpg?itok=yq0JFb11",
    imageAlt:
      "Low Country Pork Tenderloin Hoagie with Buttermilk Mustard Mayo",
    href: "https://www.lays.com/recipes/low-country-pork-tenderloin-hoagie-buttermilk-mustard-mayo",
  },
  {
    id: "cheesesteak-sliders",
    image:
      "https://www.lays.com/sites/lays.com/files//styles/recipe_thumbnail/public/LAY%27S-Cheddar-and-Sour-Cream-Philly-Cheesesteak-Sliders.jpg.jpg?itok=nXGBpGvm",
    imageAlt:
      "Lay’s Cheddar & Sour Cream Philly Cheesesteak Sliders on tray",
    href: "https://www.lays.com/recipes/lays-cheddar-and-sour-cream-philly-cheesesteak-sliders",
  },
  {
    id: "lemon-dill-cauliflower",
    image:
      "https://www.lays.com/sites/lays.com/files//styles/recipe_thumbnail/public/Lemon-Dill%20Roasted%20Cauliflower.jpg?itok=wukTRPut",
    imageAlt: "Lemon-Dill Roasted Cauliflower served with Lay’s chips",
    href: "https://www.lays.com/recipes/lemon-dill-roasted-cauliflower",
  },
  {
    id: "fudgy-chew-cookies",
    image:
      "https://www.lays.com/sites/lays.com/files//styles/recipe_thumbnail/public/No-Bake-Fudgy-Chew-Cookies.jpg?itok=uogmIH4U",
    imageAlt: "No-Bake Fudgy-Chew Cookies topped with Lay’s crumbs",
    href: "https://www.lays.com/recipes/no-bake-fudgy-chew-cookies",
  },
];

const faqItems = [
  {
    id: "ingredients",
    question: "What ingredients are used in Lay's chips?",
    answer:
      "<p>Lay’s chips use simple ingredients like potatoes, vegetable oil, and seasonings. Check each bag for the exact recipe and allergen information.</p>",
  },
  {
    id: "availability",
    question: "Where can I find limited-edition flavors?",
    answer:
      "<p>Limited flavors roll out to select retailers and online partners. Follow Lay’s social channels for the latest drops and availability updates.</p>",
  },
  {
    id: "storage",
    question: "How should I store Lay's chips for maximum freshness?",
    answer:
      "<p>Keep the bag sealed and store it in a cool, dry place. Once opened, use a clip or transfer to an airtight container to preserve crunch.</p>",
  },
];

const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use", href: "#" },
  { label: "Contact Lay’s", href: "#" },
];

const logoSrc = laysLogo.src;
const logoAlt = "Lay’s logo";

export default function ExamplePageOne(): JSX.Element {
  return (
    <>
      <NavBar logoSrc={logoSrc} logoAlt={logoAlt} items={navItems} />
      <TextSection
        id="snacks"
        headline={snacksSection.headline}
        subheadline={snacksSection.subheadline}
        text={snacksSection.text}
      />
     
      <RecipeSlider
        id="recipes"
        headline="Recipes"
        subheadline="<p>These flavorful recipes are guaranteed to make you smile. 😊</p>"
        recipes={recipeSlides}
        headerButtonLabel="View all recipes"
        headerButtonHref="https://www.lays.com/recipes"
      />
      <FAQ
        id="faq"
        headline="Lay’s fan questions"
        subheadline="<p>Answers about our crisps, flavors, and freshness.</p>"
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
