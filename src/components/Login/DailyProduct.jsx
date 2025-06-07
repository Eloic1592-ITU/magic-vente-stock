function DailyProduct() {
  return (
    <div className="relative flex flex-col items-center">
      {/* Pantalon par-dessus */}
      <img
        src="/src/assets/pantalon zook.png"
        alt="Pantalon Zouk"
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
          <h2 className="text-4xl font-bold">Pontalon Zouk</h2>
          <p>au prix de 50€</p>
          <p>quantité en stock 34</p>
        </div>
      </div>
    </div>
  );
}

export default DailyProduct;
