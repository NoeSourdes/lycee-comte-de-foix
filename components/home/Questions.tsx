import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "../ui/badge";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Quels sont les horaires du Lycée Comte de Foix ?",
    answer:
      "Notre lycée est ouvert de 8h00 à 18h00, du lundi au vendredi. Nous proposons également des options de soutien et d’études surveillées pour les élèves nécessitant une prise en charge avant ou après les heures de cours.",
  },
  {
    question: "Une tenue est-elle obligatoire pour les élèves ?",
    answer:
      "Non, aucune tenue obligatoire n'est imposée aux élèves. Cependant, une tenue correcte est exigée dans l'enceinte du lycée.",
  },
  {
    question: "Quelles activités extra-scolaires sont proposées ?",
    answer:
      "Le lycée propose des activités sportives, culturelles, et artistiques, comme le théâtre, le football, et les clubs de sciences.",
  },
  {
    question:
      "Comment le lycée gère-t-il les allergies alimentaires et les régimes spécifiques ?",
    answer:
      "Le service de restauration prend en compte les allergies alimentaires et les régimes spécifiques sur présentation d’un certificat médical.",
  },
  {
    question: "Quel est le ratio enseignants/élèves au Lycée Comte de Foix ?",
    answer:
      "Le ratio est d'environ 1 enseignant pour 15 élèves, garantissant un suivi personnalisé et une attention individuelle.",
  },
  {
    question: "Comment le lycée gère-t-il la discipline et le comportement ?",
    answer:
      "Le lycée applique un règlement intérieur strict, basé sur le respect et la responsabilisation des élèves. Des conseils de discipline peuvent être organisés en cas de non-respect des règles.",
  },
  {
    question: "Comment puis-je inscrire mon enfant au Lycée Comte de Foix ?",
    answer:
      "L'inscription se fait en ligne via le site officiel du lycée ou directement au secrétariat de l'établissement.",
  },
  {
    question:
      "Quels sont les outils pédagogiques et technologiques utilisés au Lycée Comte de Foix ?",
    answer:
      "Le lycée utilise des tableaux interactifs, des tablettes numériques, et des plateformes éducatives en ligne pour favoriser un apprentissage moderne et efficace.",
  },
];

export const Questions = () => {
  return (
    <div className="space-y-16">
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <Badge className="bg-background">
          Solutions pour vos interrogations{" "}
        </Badge>
        <h2 className="text-4xl font-bold text-center">
          Questions Fréquemment Posées
        </h2>
        <p className="max-w-2xl text-center">
          Retrouvez ici toutes les informations essentielles dans notre section
          FAQ, conçue pour répondre aux questions les plus fréquentes et vous
          aider à prendre des décisions éclairées pour l’éducation de votre
          enfant au Lycée Comte de Foix.
        </p>
      </div>
      <div className="flex items-start gap-4 max-md:flex-col w-full">
        <div className="flex flex-col gap-4 md:w-1/2 w-full">
          {faqData.slice(0, 4).map((item, index) => (
            <Accordion
              key={index}
              className="w-full lg:w-[unset]"
              type="single"
              collapsible
            >
              <AccordionItem className=" max-w-full" value={`item-${index}`}>
                <AccordionTrigger className="text-start h-20">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-start">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
        <div className="flex flex-col gap-4  md:w-1/2 w-full">
          {faqData.slice(4, 8).map((item, index) => (
            <Accordion
              key={index}
              className="w-full lg:w-[unset]"
              type="single"
              collapsible
            >
              <AccordionItem className=" max-w-full" value={`item-${index}`}>
                <AccordionTrigger className="text-start h-20">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-start">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};
