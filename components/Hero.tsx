import Image from "next/image";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

interface HeroProps {
  badge: string;
  title: string;
  description: string;
}

export const Hero = (props: HeroProps) => {
  return (
    <Card className="relative w-full flex items-center justify-around bg-background p-8 py-20 gap-10 max-lg:flex-col max-lg:py-12">
      <Image
        src="/svg/hero-icon.svg"
        alt="Hero-icon"
        width={100}
        height={100}
        className="absolute top-0 left-0"
      />
      <div className="space-y-5">
        <Badge className="bg-background">{props.badge}</Badge>
        <h2 className="text-4xl font-bold">{props.title}</h2>
      </div>
      <p className="max-w-xl">{props.description}</p>
    </Card>
  );
};
