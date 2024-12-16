import { Form } from "@/components/contact/Form";
import { Hero } from "@/components/Hero";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Page() {
  return (
    <MaxWidthWrapper className="my-20 space-y-32">
      <Hero
        badge="Contactez-nous"
        title="N'hésitez pas à vous connecter avec nous"
        description="Nous valorisons la communication ouverte et sommes disponibles pour répondre à toutes vos questions. N’hésitez pas à nous contacter via l’un des moyens suivants :"
        contact
      />
      <Form />
    </MaxWidthWrapper>
  );
}
