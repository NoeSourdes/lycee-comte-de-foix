import { Galery } from "@/components/establishment/Galery";
import { Learn } from "@/components/establishment/Learn";
import { Strengths } from "@/components/establishment/Strengths";
import { Hero } from "@/components/Hero";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Page() {
  return (
    <MaxWidthWrapper className="my-20 space-y-32">
      <Hero
        badge="L’établissement"
        title="Lycée Comte de Foix : Cultiver les esprits pour réussir"
        description="Bienvenue sur notre page consacrée à l’enseignement, où nous sommes fiers d’offrir une expérience éducative complète et stimulante pour nos lycéens. Le programme académique du Lycée Comte de Foix est conçu avec soin pour encourager l’amour de l’apprentissage tout en consolidant une base solide de compétences essentielles et de connaissances approfondies. De la littérature et des mathématiques aux sciences, à la géographie et aux sciences sociales, notre programme est minutieusement élaboré pour éveiller la curiosité, stimuler la réflexion critique et encourager une exploration active."
      />
      <Strengths />
      <Learn />
      <Galery />
    </MaxWidthWrapper>
  );
}
