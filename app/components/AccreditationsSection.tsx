import { useState } from "react";
import { Link } from "react-router-dom";
import photo6 from "../../imports/photo_6-1.jpg";

export default function AccreditationsSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="accreditations"
      className="relative bg-white py-12 md:py-20 px-4 md:px-8 z-50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 md:mb-12 rounded-lg overflow-hidden shadow-xl">
          <img
            src={photo6}
            alt="Bâtiment IAE"
            className="w-full h-48 md:h-64 object-cover"
          />
        </div>

        {/* Titre cliquable avec flèche */}
        <div
          className="flex items-center justify-between cursor-pointer mb-8 md:mb-12"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 text-center flex-1">
            Notre identité et notre rayonnement : des
            accréditations au service d'une stratégie
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

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-blue-800 mb-4 underline">
            Les accréditations au service d'un projet
          </h3>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              L'accréditation EQUIS obtenue depuis 1999 et
              récemment renouvelée pour cinq ans, constitue une
              reconnaissance importante de la qualité académique
              et institutionnelle de l'IAE d'Aix. L'engagement
              actuel dans la démarche AACSB doit permettre de
              renforcer encore notre visibilité et notre
              rayonnement international.
            </p>
            <p>
              Mais les accréditations ne doivent jamais devenir
              une finalité autonome ou une logique déconnectée
              du terrain. Elles doivent rester des outils au
              service d'une stratégie clairement définie :
              amélioration continue de la qualité académique,
              développement raisonné de l'international,
              renforcement de l'impact de la recherche,
              attractivité des formations et visibilité des
              diplômés.
            </p>
            <p>
              La stratégie de l'IAE doit donc précéder les
              accréditations et leur donner du sens. Les
              standards EQUIS et AACSB peuvent constituer des
              cadres structurants puissants à condition qu'ils
              soient mis au service d'une vision cohérente de
              l'IAE : une école universitaire de management
              exigeante, accessible, ancrée dans la recherche et
              attentive à son impact scientifique, économique et
              sociétal.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-blue-900 mb-8 underline">
          Nos orientations concrètes
        </h3>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Politique accréditation */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="text-xl font-bold text-blue-800 mb-4">
              Politique d'accréditation
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Poursuivre activement les démarches AACSB et
                  EQUIS
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Capitaliser sur l'expertise et le savoir-faire
                  de l'équipe qualité
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Mieux articuler stratégie institutionnelle et
                  standards internationaux
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Fédérer les équipes autour des démarches EQUIS
                  et AACSB
                </span>
              </li>
            </ul>
          </div>

          {/* Amélioration continue */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="text-xl font-bold text-blue-800 mb-4">
              Amélioration continue
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Renforcer la culture qualité à l'IAE
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Utiliser les standards EQUIS et AACSB comme
                  leviers d'amélioration continue
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Développer des indicateurs de pilotage
                  partagés et lisibles
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Structurer un suivi de l'impact des
                  formations, de la recherche et des
                  partenariats
                </span>
              </li>
            </ul>
          </div>

          {/* Appropriation */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="text-xl font-bold text-blue-800 mb-4">
              Appropriation
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Renforcer l'appropriation collective des
                  démarches accréditations
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Développer une meilleure anticipation des
                  échéances et des productions attendues
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Améliorer l'information et la transparence
                  autour des enjeux et des objectifs des
                  accréditations
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Développer des espaces réguliers d'échange et
                  de partage de bonnes pratiques
                </span>
              </li>
            </ul>
          </div>

          {/* Valorisation */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="text-xl font-bold text-blue-800 mb-4">
              Valorisation
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Mieux communiquer auprès des étudiants, alumni
                  et partenaires sur la signification et les
                  exigences des accréditations
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Valoriser davantage les actions déjà conformes
                  aux attentes AACSB et EQUIS
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Faire des accréditations un levier
                  d'attractivité internationale pour l'IAE
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Développer une communication plus visible
                  autour des bénéfices concrets des
                  accréditations
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/page-complementaire-4"
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