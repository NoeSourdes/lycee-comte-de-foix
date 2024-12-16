import Image from "next/image";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";

const subjects = [
  {
    title: "Journée Sportive Annuelle",
    description:
      "Une journée dédiée à la compétition amicale, à l’esprit d’équipe et au fair-play, où les élèves participent à divers sports et activités.",
  },
  {
    title: "Festivals Culturels",
    description:
      "Célébrations de festivals culturels variés, favorisant l’échange culturel et l’appréciation de la diversité.",
  },
  {
    title: "Expositions d’Art",
    description:
      "Mise en valeur des talents artistiques de nos élèves à travers des expositions et des présentations.",
  },
  {
    title: "Foire Scientifique",
    description:
      "Une plateforme pour les jeunes scientifiques en herbe, leur permettant de présenter leurs projets innovants et leurs expériences.",
  },
  {
    title: "Journée Internationale",
    description:
      "Une célébration dynamique de notre communauté multiculturelle, mettant en avant les cultures du monde entier.",
  },
  {
    title: "Cérémonie de Remise des Diplômes",
    description:
      "Un moment clé célébrant nos terminales avant leur départ vers de nouveaux horizons.",
  },
];

export const Event = () => {
  return (
    <div className="space-y-16">
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <Badge className="bg-background">Événement & Célébrations</Badge>
        <h2 className="text-4xl font-bold text-center">
          Événements et Célébrations
        </h2>
        <p className="max-w-2xl text-center">
          Au Lycée Comte de Foix, nous célébrons chaque étape importante et
          {/* créons des souvenirs mémorables pour nos élèves. Tout au long de */}
          l’année, nous organisons une variété d’événements et de célébrations
          qui rassemblent l’ensemble de la communauté scolaire. Voici
          quelques-uns de nos événements marquants :
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {subjects.map((subject, index) => (
          <Card
            key={index}
            className="flex flex-col items-center bg-background p-8 relative"
          >
            <div className="absolute top-24 left-0 right-0 h-20 border-b-2 border-y-2 bg-destructive" />
            <Image
              src={`/img/event/${index + 1}.png`}
              width={250}
              height={250}
              alt="event"
              className="relative z-20"
            />
            <div className="space-y-4 mt-10">
              <h3 className="text-2xl font-bold text-center">
                {subject.title}
              </h3>
              <p className="text-center">{subject.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
