import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
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
      <Card className="bg-background p-8 relative">
        <div className="flex items-center gap-3 absolute -top-5 left-1/2 -translate-x-1/2">
          <Button size="icon" className="bg-destructive text-background">
            <FaFacebookF />
          </Button>
          <Button size="icon" className="bg-destructive text-background">
            <RiTwitterXLine />
          </Button>
          <Button size="icon" className="bg-destructive text-background">
            <FaLinkedinIn />
          </Button>
        </div>
        <div className="mt-5">
          <ComponentForm />
        </div>
      </Card>
    </div>
  );
};
