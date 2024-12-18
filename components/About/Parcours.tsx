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
    year: "1980",
    title: "Fondation du Lycée Comte de Foix",
    description:
      "Le Lycée Comte de Foix a été fondé en 1980 à Andorre-la-Vieille, concrétisant la promesse faite en 1978 par le coprince Valéry Giscard d'Estaing lors de sa visite pour le septième centenaire du traité de paréage de 1278.",
  },
  {
    year: "1994",
    title: "Ouverture d'une Classe Post-Baccalauréat",
    description:
      "En 1994, le lycée a élargi son offre éducative en ouvrant une classe post-baccalauréat, permettant aux étudiants de poursuivre des études supérieures au sein de l'établissement.",
  },
  {
    year: "2013",
    title: "Renouvellement de la Convention Franco-Andorrane",
    description:
      "Le 11 juillet 2013, la convention entre la France et l'Andorre dans le domaine de l'enseignement a été renouvelée, renforçant la coopération éducative entre les deux pays et confirmant le statut du lycée au sein du service public d'enseignement de la principauté.",
  },
  {
    year: "2021",
    title: "Diversité et Multiculturalisme",
    description:
      "À la rentrée de septembre 2021, le lycée comptait environ 1 620 élèves de diverses nationalités, reflétant la diversité culturelle de l'Andorre et l'engagement de l'établissement en faveur d'un environnement éducatif multilingue et inclusif.",
  },
  {
    year: "2024",
    title: "Participation au Prix Goncourt des Lycéens",
    description:
      "En 2024, le lycée a participé au Prix Goncourt des Lycéens, marquant une étape importante dans l'engagement des élèves envers la littérature et les échanges culturels.",
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
      <Card className="w-full p-28 max-lg:p-20 bg-background flex items-center justify-center gap-10">
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
                <div className="absolute top-1/2 -translate-y-1/2 -left-[85px] max-sm:-left-[65px] flex items-center z-20 max-lg:hidden">
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
          <div className="absolute top-16 -left-[70px] max-sm:-left-[50px] bottom-24 w-0.5 bg-black z-10 max-lg:hidden" />
        </div>
      </Card>
    </div>
  );
};
