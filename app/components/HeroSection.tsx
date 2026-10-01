import photo1 from "../../imports/photo_1-1.jpg";

export default function HeroSection() {
  return (
    <section className="sticky top-0 min-h-screen flex flex-col items-center justify-center px-8 py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${photo1})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-blue-800/70"></div>
      </div>

      <p className="absolute top-4 md:top-8 left-0 right-0 text-center text-base md:text-xl lg:text-2xl text-white leading-relaxed drop-shadow-md z-10 px-4 md:px-8">
        IAE Aix-Marseille : élections du Conseil d'Institut 
      </p>

      <div className="relative z-10 max-w-4xl text-center space-y-4 md:space-y-6 px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 drop-shadow-lg">
          Liste RELIER
        </h1>

        <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white/90 drop-shadow-md mb-8 md:mb-12">
          Représentée par Cécile BOZZO
        </p>

        <div className="mt-12 md:mt-20 pt-8 md:pt-12">
          <p className="text-sm md:text-base lg:text-lg text-white leading-relaxed drop-shadow-md">
            Pour un IAE ancré dans la{" "}
            <span className="text-base md:text-lg lg:text-xl font-bold">
              R
            </span>
            echerche, l'
            <span className="text-base md:text-lg lg:text-xl font-bold">
              E
            </span>
            xcellence, la{" "}
            <span className="text-base md:text-lg lg:text-xl font-bold">
              L
            </span>
            égitimité universitaire et l'
            <span className="text-base md:text-lg lg:text-xl font-bold">
              I
            </span>
            nternational au service des{" "}
            <span className="text-base md:text-lg lg:text-xl font-bold">
              E
            </span>
            tudiants et du{" "}
            <span className="text-base md:text-lg lg:text-xl font-bold">
              R
            </span>
            ayonnement collectif.
          </p>
        </div>
      </div>
    </section>
  );
}