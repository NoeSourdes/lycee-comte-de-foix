import {
  BookOpen,
  Brush,
  ChartNoAxesColumnIncreasing,
  Puzzle,
  Star,
  Sun,
} from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardDescription, CardTitle } from "../ui/card";

export const Strengths = () => {
  const data = [
    {
      title: "Apprentissage Thématique",
      description:
        "Notre programme est structuré autour de thématiques engageantes qui captent l’intérêt des lycéens. Chaque thème intègre plusieurs matières, rendant l’apprentissage pertinent et captivant.",
      icon: BookOpen,
    },
    {
      title: "Enseignement STEAM",
      description:
        "Nous proposons des programmes innovants en STEAM (Sciences, Technologies, Ingénierie, Arts et Mathématiques) qui encouragent l’exploration pratique, la réflexion critique et le développement des compétences en résolution de problèmes.",
      icon: ChartNoAxesColumnIncreasing,
    },
    {
      title: "Immersion Linguistique",
      description:
        "Grâce à nos programmes d’immersion linguistique, les élèves ont l’opportunité d’apprendre une langue étrangère, renforçant leur développement cognitif et leur ouverture sur le monde.",
      icon: Puzzle,
    },
    {
      title: "Art et Créativité",
      description:
        "L’art occupe une place centrale au Lycée Comte de Foix. Nos activités axées sur l’art favorisent l’expression personnelle, la créativité et l’appréciation des différentes formes artistiques.",
      icon: Brush,
    },
    {
      title: "Éducation en Plein Air",
      description:
        "Nos espaces d’apprentissage extérieurs offrent un environnement stimulant où les élèves peuvent explorer la nature, favorisant une connexion avec leur environnement.",
      icon: Sun,
    },
    {
      title: "Apprentissage Basé sur les Projets",
      description:
        "L’apprentissage par projet est un élément clé de notre pédagogie. Cette approche renforce les compétences sociales, le développement émotionnel et la pensée imaginative des élèves.",
      icon: Star,
    },
  ];

  return (
    <div className="space-y-16">
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <Badge className="bg-background">
          Les lycéens méritent un avenir prometteur
        </Badge>
        <h2 className="text-4xl font-bold">Nos Avantages</h2>
        <p className="max-w-2xl text-center">
          Avec une approche complète de l’éducation, le Lycée Comte de Foix
          s’engage à offrir à chaque étudiant un environnement propice à
          l’épanouissement personnel et académique, tout en répondant aux
          besoins spécifiques de chaque élève.
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
