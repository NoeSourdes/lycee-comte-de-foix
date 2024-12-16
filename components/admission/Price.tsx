import { Badge } from "../ui/badge";
import { Card } from "../ui/card";

export const Price = () => {
  const data = [
    {
      programme: "Seconde",
      age: "15-16 ans",
      fraisAnnuel: "1 800 €",
      fraisInscription: "150 €",
      fraisActivite: "50 €",
    },
    {
      programme: "Première",
      age: "16-17 ans",
      fraisAnnuel: "2 000 €",
      fraisInscription: "180 €",
      fraisActivite: "60 €",
    },
    {
      programme: "Terminale",
      age: "17-18 ans",
      fraisAnnuel: "2 200 €",
      fraisInscription: "200 €",
      fraisActivite: "70 €",
    },
  ];

  const data2 = [
    {
      1: "Études avant et après les cours",
      2: "120 € / mois",
    },
    {
      1: "Programme d’immersion linguistique",
      2: "60 € / semestre",
    },
    {
      1: "Transport (optionnel)",
      2: "80 € / mois",
    },
  ];
  return (
    <div className="space-y-16">
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <Badge className="bg-background">Les Frais</Badge>
        <h2 className="text-4xl font-bold text-center">Structure des Frais</h2>
        <p className="max-w-2xl text-center">
          Notre structure tarifaire est transparente et vise à rester
          compétitive dans le secteur de l’éducation. Les frais varient en
          fonction du programme, du niveau scolaire et des services
          supplémentaires choisis.
        </p>
      </div>
      <Card className="p-8 bg-background">
        <div className="border-2 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-left bg-blue-300 border-b-2">
                  <th className="p-5 border-r-2 whitespace-nowrap">
                    Programme
                  </th>
                  <th className="p-5 border-r-2 whitespace-nowrap">Âge</th>
                  <th className="p-5 border-r-2 whitespace-nowrap">
                    Frais Annuels
                  </th>
                  <th className="p-5 border-r-2 whitespace-nowrap">
                    Frais d&apos;Inscription
                  </th>
                  <th className="p-5 whitespace-nowrap">
                    Frais d&apos;Activité
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td
                      className={`p-5 border-r-2 ${
                        index !== data.length - 1 ? "border-b-2" : ""
                      }`}
                    >
                      {row.programme}
                    </td>
                    <td
                      className={`p-5 border-r-2 ${
                        index !== data.length - 1 ? "border-b-2" : ""
                      }`}
                    >
                      {row.age}
                    </td>
                    <td
                      className={`p-5 border-r-2 ${
                        index !== data.length - 1 ? "border-b-2" : ""
                      }`}
                    >
                      {row.fraisAnnuel}
                    </td>
                    <td
                      className={`p-5 border-r-2 ${
                        index !== data.length - 1 ? "border-b-2" : ""
                      }`}
                    >
                      {row.fraisInscription}
                    </td>
                    <td
                      className={`p-5 ${
                        index !== data.length - 1 ? "border-b-2" : ""
                      }`}
                    >
                      {row.fraisActivite}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Card>

      <Card className="p-8 bg-background">
        <div className="border-2 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th
                    colSpan={2}
                    className="p-5 bg-blue-300 text-left border-b-2"
                  >
                    Services Supplémentaires
                  </th>
                </tr>
              </thead>
              <tbody>
                {data2.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td
                      className={`p-5 border-r-2 ${
                        index !== data2.length - 1 ? "border-b-2" : ""
                      }`}
                    >
                      {row["1"]}
                    </td>
                    <td
                      className={`p-5 ${
                        index !== data2.length - 1 ? "border-b-2" : ""
                      }`}
                    >
                      {row["2"]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    </div>
  );
};
