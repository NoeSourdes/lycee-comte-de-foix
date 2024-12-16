import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Card } from "../ui/card";

interface GaleryComponentProps {
  images: string[];
  title: string;
  description: string;
}

export const GaleryComponent = (props: GaleryComponentProps) => {
  return (
    <Card className="flex flex-col bg-background p-8 relative">
      <div className="absolute -top-28 left-10 right-10 h-52 flex items-center justify-center gap-10">
        <Carousel className="">
          <CarouselContent className="">
            {props.images.map((image, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/3 lg:basis-1/4 flex justify-center items-center"
              >
                <Image
                  src={image}
                  alt="Galery"
                  height={250}
                  width={250}
                  className="object-cover rounded-[10px] border"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="space-y-5 mt-5">
        <h3 className="text-xl font-bold mt-20">{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </Card>
  );
};
