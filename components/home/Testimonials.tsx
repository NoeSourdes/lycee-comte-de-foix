import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "../ui/badge";

interface Review {
  name: string;
  rating: number;
  comment: string;
}

const reviews: Review[] = [
  {
    name: "Sofía M",
    rating: 5,
    comment:
      "Le Lycée Comte de Foix est devenu une seconde maison pour mon fils. L’équipe pédagogique attentionnée et les programmes variés l’ont motivé à venir au lycée chaque jour.",
  },
  {
    name: "Lucas R",
    rating: 5,
    comment:
      "Choisir le Lycée Comte de Foix pour ma fille a été la meilleure décision. Elle s’épanouit dans un environnement à la fois stimulant et bienveillant.",
  },
  {
    name: "Emma T",
    rating: 5,
    comment:
      "Les progrès de mon fils au Lycée Comte de Foix sont remarquables. Je suis reconnaissante envers les enseignants dévoués.",
  },
  {
    name: "Julio D",
    rating: 5,
    comment:
      "Un cadre exceptionnel et une équipe pédagogique au top. Ma fille est plus motivée que jamais !",
  },
  {
    name: "Carla S",
    rating: 4,
    comment:
      "Très satisfaite dans l’ensemble. Quelques points à améliorer sur l’organisation, mais sinon tout est parfait.",
  },
];

const Stars = ({ count }: { count: number }) => {
  return (
    <div>
      {Array.from({ length: count }, (_, i) => (
        <span key={i} style={{ color: "#FD0" }}>
          ★
        </span>
      ))}
    </div>
  );
};

export const Testimonials = () => {
  return (
    <div className="space-y-16">
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <Badge className="bg-background">Leurs mots chaleureux</Badge>
        <h2 className="text-4xl font-bold">Nos Témoignages</h2>
        <p className="max-w-2xl text-center">
          Nos témoignages reflètent sincèrement l’environnement stimulant et
          bienveillant que nous offrons, où les lycéens s’épanouissent à la fois
          sur le plan académique et personnel.
        </p>
      </div>
      <div className="w-full">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {reviews.map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-background h-96">
                    <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                      <div className="size-16 rounded-full border-2 bg-blue-100"></div>
                      <p className="text-center mt-4 font-bold">
                        {reviews[index].name}
                      </p>
                      <Stars count={reviews[index].rating} />
                      <p className="text-center mt-4">
                        {reviews[index].comment}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};
