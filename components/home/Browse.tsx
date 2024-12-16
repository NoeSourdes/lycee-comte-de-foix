"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

interface CardProps {
  title: string;
  description: string;
  link: string;
}

const cardsData: CardProps[] = [
  {
    title: "À propos de nous",
    description:
      "Découvrez notre mission, nos valeurs et notre engagement constant à offrir les meilleures expériences d’apprentissage à nos étudiants. Apprenez-en plus sur notre équipe pédagogique passionnée et notre approche éducative dynamique.",
    link: "/about",
  },
  {
    title: "L'Établissement",
    description:
      "Explorez le Lycée Comte de Foix, un environnement moderne et accueillant, conçu pour offrir un cadre propice à l’épanouissement des élèves. Découvrez nos infrastructures, nos laboratoires, nos espaces dédiés à la vie scolaire, et bien plus encore.",
    link: "/establishment",
  },
  {
    title: "Vie étudiante",
    description:
      "Plongez au cœur de la vie étudiante dynamique et enrichissante du Lycée Comte de Foix. Découvrez une variété d’activités extra-scolaires, d’arts et de sports qui rendent l’expérience scolaire inoubliable.",
    link: "/student-life",
  },
  {
    title: "Admissions",
    description:
      "Apprenez-en davantage sur notre processus d’inscription et comment sécuriser une place au Lycée Comte de Foix. Trouvez des informations sur les conditions d’admission, les délais d’inscription et les places disponibles.",
    link: "/admissions",
  },
];

export const Browse = () => {
  const router = useRouter();
  return (
    <div className="space-y-16">
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <Badge className="bg-background">Explorez davantage</Badge>
        <h2 className="text-4xl font-bold text-center">Parcourez nos pages </h2>
        <p className="max-w-2xl text-center">
          Découvrez une multitude d’informations utiles sur le Lycée Comte de
          Foix. Prenez le temps d’explorer et d’en apprendre plus sur les
          expériences enrichissantes qui vous attendent dans notre
          établissement.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            className="bg-background flex flex-col justify-center items-start gap-10 p-8"
          >
            <h3 className="text-2xl font-bold text-center w-full">
              {card.title}
            </h3>
            <div
              className="w-full border-t-2 border-black relative"
              style={{
                borderTopStyle: "dashed",
                borderTopWidth: "2px",
                borderImage:
                  "repeating-linear-gradient(to right, black, black 10px, transparent 10px, transparent 20px) 1",
              }}
            >
              <div className="size-6 rounded-full bg-background border-2 absolute left-0 -top-3"></div>
              <div className="size-6 rounded-full bg-background border-2 absolute right-0 -top-3"></div>
            </div>{" "}
            <p className="text-center">{card.description}</p>
            <Button
              onClick={() => {
                router.push(card.link);
              }}
              className="bg-destructive w-full text-background flex items-center gap-3"
            >
              En savoir plus
              <ArrowRight />
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};
