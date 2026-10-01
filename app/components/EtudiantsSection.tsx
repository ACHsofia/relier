import { useState } from "react";
import { Link } from "react-router-dom";
import photo2 from "../../imports/photo_2-1.jpg";

export default function EtudiantsSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="etudiants"
      className="relative bg-blue-50 py-12 md:py-20 px-4 md:px-8 z-20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 md:mb-12 rounded-lg overflow-hidden shadow-xl">
          <img
            src={photo2}
            alt="Campus IAE"
            className="w-full h-48 md:h-64 object-cover"
          />
        </div>

        {/* Titre cliquable avec flèche */}
        <div
          className="flex items-center justify-between cursor-pointer mb-8 md:mb-12"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 text-center flex-1">
            Les étudiants au centre du projet pour l'IAE
          </h2>
          <svg
            className={`w-8 h-8 text-blue-900 transition-transform duration-300 flex-shrink-0 ml-4 ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {/* Contenu dépliable */}
        {isOpen && (
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-blue-800 mb-4 underline">
                Une conviction simple : les réussites étudiantes
                doivent rester notre boussole
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  L'IAE doit continuer à placer les étudiants et
                  les participants au cœur de son projet. Leur
                  réussite académique, professionnelle et
                  personnelle n'est pas un sujet périphérique :
                  elle constitue notre responsabilité collective
                  et la finalité même de notre mission.
                </p>
                <p>
                  Si la qualité des formations est fondamentale,
                  cette ambition suppose également une capacité
                  d'écoute, d'accompagnement et de dialogue.
                  Elle exige de préserver ce qui fait
                  aujourd'hui une partie de l'identité de l'IAE
                  : une institution exigeante, mais accessible ;
                  structurée, mais attentive aux situations
                  individuelles ; reconnue, mais capable de
                  fonctionner à taille humaine.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-blue-900 mb-8 underline">
              Nos orientations concrètes
            </h3>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Gouvernance étudiante */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-xl font-bold text-blue-800 mb-4">
                  Gouvernance étudiante & dialogue
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-blue-600 flex-shrink-0">
                      -
                    </span>
                    <span>
                      Intégrer des étudiants à la gouvernance de l'IAE
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 flex-shrink-0">
                      -
                    </span>
                    <span>
                      Apporter des réponses concrètes et réalistes aux problématiques étudiantes
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 flex-shrink-0">
                      -
                    </span>
                    <span>
                      Respecter l'autonomie et l'indépendance des associations 
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 flex-shrink-0">
                      -
                    </span>
                    <span>
                      Développer des espaces d'échange
                      réguliers entre étudiants et alumni
                    </span>
                  </li>
                </ul>
              </div>

              {/* Accompagnement */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-xl font-bold text-blue-800 mb-4">
                  Accompagnement des parcours étudiants
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-blue-600 flex-shrink-0">
                      -
                    </span>
                    <span>
                      Attention accrue aux parcours
                      individuels et aux situations
                      particulières
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 flex-shrink-0">
                      -
                    </span>
                    <span>
                      Accompagnement renforcé et efficace à la recherche d'alternance et de stages
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 flex-shrink-0">
                      -
                    </span>
                    <span>
                      Refonte et adaptation du rythme de
                      l’alternance
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 flex-shrink-0">
                      -
                    </span>
                    <span>
                      Intégration des transformations
                      liées aux défis de l'anthropocène et de
                      l’IA.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Vie associative */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-xl font-bold text-blue-800 mb-4">
                  Vie associative
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-blue-600 flex-shrink-0">
                      -
                    </span>
                    <span>
                      Des associations soutenues par l'IAE en respectant leur autonomie
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 flex-shrink-0">
                      -
                    </span>
                    <span>
                      Mise en place d'interlocuteurs et de
                      procédures plus lisibles pour les projets
                      associatifs
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 flex-shrink-0">
                      -
                    </span>
                    <span>
                      Meilleure anticipation et coordination des
                      événements étudiants
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 flex-shrink-0">
                      -
                    </span>
                    <span>
                      Développement d'une logique de confiance
                      et de responsabilité partagée avec les
                      associations
                    </span>
                  </li>
                </ul>
              </div>

              {/* Équilibre & identité */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-xl font-bold text-blue-800 mb-4">
                  Équilibre & identité de l'IAE
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-blue-600 flex-shrink-0">
                      -
                    </span>
                    <span>
                      Préservation d'un fonctionnement à taille
                      humaine et d’un haut niveau d’exigence
                      académique
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 flex-shrink-0">
                      -
                    </span>
                    <span>
                      Développement de doubles diplômes à amU et
                      à l’international
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 flex-shrink-0">
                      -
                    </span>
                    <span>
                      Maintien d'un accompagnement de proximité
                      qui fait notre force
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 flex-shrink-0">
                      -
                    </span>
                    <span>
                      Consolidation d'une culture de dialogue,
                      de responsabilité et de cohérence
                      collective
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Link
                to="/page-complementaire-1"
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