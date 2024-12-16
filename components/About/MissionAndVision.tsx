import Image from "next/image";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";

export const MissionAndVision = () => {
  const data = [
    {
      title: "Mission",
      description:
        "Au Lycée Comte de Foix, notre mission est d’inspirer une passion pour l’apprentissage et d’accompagner les élèves à devenir des individus confiants, responsables et créatifs. Nous nous efforçons de créer un espace sûr et inclusif où les élèves peuvent s’épanouir sur les plans académique, social et émotionnel, établissant ainsi les bases pour une réussite scolaire durable.",
      img: "/svg/mission.svg",
    },
    {
      title: "Vision",
      description:
        "Notre vision est d’être un phare d’excellence éducative, où les lycéens sont encouragés à explorer, découvrir et exprimer leurs talents uniques. Nous visons à former une génération d’apprenants équipés de compétences en pensée critique, d’empathie et d’une profonde appréciation de la diversité.",
      img: "/svg/vision.svg",
    },
  ];
  return (
    <div className="space-y-16">
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <Badge className="bg-background">Mission & Vision</Badge>
        <h2 className="text-4xl font-bold">Notre Mission et Vision</h2>
        <p className="max-w-2xl text-center">
          Nous sommes ici pour offrir un environnement inclusif et stimulant où
          les lycéens peuvent s’épanouir, développer leur goût pour
          l’apprentissage et favoriser leur croissance personnelle.
        </p>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        {data.map((item, index) => (
          <Card key={index} className="space-y-10 bg-background p-8 relative">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <Image src={item.img} alt={item.title} width={50} height={50} />
            </div>
            <p>{item.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};
