import { MissionAndVision } from "@/components/About/MissionAndVision";
import { Parcours } from "@/components/About/Parcours";
import { Realisation } from "@/components/About/Realisation";
import { Teachers } from "@/components/About/Teachers";
import { Hero } from "@/components/Hero";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Page() {
  return (
    <MaxWidthWrapper className="my-20 space-y-32">
      <Hero
        badge="À propos de nous"
        title="Bienvenue au Lycée Comte de Foix"
        description="Un établissement de référence dédié à offrir un environnement stimulant et enrichissant pour ses élèves. Avec un engagement envers l’excellence dans l’éducation secondaire, nous croyons en la formation d’esprits curieux et en la construction de bases solides pour une réussite académique et personnelle durable. Notre approche globale favorise le développement intellectuel, social, émotionnel et physique, garantissant que chaque élève atteint son plein potentiel."
      />
      <MissionAndVision />
      <Realisation />
      <Parcours />
      <Teachers />
    </MaxWidthWrapper>
  );
}
