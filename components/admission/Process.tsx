import { Badge } from "../ui/badge";
import { Card } from "../ui/card";

type Step = {
  id: number;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    id: 1,
    title: "Demande d'informations",
    description:
      "Soumettez une demande via notre site internet ou contactez directement notre bureau des admissions pour exprimer votre intérêt pour le Lycée Comte de Foix.",
  },
  {
    id: 2,
    title: "Visite de l’établissement",
    description:
      "Planifiez une visite personnalisée de notre lycée pour explorer le campus, rencontrer notre personnel et découvrir notre environnement d’apprentissage stimulant.",
  },
  {
    id: 3,
    title: "Dossier de candidature",
    description:
      "Complétez le formulaire d’inscription et fournissez les documents requis, incluant les bulletins scolaires, une copie de la pièce d’identité de votre enfant, et tout autre document académique pertinent.",
  },
  {
    id: 4,
    title: "Entretien avec les parents",
    description:
      "Nous valorisons l’implication des familles. Une rencontre avec notre équipe des admissions nous permet de comprendre les besoins de votre enfant et de nous assurer que notre établissement correspond à vos attentes.",
  },
  {
    id: 5,
    title: "Évaluation des élèves",
    description:
      "Pour certains niveaux, une évaluation peut être organisée afin de mieux comprendre le parcours académique et les compétences de votre enfant pour garantir un placement optimal.",
  },
  {
    id: 6,
    title: "Admission",
    description:
      "Une fois le processus terminé, vous recevrez une lettre officielle confirmant l’admission de votre enfant au Lycée Comte de Foix.",
  },
];

export const Process = () => {
  return (
    <div className="space-y-16">
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <Badge className="bg-background">Processus</Badge>
        <h2 className="text-4xl font-bold text-center">
          Processus d’Admission
        </h2>
        <p className="max-w-2xl text-center">
          Embarquez dans un parcours éducatif exceptionnel avec nous ! Le
          processus d’admission et d’inscription au Lycée Comte de Foix est la
          première étape pour offrir à votre adolescent une expérience
          d’apprentissage enrichissante et motivante.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index}>
            <Card className="max-w-20 h-20 flex items-center justify-center bg-destructive text-background relative">
              <p className="text-5xl font-bold">{step.id}</p>
              <div className="size-7 rounded-full border-2 bg-background -bottom-4 left-1/2 -translate-x-1/2 absolute" />
            </Card>
            <div className="h-12 w-0.5 bg-black ml-[40px]"></div>
            <Card className="flex flex-col bg-background md:h-80 p-8 relative">
              <h3 className="text-2xl font-bold">{step.title}</h3>
              <p className="mt-2">{step.description}</p>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
