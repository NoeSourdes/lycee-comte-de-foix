import { Locate, Mail, Phone } from "lucide-react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";

const links = [
  {
    name: "hello@lyceecomtefoix.ad",
    logo: Mail,
  },
  {
    name: "+376 123 456",
    logo: Phone,
  },
  {
    name: "Andorre-la-Vieille, Principauté d’Andorre",
    logo: Locate,
  },
];

const footerLinks = [
  {
    title: "Accueil",
    links: ["Nos Avantages", "Nos Témoignages", "FAQ"],
  },
  {
    title: "À propos de nous",
    links: [
      "Notre mission",
      "Notre vision",
      "Récompenses et distinctions",
      "Histoire",
      "Enseignants",
    ],
  },
  {
    title: "L’établissement",
    links: ["Caractéristiques spécifiques", "Galerie"],
  },
  {
    title: "Contactez-nous",
    links: ["Informations", "Plan et itinéraire"],
  },
];

const links_social = [
  {
    name: "facebook",
    logo: FaFacebookF,
  },
  {
    name: "twitter",
    logo: RiTwitterXLine,
  },
  {
    name: "linkedin",
    logo: FaLinkedinIn,
  },
];

const conditions = [
  "Politique de confidentialité",
  "Conditions d’utilisation",
  "Politique de cookies",
];

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <MaxWidthWrapper className="flex flex-col gap-3">
      <div className="border-2 rounded-lg p-5 space-y-10">
        <div className="flex items-start max-md:flex-col gap-5">
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <img
                src="https://i.postimg.cc/fLbKgQgG/Logo.webp"
                alt="logo"
                className="h-12 w-12"
              />
              <p className="max-sm:text-xs font-bold">LYCÉE COMTE DE FOIX</p>
            </div>
            <p className="max-w-96 text-muted-foreground">
              Nous croyons en une éducation qui développe la créativité, les
              compétences en résolution de problèmes et l’imagination.
            </p>
            <div className="flex flex-col gap-3">
              {links.map((link, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="border-2 p-1 rounded-lg bg-blue-300">
                    <link.logo size={18} />
                  </div>
                  <p>{link.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-col-1 xl:grid-cols-4 md:gap-16 gap-8">
            {footerLinks.map((section, index) => (
              <div key={index} className="space-y-2">
                <h3 className="font-semibold text-lg">{section.title}</h3>
                <ul className="space-y-1">
                  {section.links.map((link, linkIndex) => (
                    <li
                      key={linkIndex}
                      className="hover:underline cursor-pointer"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="h-0.5 w-full bg-muted-foreground" />
        <div className="flex items-center justify-between max-md:flex-col gap-5">
          <div className="flex items-center gap-5 max-sm:flex-col max-sm:text-xs">
            {conditions.map((condition, index) => (
              <p key={index} className="hover:underline cursor-pointer">
                {condition}
              </p>
            ))}
          </div>
          <div className="flex items-center gap-3">
            {links_social.map((link, index) => (
              <Button key={index} size="icon">
                <link.logo size={18} />
              </Button>
            ))}
          </div>
        </div>
        <div className="h-0.5 w-full bg-muted-foreground" />
        <p className="text-center text-muted-foreground pb-5 max-sm:text-xs">
          Copyright © {year} Lycée Comte de Foix. Tous droits réservés.
        </p>
      </div>
    </MaxWidthWrapper>
  );
};
