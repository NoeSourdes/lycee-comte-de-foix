import Image from "next/image";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";

const subjects = [
  {
    title: "Langues et Littérature",
    description:
      "Étude approfondie de la langue française et des langues étrangères, incluant la lecture, l’écriture, l’analyse de textes, et l’expression orale.",
  },
  {
    title: "Mathématiques",
    description:
      "Apprentissage des concepts avancés, comme l’algèbre, la géométrie, les probabilités, et la résolution de problèmes complexes.",
  },
  {
    title: "Sciences",
    description:
      "Exploration des sciences physiques, chimiques et biologiques à travers des expériences en laboratoire et des projets pratiques.",
  },
  {
    title: "Histoire-Géographie",
    description:
      "Développement d’une compréhension des dynamiques historiques et géographiques mondiales, ainsi que des cultures et des sociétés.",
  },
  {
    title: "Arts Appliqués",
    description:
      "Encouragement à la créativité à travers des projets artistiques, incluant le dessin, la peinture, et le design numérique.",
  },
  {
    title: "Éducation Physique et Sportive",
    description:
      "Promotion d’une vie saine grâce à des activités physiques variées, des sports collectifs, et des entraînements adaptés.",
  },
];

export const Learn = () => {
  return (
    <div className="space-y-16">
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <Badge className="bg-background">Nos fonctionnalités</Badge>
        <h2 className="text-4xl font-bold text-center">
          Ce que les élèves apprennent
        </h2>
        <p className="max-w-2xl text-center">
          Au Lycée Comte de Foix, nous nous efforçons de cultiver un amour de
          l’apprentissage tout en dotant les élèves des compétences essentielles
          pour leur future réussite. Nos programmes académiques couvrent une
          grande variété de matières, permettant aux élèves de développer une
          base solide et de découvrir leurs centres d’intérêt. Parmi les
          domaines d’apprentissage, on trouve :
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {subjects.map((subject, index) => (
          <Card
            key={index}
            className="flex flex-col items-center bg-background p-8 relative"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-52 border-b-2 border-x-2 rounded-b-lg bg-destructive" />
            <Image
              src={`/img/learn/${index + 1}.png`}
              width={200}
              height={200}
              alt="Learn"
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
