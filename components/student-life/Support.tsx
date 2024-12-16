import {
  BookOpen,
  Brush,
  FlaskConical,
  Lightbulb,
  Music,
  Puzzle,
  Sparkles,
  Users,
} from "lucide-react";
import { IoMdFlash } from "react-icons/io";
import { Badge } from "../ui/badge";
import { Card, CardDescription, CardTitle } from "../ui/card";

export const Support = () => {
  const data = [
    {
      title: "Conseils",
      description:
        "Des conseillers professionnels offrent un accompagnement et un soutien aux élèves, en répondant à leurs besoins émotionnels et sociaux.",
      icon: Lightbulb,
    },
    {
      title: "Soutien Scolaire",
      description:
        "Nos enseignants fournissent une aide supplémentaire aux élèves qui pourraient avoir besoin d’un accompagnement spécifique dans leur parcours académique.",
      icon: BookOpen,
    },
    {
      title: "Collaboration Parents-Enseignants",
      description:
        "Nous encourageons une collaboration étroite avec les parents pour assurer une communication fluide et un soutien mutuel dans le développement des élèves.",
      icon: Users,
    },
  ];

  return (
    <div className="space-y-16">
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <Badge className="bg-background">Soutien</Badge>
        <h2 className="text-4xl font-bold text-center">Soutien aux Élèves</h2>
        <p className="max-w-2xl text-center">
          Au Lycée Comte de Foix, nous nous engageons à offrir un environnement
          de soutien et d’accompagnement qui répond aux besoins uniques de
          chaque élève. Nos services de soutien comprennent :
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
