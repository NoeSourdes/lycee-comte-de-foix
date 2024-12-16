import { Crown, GraduationCap } from "lucide-react";
import { FaUserFriends } from "react-icons/fa";
import { FaFlag, FaMaskFace } from "react-icons/fa6";
import { MdOutlineSupport } from "react-icons/md";
import { Badge } from "../ui/badge";
import { Card, CardDescription, CardTitle } from "../ui/card";

export const Avantages = () => {
  const data = [
    {
      title: "Approche holistique",
      description:
        "Une méthode qui favorise le développement intellectuel, social et émotionnel des étudiants, en les préparant à relever les défis de demain.",
      icon: GraduationCap,
    },
    {
      title: "Enseignants expérimentés",
      description:
        "Une équipe pédagogique compétente et engagée, dédiée à la réussite et à l’épanouissement de chaque élève.",
      icon: Crown,
    },
    {
      title: "Environnement bienveillant",
      description:
        "Un cadre moderne et sûr, conçu pour encourager l’apprentissage, l’innovation et la collaboration.",
      icon: FaMaskFace,
    },
    {
      title: "Apprentissage interactif",
      description:
        "Des cours dynamiques et des projets collaboratifs pour développer la créativité et l’esprit critique.",
      icon: FaFlag,
    },
    {
      title: "Soutien personnalisé",
      description:
        "Chaque étudiant bénéficie d’un accompagnement individuel pour répondre à ses besoins spécifiques et l’aider à atteindre ses objectifs.",
      icon: MdOutlineSupport,
    },
    {
      title: "Implication des parents",
      description:
        "Une communication ouverte et une collaboration étroite avec les parents pour garantir la réussite des élèves.",
      icon: FaUserFriends,
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
            className="bg-background h-52 flex flex-col justify-center items-start p-8 relative"
          >
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            <div className="absolute -top-8 left-8 size-16 border-2 rounded-lg bg-destructive flex items-center justify-center text-white">
              <item.icon className="size-5" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
