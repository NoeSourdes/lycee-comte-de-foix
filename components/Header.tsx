"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ArrowRight, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MaxWidthWrapperNavbar from "./MaxWidthWrapperNavbar";

const array = [
  {
    name: "Accueil",
    href: "/",
  },
  {
    name: "À propos de nous",
    href: "/about",
  },
  {
    name: "L'établissement",
    href: "/establishment",
  },
  {
    name: "Admissions",
    href: "/admissions",
  },
  {
    name: "Vie étudiante",
    href: "/student-life",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export const Header = () => {
  const pathname = usePathname();

  return (
    <MaxWidthWrapperNavbar className="flex flex-col gap-3">
      <div className=" w-full border-2 rounded-lg h-10 bg-blue-300 flex justify-center items-center gap-3 overflow-hidden p-0">
        <Image
          src="/img/Abstract.webp"
          alt="Abstract_logo"
          width={50}
          height={50}
          className="mb-7 max-sm:hidden"
        />
        <p className="max-sm:text-xs">
          Les admissions sont ouvertes, prenez votre place maintenant
        </p>
        <ArrowRight className="max-sm:hidden" />
        <Image
          src="/img/Abstract.webp"
          alt="Abstract_logo"
          width={30}
          height={30}
          className="mt-7 max-sm:hidden"
        />
      </div>
      <div className="w-full h-16 rounded-lg border-2 flex items-center justify-between pl-3 overflow-hidden">
        <div className="flex items-center gap-2">
          <img src="/img/logo.webp" alt="logo" width={50} height={50} />
          <p className="max-sm:text-xs font-bold">LYCÉE COMTE DE FOIX</p>
        </div>
        <div className="flex items-center h-full max-xl:hidden">
          {array.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "border-l-2 h-full flex items-center justify-center px-5 transition-all hover:bg-blue-100",
                pathname === item.href ? "bg-blue-300 hover:bg-blue-300" : ""
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="xl:hidden h-full">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="noShadow"
                className="h-full border-l-2 border-r-0 border-t-0 border-b-0 rounded-none"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  Retrouvez ici tous les liens de navigation
                </SheetDescription>
              </SheetHeader>
              <div className="grid mt-5 border-2 rounded-lg overflow-hidden">
                {array.map((item, index) => (
                  <SheetClose asChild key={index} className="">
                    <Link
                      href={item.href}
                      className={cn(
                        buttonVariants({
                          variant: "noShadow",
                          size: "default",
                        }),
                        "h-16 border-l-0 border-t-0 border-r-0 rounded-none",
                        pathname === item.href
                          ? "bg-blue-300 hover:bg-blue-300"
                          : " bg-white hover:bg-blue-100",
                        index !== array.length - 1 ? "border-b-2" : "border-b-0"
                      )}
                    >
                      {item.name}
                    </Link>
                  </SheetClose>
                ))}
              </div>
              <SheetFooter className="mt-5">
                <SheetClose asChild>
                  <Button>Fermer le menu</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </MaxWidthWrapperNavbar>
  );
};
