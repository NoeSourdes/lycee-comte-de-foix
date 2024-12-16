import Image from "next/image";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";

interface EventData {
  year: string;
  title: string;
  description: string;
}

const eventData: EventData[] = [
  {
    year: "2023",
    title: "Résilience et Nouveaux Horizons",
    description:
      "En s’adaptant aux défis contemporains, nous avons renforcé notre engagement à offrir une éducation de qualité supérieure. Cette année a marqué l’introduction de nouvelles initiatives axées sur le développement des compétences essentielles pour préparer nos élèves à un avenir prometteur.",
  },
  {
    year: "2017",
    title: "Innovation et Technologie",
    description:
      "Introduction de programmes et infrastructures intégrant les nouvelles technologies pour moderniser nos méthodes d’enseignement, tout en encourageant la pensée critique et les compétences numériques chez nos élèves.",
  },
  {
    year: "2012",
    title: "Expansion et Reconnaissance",
    description:
      "Cette année a marqué une période d’expansion significative et de reconnaissance pour notre lycée. Nous avons accueilli davantage d’élèves et renforcé notre réputation en tant qu’établissement scolaire de référence dans la région.",
  },
  {
    year: "2005",
    title: "Fondation et Croissance",
    description:
      "Établi en 2005, le Lycée Comte de Foix a ouvert ses portes avec la vision de fournir une éducation de qualité supérieure, axée sur le développement académique, personnel et social des élèves.",
  },
];

export const Parcours = () => {
  return (
    <div className="space-y-16">
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <Badge className="bg-background">Notre parcours progressif</Badge>
        <h2 className="text-4xl font-bold">Notre Histoire</h2>
        <p className="max-w-2xl text-center">
          Fondé avec une passion pour l’éducation en 2005, le Lycée Comte de
          Foix s’inscrit dans une riche histoire visant à accompagner les jeunes
          dans l’accomplissement de leur plein potentiel grâce à des méthodes
          d’enseignement innovantes et un environnement d’apprentissage
          inspirant.
        </p>
      </div>
      <Card className="w-full p-28 max-sm:p-20 bg-background flex items-center justify-center gap-10">
        <div className="flex flex-col gap-20 relative">
          {eventData.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-10 max-lg:flex-col"
            >
              <Card
                key={index}
                className="bg-background min-w-72 flex justify-center items-center px-8 py-5 relative gap-5"
              >
                <Image
                  src="/svg/parcours-icon.svg"
                  alt="Parcours icon"
                  width={80}
                  height={80}
                />
                <h3 className="text-3xl font-bold">{item.year}</h3>
                <div className="absolute top-1/2 -translate-y-1/2 -left-[85px] max-sm:-left-[65px] flex items-center z-20">
                  <div className="size-7 rounded-full border-2 bg-background" />
                  <div className="w-10 max-sm:w-5 h-0.5 bg-black" />
                  <div className="size-7 rounded-full border-2 bg-background" />
                </div>
              </Card>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold">
                  {item.year} - {item.title}
                </h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
          <div className="absolute top-16 -left-[70px] max-sm:-left-[50px] bottom-16 w-0.5 bg-black z-10" />
        </div>
      </Card>
    </div>
  );
};
