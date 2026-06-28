import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { totalSoutiens } from "../data/soutiensData";

export default function SoutiensPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    // Vérifier si le popup a déjà été fermé dans cette session
    const wasClosed = sessionStorage.getItem("soutiensPopupClosed");
    if (wasClosed) {
      setIsClosed(true);
      return;
    }

    // Afficher le popup après 2 secondes
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setIsClosed(true);
    sessionStorage.setItem("soutiensPopupClosed", "true");
  };

  if (isClosed || !isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[150] animate-slide-up">
      <div className="bg-gradient-to-r from-blue-100 to-blue-50 border-t-4 border-blue-700 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-6">
          <div className="flex items-center justify-between gap-4">
            {/* Contenu */}
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-bold text-blue-900">
                Découvrez nos {totalSoutiens} soutiens
              </h3>
            </div>

            {/* Boutons */}
            <div className="flex gap-3">
              <Link
                to="/soutiens"
                className="px-4 md:px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition font-semibold text-sm md:text-base whitespace-nowrap shadow-lg"
              >
                Soutiens
              </Link>
              <Link
                to="/temoignages"
                className="px-4 md:px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-600 transition font-semibold text-sm md:text-base whitespace-nowrap shadow-lg"
              >
                Témoignages
              </Link>
            </div>

            {/* Bouton fermer */}
            <button
              onClick={handleClose}
              className="p-2 hover:bg-blue-200 rounded-full transition flex-shrink-0"
              aria-label="Fermer"
            >
              <svg
                className="w-6 h-6 text-blue-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
