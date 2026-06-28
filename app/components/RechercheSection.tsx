import { useState } from "react";
import { Link } from "react-router-dom";
import photo4 from "../../imports/photo_4-1.jpg";

export default function RechercheSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="recherche"
      className="relative bg-white py-12 md:py-20 px-4 md:px-8 z-30"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 md:mb-12 rounded-lg overflow-hidden shadow-xl">
          <img
            src={photo4}
            alt="Campus verdure"
            className="w-full h-48 md:h-64 object-cover"
          />
        </div>

        {/* Titre cliquable avec flèche */}
        <div
          className="flex items-center justify-between cursor-pointer mb-8 md:mb-12"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 text-center flex-1">
            La recherche : un pilotage collégial, des ressources à
            la hauteur
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
            La recherche au cœur de notre identité académique
          </h3>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              La recherche est au cœur de notre mission
              d'enseignants-chercheurs. Elle nourrit nos
              enseignements, structure notre identité
              académique, irrigue nos formations et constitue le
              socle de l'accompagnement des doctorants.
            </p>
            <p>
              Elle représente également un enjeu stratégique
              majeur pour l'avenir de l'IAE. Les dernières
              accréditations, et notamment le peer review report
              EQUIS 2023, ont confirmé la qualité de nombreux
              travaux menés par nos enseignants chercheurs tout
              en soulignant la nécessité de poursuivre nos
              efforts pour renforcer la visibilité, la cohérence
              et la dynamique collective de notre politique
              scientifique.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-blue-900 mb-8 underline">
          Nos orientations concrètes
        </h3>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Gouvernance */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="text-xl font-bold text-blue-800 mb-4">
              Gouvernance & coordination scientifique
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Renforcement de la collégialité du pilotage de
                  la recherche par la création d'un comité
                  scientifique de l'IAE
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Renforcement du dialogue et de la
                  collaboration entre l'IAE et le CERGAM
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Meilleure articulation entre recherche,
                  formation et stratégie institutionnelle
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Construction d'une vision scientifique
                  collective et lisible à travers notamment le
                  développement d'appels à projets propres
                </span>
              </li>
            </ul>
          </div>

          {/* Accompagnement humain & soutient financier */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="text-xl font-bold text-blue-800 mb-4">
              Accompagnement humain et soutien financier
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Aux enseignants et enseignants chercheurs dans
                  leurs évolutions de carrière
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Aux collègues souhaitant se réengager en
                  recherche
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Aux collègues souhaitant faire un séjour de
                  recherche à l'étranger
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Au recrutement de personnels d'appui à la
                  recherche
                </span>
              </li>
            </ul>
          </div>

          {/* Recherche collaborative */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="text-xl font-bold text-blue-800 mb-4">
              Recherche collaborative & financements
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Valorisation accrue des dynamiques collectives
                  de recherche
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Information renforcée sur les financements et
                  dispositifs existants
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Développement de Chaires de recherche en
                  collaboration avec le CERGAM
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Développement des relations avec les Instituts
                  d’établissement d’amU
                </span>
              </li>
            </ul>
          </div>

          {/* Formation & impact */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="text-xl font-bold text-blue-800 mb-4">
              Formation & impact sociétal
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Renforcement du lien formation-recherche dans
                  les programmes dès le M1
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Développement de l'esprit critique face aux
                  transformations liées à l'IA
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Valorisation de l'impact économique,
                  territorial et sociétal des travaux
                  scientifiques
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Consolidation du rayonnement scientifique et
                  académique de l'IAE
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/page-complementaire-2"
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