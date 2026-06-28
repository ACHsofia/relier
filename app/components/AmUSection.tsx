import { useState } from "react";
import { Link } from "react-router-dom";
import photo3 from "../../imports/photo_3bis-1.jpg";

export default function AmUSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="amu"
      className="relative bg-blue-50 py-12 md:py-20 px-4 md:px-8 z-40"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 md:mb-12 rounded-lg overflow-hidden shadow-xl">
          <img
            src={photo3}
            alt="amU IAE Aix"
            className="w-full h-48 md:h-64 lg:h-80 object-cover object-top"
          />
        </div>

        {/* Titre cliquable avec flèche */}
        <div
          className="flex items-center justify-between cursor-pointer mb-8 md:mb-12"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 text-center flex-1">
            Un IAE pleinement inscrit dans amU sans renoncer à son
            identité
          </h2>
          <svg
            className={`w-8 h-8 text-blue-900 transition-transform duration-300 flex-shrink-0 ml-4 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* Contenu dépliable */}
        {isOpen && (
          <div>

        <div className="bg-blue-50 rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-blue-800 mb-4 underline">
            Faire de notre ancrage universitaire une véritable
            force stratégique
          </h3>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Nous avons la chance d'appartenir à Aix-Marseille
              Université, une université d'envergure internationale qui constitue un écosystème académique,
              scientifique et institutionnel d'une richesse
              exceptionnelle. Par sa taille, sa diversité
              disciplinaire, son ouverture internationale et sa
              capacité de transformation, amU représente une
              opportunité stratégique majeure pour l'IAE.
            </p>
            <p>
              Nous ne tirons probablement pas encore tout le
              parti possible de cet environnement.
            </p>
            <p>
              L'enjeu pour l'IAE comme pour amU n'est pas de
              diluer notre identité dans celle de l'université.
              L'enjeu est au contraire de mieux mobiliser les
              ressources, les réseaux, les financements et les
              expertises qu'amU peut offrir afin de renforcer
              notre singularité, notre visibilité et notre
              capacité d'action.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-blue-900 mb-8 underline">
          Nos orientations concrètes
        </h3>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Relations avec amU */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="text-xl font-bold text-blue-800 mb-4">
              Relations avec amU
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Renforcer les liens stratégiques entre l'IAE
                  et la gouvernance d'amU
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Mieux accompagner les projets de l'IAE dans
                  les dispositifs universitaires
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Développer une meilleure lisibilité des
                  opportunités offertes par amU
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Consolider la place de l'IAE dans les grandes
                  orientations universitaires
                </span>
              </li>
            </ul>
          </div>

          {/* International & interdisciplinarité */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="text-xl font-bold text-blue-800 mb-4">
              International & interdisciplinarité
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Développer les coopérations liées à CIVIS et
                  aux partenaires internationaux d'amU
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Renforcer les passerelles avec les autres
                  composantes d'amU
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Développer des projets transdisciplinaires et
                  des doubles diplômes
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Accroître l'attractivité internationale des
                  programmes
                </span>
              </li>
            </ul>
          </div>

          {/* Financements */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="text-xl font-bold text-blue-800 mb-4">
              Financements & développement
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Mobiliser davantage les financements AMIDEX et
                  appels à projets
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Soutenir les projets pédagogiques et
                  scientifiques transversaux
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Développer les mobilités internationales
                  entrantes et sortantes
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Renforcer les partenariats institutionnels et
                  académiques
                </span>
              </li>
            </ul>
          </div>

          {/* Identité */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="text-xl font-bold text-blue-800 mb-4">
              Identité & stratégie
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Cultiver l'identité propre de l'IAE au sein
                  d'amU
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Transformer l'ancrage universitaire en
                  avantage stratégique
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Renforcer la cohérence entre stratégie IAE et
                  stratégie amU
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Consolider la visibilité académique et
                  institutionnelle de l'IAE
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/page-complementaire-3"
            className="inline-block text-red-600 font-semibold text-lg hover:text-red-700 hover:underline transition"
          >
            Pour aller plus loin…
          </Link>
        </div>
        </div>
        )}
      </div>
    </section>
  );
}