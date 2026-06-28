import { useState } from "react";

export default function EntretiensSection() {
  const [showAllUniversities, setShowAllUniversities] =
    useState(false);

  return (
    <section className="relative bg-gradient-to-br from-blue-100 via-blue-50 to-sky-100 py-12 md:py-20 px-4 md:px-8 z-70">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-900 mb-8 md:mb-12 text-center">
          Nos propositions s'appuient sur plus de 100 entretiens
          menés depuis 18 mois
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* A l'IAE */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-4">
              A l'IAE :
            </h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Avec des enseignants permanents et vacataires
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>Des personnels administratifs</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>Des étudiants</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>Des associations étudiantes</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>Des alumnis</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Des membres du conseil d'institut sortant
                </span>
              </li>
            </ul>
          </div>

          {/* A amU */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-4">
              A amU :
            </h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Avec des enseignants chercheurs d'autres
                  disciplines (Droit, Médecine, Pharmacie,
                  Sciences, Lettres)
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Des étudiants membre d'associations, élus dans
                  des conseils centraux ou de composante,
                  porteurs de projets
                </span>
              </li>
            </ul>
          </div>

          {/* En entreprise */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-4">
              En entreprise :
            </h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Avec des maîtres de stage et d'alternance
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Des cadres et dirigeants d'entreprises
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>Des entrepreneurs</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Des alumni d'autres écoles et Universités
                  (ESSEC, EDHEC, Dauphine, IAE de paris)
                </span>
              </li>
            </ul>
          </div>

          {/* A l'international */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-4">
              A l'international
            </h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">
                  -
                </span>
                <span>
                  Avec des enseignants chercheurs d'Universités
                  internationales :
                </span>
              </li>
            </ul>
            <ul className="space-y-2 text-gray-700 text-sm mt-3 ml-4">
              <li>• SDA Bocconi School of Management</li>
              <li>• Sapienza University of Rome</li>
              {showAllUniversities && (
                <>
                  <li>• Universidad Autónoma de Madrid</li>
                  <li>• Aalto School of Business</li>
                  <li>• University of Bath</li>
                  <li>• Imperial College London</li>
                  <li>• University of Glasgow</li>
                  <li>• Edinburgh Business School</li>
                </>
              )}
            </ul>
            <button
              onClick={() =>
                setShowAllUniversities(!showAllUniversities)
              }
              className="mt-4 text-blue-700 hover:text-blue-900 text-sm font-semibold underline"
            >
              {showAllUniversities
                ? "Voir moins"
                : "Lire plus..."}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}