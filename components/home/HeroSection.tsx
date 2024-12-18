import Image from "next/image";
import { Card } from "../ui/card";

export const HeroSection = () => {
  const data = [
    { category: "Étudiants déjà accueillis", value: "+7000" },
    { category: "Années d'expérience", value: "+34" },
    { category: "De taux de reussite au BAC 2023", value: "100%" },
  ];

  return (
    <div className="flex items-center gap-14 max-lg:flex-col">
      <div className="relative">
        <Image
          src="/img/lycee.jpg"
          alt="Hero"
          width={500}
          height={500}
          className="border-8 border-blue-400"
        />
        <div className="absolute inset-[3px] border-2"></div>
        <div className="size-6 border-2 bg-background rounded-full absolute -top-1 -left-1"></div>
        <div className="size-6 border-2 bg-background rounded-full absolute -top-1 -right-1"></div>
        <div className="size-6 border-2 bg-background rounded-full absolute -bottom-1 -left-1"></div>
        <div className="size-6 border-2 bg-background rounded-full absolute -bottom-1 -right-1"></div>
      </div>
      <div className="lg:w-1/2 space-y-5">
        <h4 className="underline max-lg:text-center">
          Bienvenue au Lycéé Comte de Foix
        </h4>
        <h1 className="text-4xl font-bold max-lg:text-center">
          Ensemble, vers l’excellence{" "}
          <span className="text-blue-500">scolaire</span> et{" "}
          <span className="text-blue-500">humaine</span>.
        </h1>
        <h3 className="max-lg:text-center">
          Au Lycée Comte de Foix, nous allions excellence académique et
          développement humain pour offrir à chaque élève les outils nécessaires
          pour réussir et s’épanouir. Notre engagement est de former des esprits
          curieux et ambitieux, prêts à relever les défis de demain dans un
          environnement bienveillant et inspirant.
        </h3>
        <Card className="flex items-center p-5 gap-5 shadow-blue">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col gap-1">
              <p className="text-3xl font-bold">{item.value}</p>
              <p>{item.category}</p>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
};
