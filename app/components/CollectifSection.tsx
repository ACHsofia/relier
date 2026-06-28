import { useState } from "react";
import photo5 from "../../imports/photo_5-1.jpg";

export default function CollectifSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="collectif"
      className="relative bg-blue-50 py-12 md:py-20 px-4 md:px-8 z-60"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 md:mb-12 rounded-lg overflow-hidden shadow-xl">
          <img
            src={photo5}
            alt="Architecture IAE"
            className="w-full h-48 md:h-64 object-cover"
          />
        </div>

        {/* Titre cliquable avec flèche */}
        <div
          className="flex items-center justify-between cursor-pointer mb-8 md:mb-12"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 text-center flex-1">
            Une culture du collectif: instances, personnel
            enseignant et administratifs
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
            Des instances vivantes et pleinement légitimes
          </h3>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Les instances de l'IAE - Conseil d'Institut,
              CODIR, groupes de travail - doivent être de
              véritables lieux de réflexion, de concertation et
              de décision. Nous croyons à des espaces de
              délibération stables, légitimes, clairement
              articulés avec la direction et capables de
              produire des échanges utiles et structurants, sans
              multiplication des groupes de travail.
            </p>
            <p>
              Par ailleurs, le fonctionnement de l'IAE repose
              quotidiennement sur l'engagement des équipes
              administratives et techniques. Leur expertise,
              leur connaissance fine des formations, des
              procédures et des étudiants constituent une
              ressource essentielle pour l'institution. Une
              gouvernance efficace et collective suppose aussi
              une meilleure reconnaissance du rôle des BIATSS,
              une meilleure circulation de l'information et une
              association plus précoce aux transformations qui
              impactent directement leur travail.
            </p>
            <p>
              Cette question de la gouvernance nous paraît
              aujourd'hui centrale pour l'avenir de l'IAE. Elle
              devra être traitée collectivement par la future
              direction avec le Conseil d'Institut, les
              responsables de programme, les équipes
              administratives et l'ensemble des collègues qui
              souhaitent contribuer à cette réflexion.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-blue-900 mb-8 underline">
          Nos orientations concrètes
        </h3>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Conseil d'Institut */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="text-xl font-bold text-blue-800 mb-4">
              Conseil d'Institut
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Redonner au Conseil d'Institut un rôle
                  stratégique réel
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Renforcer la qualité des débats et des
                  échanges collectifs
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Améliorer la circulation des informations en
                  amont des décisions
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Permettre aux élus d'exercer pleinement leur
                  mandat de représentation
                </span>
              </li>
            </ul>
          </div>

          {/* Organisation et pilotage */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="text-xl font-bold text-blue-800 mb-4">
              Organisation et pilotage
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Communiquer plus en amont les ordres du jour
                  et les priorités
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Anticiper la communication des documents aux
                  membres du Conseil
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Ouvrir ponctuellement les travaux du Conseil à
                  des partenaires pertinents
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Produire des comptes rendus au-delà des
                  relevés de décision
                </span>
              </li>
            </ul>
          </div>

          {/* Fonctionnement collectif */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="text-xl font-bold text-blue-800 mb-4">
              Fonctionnement collectif incluant E.C. et BIATSS
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Construire des espaces de délibération
                  pérennes et légitimes
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Favoriser des logiques de co-construction
                  plutôt que de validation a posteriori
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Développer une culture du dialogue incluant
                  E.C. et BIATSS
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Développer une meilleure lisibilité du
                  fonctionnement du CODIR
                </span>
              </li>
            </ul>
          </div>

          {/* Vision de la gouvernance */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="text-xl font-bold text-blue-800 mb-4">
              Vision de la gouvernance
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Concilier gouvernance collégiale et capacité
                  de décision
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Construire des arbitrages partagés et
                  soutenables avec les E.C. et les BIATSS
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Renforcer la confiance entre direction, E.C.,
                  BIATSS, et instances
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Préserver une gouvernance claire, lisible et
                  responsable
                </span>
              </li>
            </ul>
          </div>
        </div>
        </div>
        )}
      </div>
    </section>
  );
}