"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  parentName: z.string().min(2, "Le nom doit avoir au moins 2 caractères."),
  email: z.string().email("Adresse email invalide."),
  phone: z.string().min(10, "Numéro de téléphone invalide."),
  studentName: z.string().min(2, "Le nom doit avoir au moins 2 caractères."),
  studentAge: z.string().min(1, "L'âge de l'élève est requis."),
  programInterest: z.string().min(1, "Le programme d'intérêt est requis."),
  message: z.string().optional(),
});

export const ComponentForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      parentName: "",
      email: "",
      phone: "",
      studentName: "",
      studentAge: "",
      programInterest: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 font-bold"
      >
        <div className="flex items-center gap-6 w-full max-md:flex-col">
          <div className="flex flex-col gap-6 w-full">
            <FormField
              control={form.control}
              name="parentName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom du Parent</FormLabel>
                  <FormControl>
                    <Input placeholder="Entrez le nom du parent" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Adresse Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Entrez votre adresse email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Numéro de Téléphone</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Entrez votre numéro de téléphone"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-6 w-full">
            <FormField
              control={form.control}
              name="studentName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom de l&apos;Élève</FormLabel>
                  <FormControl>
                    <Input placeholder="Entrez le nom de l'élève" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="studentAge"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Âge de l&apos;Élève</FormLabel>
                  <FormControl>
                    <Input placeholder="Entrez l'âge de l'élève" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="programInterest"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Programme d&apos;Intérêt</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez un programme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="math">Seconde</SelectItem>
                        <SelectItem value="science">Première</SelectItem>
                        <SelectItem value="art">Terminale</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Entrez votre message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className=" w-full">
          Envoyer
        </Button>
      </form>
    </Form>
  );
};
