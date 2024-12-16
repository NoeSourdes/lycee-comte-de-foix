import { Hero } from "@/components/Hero";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Activities } from "@/components/student-life/Activities";
import { Event } from "@/components/student-life/Event";
import { Support } from "@/components/student-life/Support";

export default function Page() {
  return (
    <MaxWidthWrapper className="my-20 space-y-32">
      <Hero
        badge="Enrichir la Vie des Élèves"
        title="Adopter l'apprentissage avec découverte et joie"
        description="Bienvenue sur notre page dédiée à la vie lycéenne, où chaque journée est rythmée par des expériences enrichissantes et des aventures qui donnent vie à l’apprentissage. Au Lycée Comte de Foix, nous croyons que l’éducation va bien au-delà des manuels scolaires. Nous nous efforçons de créer un environnement global et engageant qui soutient chaque aspect du développement de nos élèves."
      />
      <Activities />
      <Event />
      <Support />
    </MaxWidthWrapper>
  );
}
