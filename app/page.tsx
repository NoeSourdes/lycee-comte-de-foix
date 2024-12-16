import { HeroSection } from "@/components/home/HeroSection";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <MaxWidthWrapper className="my-20">
      <HeroSection />
    </MaxWidthWrapper>
  );
}
