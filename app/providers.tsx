import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <div className="size-full py-3">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
