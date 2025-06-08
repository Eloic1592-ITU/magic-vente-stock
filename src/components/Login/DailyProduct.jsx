import { useEffect, useState } from "react";
import { getProduitDuJour } from "../../services/api";

function DailyProduct() {
  const [produit, setProduit] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProduitDuJour()
      .then((data) => {
        setProduit(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Erreur lors du chargement du produit.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center">Chargement...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="relative flex flex-col items-center">
      {/* image et libellé du Produit du jour */}
      <img
        // src = { produit.image }
        src="/src/assets/pantalon zook.png"
        alt={produit.libelle}
        className="z-10 mt-20"
      />

      {/* Texte par-dessus */}
      <div
        className="bg-cover bg-no-repeat bg-center w-[713px] h-[463px] -mt-44 rounded-sm flex flex-col items-center justify-center text-white p-4"
        style={{
          backgroundImage: "url('/src/assets/black pattern.png')",
        }}
      >
        <div>
          <h1 className="text-sm uppercase">Produit du jour</h1>
          <h2 className="text-4xl font-bold">{produit.libelle}</h2>
          <p>au prix de {produit.prix} Gondariar</p>
          <p>quantité en stock {produit.quantiteEnStock} Unité</p>
        </div>
      </div>
    </div>
  );
}

export default DailyProduct;
