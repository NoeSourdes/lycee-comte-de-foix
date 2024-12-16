import { Brush, FlaskConical, Music, Puzzle, Sparkles } from "lucide-react";
import { IoMdFlash } from "react-icons/io";
import { Badge } from "../ui/badge";
import { Card, CardDescription, CardTitle } from "../ui/card";

export const Activities = () => {
  const data = [
    {
      title: "Sports et Activités Sportives",
      description:
        "Les élèves peuvent participer à divers sports, comme le football, le basketball, la gymnastique et le yoga. Ces activités favorisent l’esprit d’équipe, la forme physique et le sens de la discipline.",
      icon: IoMdFlash,
    },
    {
      title: "Arts et Créativité",
      description:
        "Nos cours et ateliers d’art offrent une plateforme aux élèves pour exprimer leur créativité à travers la peinture, le dessin et d’autres formes artistiques.",
      icon: Brush,
    },
    {
      title: "Musique et Arts de la Scène",
      description:
        "Les élèves peuvent découvrir leurs talents musicaux grâce au chant, à la pratique d’instruments, et à leur participation à des pièces de théâtre et des performances artistiques.",
      icon: Music,
    },
    {
      title: "Clubs de Langues",
      description:
        "Ces clubs offrent aux élèves l’opportunité de s’immerger dans différentes langues et cultures, tout en développant une ouverture sur le monde.",
      icon: Puzzle,
    },
    {
      title: "Club Scientifique",
      description:
        "Le club scientifique permet aux jeunes scientifiques d’explorer les merveilles des sciences à travers des expériences ludiques et un apprentissage pratique.",
      icon: FlaskConical,
    },
    {
      title: "Apprentissage de l’Intelligence Artificielle",
      description:
        "Ateliers pour découvrir les bases de l’intelligence artificielle et ses applications pratiques.",
      icon: Sparkles,
    },
  ];

  return (
    <div className="space-y-16">
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <Badge className="bg-background">Activités</Badge>
        <h2 className="text-4xl font-bold text-center">
          Activités Extra-Scolaires
        </h2>
        <p className="max-w-2xl text-center">
          Au Lycée Comte de Foix, nous croyons au développement d’individus
          épanouis. Nos activités extra-scolaires offrent une grande variété
          d’expériences qui complètent le programme académique et encouragent
          les élèves à explorer leurs centres d’intérêt et leurs passions. Nous
          proposons une large gamme d’activités extra-scolaires, notamment :
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((item, index) => (
          <Card
            key={index}
            className="bg-background h-64 flex flex-col justify-center items-start p-8 relative"
          >
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            <div className="absolute -top-8 left-8 size-16 border-2 rounded-lg bg-blue-300 flex items-center justify-center">
              <item.icon className="size-5" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
