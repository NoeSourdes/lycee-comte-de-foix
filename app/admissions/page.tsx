import { Price } from "@/components/admission/Price";
import { Process } from "@/components/admission/Process";
import { Hero } from "@/components/Hero";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Page() {
  return (
    <MaxWidthWrapper className="my-20 space-y-32">
      <Hero
        badge="Admission"
        title="Rejoignez notre famille de lycéens"
        description="Au Lycée Comte de Foix, nous vous invitons à embarquer dans un parcours éducatif enrichissant et motivant pour votre adolescent. Notre processus d’admission est conçu pour être clair, simple et accessible. Découvrez notre guide étape par étape pour intégrer notre lycée."
      />
      <Process />
      <Price />
    </MaxWidthWrapper>
  );
}
