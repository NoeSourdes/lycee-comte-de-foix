import { Mail } from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

const teachers = [
  {
    name: "Mme. Claire Dupont",
    qualification: "Licence en Littérature Française",
    description:
      "Mme Dupont est une professeure passionnée avec plus de 10 ans d'expérience dans l'enseignement de la littérature et de la langue française. Elle encourage ses élèves à développer leur esprit critique tout en explorant les classiques et la littérature moderne.",
  },
  {
    name: "M. Julien Martin",
    qualification: "Master en Sciences Mathématiques",
    description:
      "Avec une solide expérience dans l'enseignement des mathématiques, M. Martin utilise des méthodes pédagogiques innovantes pour aider ses élèves à comprendre les concepts les plus complexes. Il prépare les élèves aux examens avec rigueur et bienveillance.",
  },
  {
    name: "Mme. Sophie Laurent",
    qualification: "Master en Sciences Économiques et Sociales",
    description:
      "L'expertise de Mme Laurent dans les sciences sociales et économiques permet à ses élèves de mieux comprendre les dynamiques de notre société. Elle encourage le débat et l'analyse critique pour une préparation optimale aux études supérieures.",
  },
  {
    name: "M. Lucas Bernard",
    qualification: "Licence en Éducation Physique et Sportive",
    description:
      "M. Bernard est passionné par le sport et l'éducation physique. Il motive ses élèves à adopter un mode de vie actif et sain, tout en favorisant l'esprit d'équipe et la discipline sportive.",
  },
  {
    name: "Mme. Camille Richard",
    qualification: "Master en Histoire-Géographie",
    description:
      "Spécialisée dans l'enseignement de l'histoire et de la géographie, Mme Richard aide ses élèves à tisser des liens cohérents marquants du passé tout en leur donnant une meilleure compréhension des enjeux géopolitiques actuels.",
  },
  {
    name: "M. Pierre Lefèvre",
    qualification: "Licence en Arts Appliqués",
    description:
      "Avec une expertise en arts appliqués, M. Lefèvre inspire ses élèves à exprimer leur créativité et à explorer leur potentiel artistique. Il encourage l'expression personnelle tout en intégrant des techniques modernes et classiques dans ses cours.",
  },
];

export const Teachers = () => {
  return (
    <div className="space-y-16">
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <Badge className="bg-background">Nos professeurs experts</Badge>
        <h2 className="text-4xl font-bold">Notre Équipe Pédagogique</h2>
        <p className="max-w-2xl text-center">
          Au Lycée Comte de Foix, notre équipe enseignante est au cœur de notre
          parcours éducatif. Nous sommes fiers d’employer des professeurs
          hautement qualifiés et passionnés, qui possèdent une compréhension
          approfondie des besoins des lycéens. Nos enseignants créent un
          environnement stimulant et engageant, favorisant la curiosité,
          inspirant la confiance et cultivant la réussite académique.
        </p>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        {teachers.map((teacher, index) => (
          <Card
            key={index}
            className="bg-background flex flex-col w-full gap-8 p-8"
          >
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src={"/img/" + (index + 1) + ".png"}
                  alt="Avatar"
                  width={64}
                  height={64}
                />
                <p className="font-bold text-xl">{teacher.name}</p>
              </div>
              <Button size="icon">
                <Mail />
              </Button>
            </div>
            <div className="rounded-lg border-2 p-5">
              <p className="font-bold">{teacher.qualification}</p>
              <p>{teacher.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
