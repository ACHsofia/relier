import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { temoignages, totalTemoignages } from "../data/temoignagesData";

// Composant pour chaque carte de témoignage
function TemoignageCard({ text }: { text: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isKeynoteLong, setIsKeynoteLong] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const hasOverflow = textRef.current.scrollHeight > textRef.current.clientHeight;
      setIsKeynoteLong(hasOverflow);
    }
  }, [text]);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition relative flex flex-col justify-between min-h-[200px]">
      <div className="absolute top-4 left-4 text-6xl text-blue-200 leading-none font-serif">
        "
      </div>

      <div className="pt-6 relative z-10 flex-1">
        <p 
          ref={textRef}
          className={`text-sm md:text-base text-gray-700 leading-relaxed italic ${
            !isExpanded ? "line-clamp-5" : ""
          }`}
        >
          {text}
        </p>
        
        {isKeynoteLong && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-3 text-sm font-semibold text-blue-700 hover:text-blue-900 transition underline block"
          >
            {isExpanded ? "Voir moins" : "Lire plus..."}
          </button>
        )}
      </div>

      <div className="absolute bottom-4 right-4 text-6xl text-blue-200 leading-none font-serif">
        "
      </div>
    </div>
  );
}

export default function TemoignagesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const totalPages = Math.ceil(temoignages.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTemoignages = temoignages.slice(startIndex, endIndex);

  // EFFET : Remonter en haut de la page à chaque changement de page active
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Effet de défilement fluide
    });
  }, [currentPage]);

  // Nouvelle logique de plage de pagination : Fenêtre glissante sans ellipses complexes
  const getVisiblePages = () => {
    const maxVisibleButtons = 5; // Nombre maximum de boutons numériques visibles
    
    if (totalPages <= maxVisibleButtons) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // Calculer le début de la fenêtre pour que la page active soit au milieu
    let startPage = Math.max(1, currentPage - Math.floor(maxVisibleButtons / 2));
    let endPage = startPage + maxVisibleButtons - 1;

    // Ajuster si on dépasse la fin
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxVisibleButtons + 1);
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  };

  const visiblePages = getVisiblePages();

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
          {totalTemoignages} témoignages
        </h1>

        {/* Grille des témoignages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentTemoignages.map((temoignage, index) => (
            <TemoignageCard key={index} text={temoignage} />
          ))}
        </div>

        {/* Pagination Alternative (Fenêtre Glissante Épurée) */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mb-12 flex-wrap">
            {/* Bouton pour aller au tout début (Optionnel mais pratique sans le bouton "1") */}
            {currentPage > 3 && totalPages > 5 && (
              <button
                onClick={() => setCurrentPage(1)}
                className="px-3 py-2 bg-white text-blue-900 border border-blue-200 rounded-lg hover:bg-blue-100 transition font-medium"
                title="Première page"
              >
                «
              </button>
            )}

            {/* Flèche Précédent */}
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              ←
            </button>

            {/* Rendu des boutons de page de la fenêtre glissante */}
            {visiblePages.map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg transition font-medium ${
                  currentPage === page
                    ? 'bg-blue-900 text-white'
                    : 'bg-white text-blue-900 hover:bg-blue-100'
                }`}
              >
                {page}
              </button>
            ))}

            {/* Flèche Suivant */}
            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              →
            </button>

            {/* Bouton pour aller à la toute fin */}
            {currentPage < totalPages - 2 && totalPages > 5 && (
              <button
                onClick={() => setCurrentPage(totalPages)}
                className="px-3 py-2 bg-white text-blue-900 border border-blue-200 rounded-lg hover:bg-blue-100 transition font-medium"
                title="Dernière page"
              >
                »
              </button>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
