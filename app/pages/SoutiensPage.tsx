import { useState } from "react";
import { Link } from "react-router-dom";
import { soutiens, etAussi, etAussiDescription, totalSoutiens } from "../data/soutiensData";

export default function SoutiensPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 48;

  const totalPages = Math.ceil(soutiens.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentSoutiens = soutiens.slice(startIndex, endIndex);

  return (
    <main className="pt-32 pb-20 px-4 md:px-8 bg-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Bouton retour */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 mb-6 transition"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="font-semibold">Retour à l'accueil</span>
        </Link>

        {/* Titre */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-12 text-center">
          Nos {totalSoutiens} soutiens
        </h1>

        {/* Grille des soutiens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {currentSoutiens.map((soutien, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
            >
              <p className="font-bold text-gray-900 mb-2 text-sm md:text-base">{soutien.nom}</p>
              <p className="text-xs md:text-sm text-blue-700 mb-1">{soutien.formation}</p>
              {soutien.poste && (
                <p className="text-xs text-gray-600 italic">{soutien.poste}</p>
              )}
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mb-12">
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              ←
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg transition ${
                  currentPage === page
                    ? 'bg-blue-900 text-white'
                    : 'bg-white text-blue-900 hover:bg-blue-100'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              →
            </button>
          </div>
        )}

        {/* Section "Et aussi" */}
        <section className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6 text-center">
            Et aussi…
          </h2>
          <div className="mb-6 text-center">
            <p className="text-base text-gray-700 leading-relaxed">
              {etAussi.join(", ")}
            </p>
          </div>
          <p className="text-sm text-gray-600 text-center italic">
            {etAussiDescription}
          </p>
        </section>
      </div>
    </main>
  );
}
