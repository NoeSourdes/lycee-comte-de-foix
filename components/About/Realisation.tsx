import { ChartNoAxesColumnDecreasing, ChartPie } from "lucide-react";
import { IoMdFlash } from "react-icons/io";
import { Badge } from "../ui/badge";
import { Card, CardDescription, CardTitle } from "../ui/card";

export const Realisation = () => {
  const data = [
    {
      title: "Prix d'Excellence en Éducation Secondaire",
      description:
        "Décerné par l’Association Nationale pour l’Excellence Éducative (ANEE), en reconnaissance de l’engagement du Lycée Comte de Foix à fournir une éducation secondaire exceptionnelle et à favoriser un environnement d’apprentissage stimulant.",
      icon: ChartPie,
    },
    {
      title: "Prix de l'Innovation en Sciences et Technologies (STEAM)",
      description:
        "Attribué par l’Association pour l’Excellence Éducative pour nos efforts pionniers dans l’introduction de programmes STEAM innovants (Sciences, Technologies, Ingénierie, Arts et Mathématiques), visant à développer la créativité et la pensée critique chez nos élèves.",
      icon: ChartNoAxesColumnDecreasing,
    },
    {
      title: "Prix de la Gestion Environnementale",
      description:
        "Reçu de la Société Terre Verte pour notre dévouement à l’éducation environnementale, aux pratiques durables et à la promotion de l’amour de la nature chez nos étudiants.",
      icon: IoMdFlash,
    },
  ];
  return (
    <div className="space-y-16">
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <Badge className="bg-background">Nos réalisations</Badge>
        <h2 className="text-4xl font-bold">
          Nos Récompenses et Reconnaissances
        </h2>
        <p className="max-w-2xl text-center">
          Le Lycée Comte de Foix est fier de son engagement à offrir une
          éducation de haute qualité et des expériences enrichissantes pour ses
          élèves. Nous avons l’honneur d’avoir reçu diverses distinctions en
          reconnaissance de notre dévouement à l’excellence académique. Ces prix
          reflètent les efforts constants de notre équipe pour créer un
          environnement d’apprentissage exceptionnel pour nos étudiants.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((item, index) => (
          <Card
            key={index}
            className="bg-background h-72 flex flex-col justify-center items-start p-8 relative"
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
