"use client";

import { useState } from "react";
import { Badge } from "../ui/badge";
import { GaleryComponent } from "./GaleryComponent";

const galleryItems = [
  "Tous",
  "Salles de Classe",
  "Bibliothèque",
  "Laboratoire de Sciences",
  "Salle Informatique",
  "Espace Nature et Jardin",
];

const sections = [
  {
    title: "Salles de Classe",
    description:
      "Nos salles de classe modernes et bien équipées sont conçues pour offrir un environnement d'apprentissage stimulant. Chaque espace est aménagé pour encourager la créativité, la curiosité et l'engagement.",
    images: [
      "/img/galery/1.png",
      "/img/galery/2.png",
      "/img/galery/3.png",
      "/img/galery/4.png",
    ],
  },
  {
    title: "Bibliothèque",
    description:
      "Notre bibliothèque spacieuse est un véritable trésor de connaissances, offrant un large choix de ressources pour enrichir les apprentissages et développer le goût pour la lecture.",
    images: [
      "/img/galery/5.png",
      "/img/galery/6.png",
      "/img/galery/7.png",
      "/img/galery/8.png",
    ],
  },
  {
    title: "Laboratoire de Sciences",
    description:
      "Notre laboratoire de sciences permet aux élèves de réaliser des expériences pratiques et d'explorer des concepts scientifiques de manière ludique et interactive.",
    images: [
      "/img/galery/9.png",
      "/img/galery/10.png",
      "/img/galery/11.png",
      "/img/galery/12.png",
    ],
  },
  {
    title: "Salle Informatique",
    description:
      "Équipée de technologies modernes, notre salle informatique renforce les compétences numériques des élèves, en les préparant aux exigences du monde numérique.",
    images: [
      "/img/galery/13.png",
      "/img/galery/14.png",
      "/img/galery/15.png",
      "/img/galery/16.png",
    ],
  },
  {
    title: "Espace Nature et Jardin",
    description:
      "Nos espaces extérieurs offrent aux élèves l'opportunité de se connecter à la nature, tout en découvrant les plantes et les enjeux environnementaux.",
    images: [
      "/img/galery/17.png",
      "/img/galery/18.png",
      "/img/galery/19.png",
      "/img/galery/20.png",
    ],
  },
];

export const Galery = () => {
  const [selectItems, setSelectItems] = useState<string>("Tous");

  return (
    <div className="space-y-16">
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <Badge className="bg-background">Notre Galerie</Badge>
        <h2 className="text-4xl font-bold text-center">
          Notre Galerie des Espaces
        </h2>
        <p className="max-w-2xl text-center">
          Plongez dans notre galerie et découvrez les différents espaces du
          Lycée Comte de Foix, où les élèves vivent des expériences éducatives
          inoubliables dans un environnement conçu pour leur épanouissement.
        </p>
      </div>
      <div className="flex items-center gap-5 w-full overflow-x-scroll">
        {galleryItems.map((item, index) => (
          <Badge
            key={index}
            onClick={() => setSelectItems(item)}
            className={`px-4 py-2 bg-background text-primary font-semibold rounded-lg cursor-pointer whitespace-nowrap ${
              selectItems === item
                ? "bg-blue-300 hover:bg-blue-300"
                : " hover:bg-blue-100"
            }`}
          >
            {item}
          </Badge>
        ))}
      </div>
      <div className="flex flex-col gap-40 pt-28">
        {sections.map((item, index) => (
          <div key={index} className="w-full">
            <GaleryComponent
              title={item.title}
              description={item.description}
              images={item.images}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
