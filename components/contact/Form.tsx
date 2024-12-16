import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import { ComponentForm } from "./ComponentForm";

export const Form = () => {
  return (
    <div className="space-y-16">
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <Badge className="bg-background">Formulaire de Contact</Badge>
        <h2 className="text-4xl font-bold text-center">
          Informations sur l’Élève
        </h2>
        <p className="max-w-2xl text-center">
          Si vous avez des questions spécifiques ou souhaitez demander plus
          d’informations sur le Lycée Comte de Foix, veuillez remplir le
          formulaire de contact ci-dessous. Merci de fournir les informations
          suivantes afin que nous puissions mieux comprendre vos besoins :
        </p>
      </div>
      <Card className="bg-background p-8">
        <ComponentForm />
      </Card>
    </div>
  );
};
