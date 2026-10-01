import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import professionDeFoiPdf from "../../imports/Profession_de_foi_colleges_A_et_B_liste_RELIER.pdf";
import { siteConfig } from "../config/site";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Masquer la navigation sur les pages complémentaires, soutiens et témoignages
  const isComplementaryPage = location.pathname.includes("/page-complementaire") || location.pathname === "/soutiens" || location.pathname === "/temoignages";

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-[100]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-80 transition"
          >
            <h1 className="text-lg md:text-2xl font-bold text-blue-900">
              Liste RELIER
            </h1>
          </Link>

          {/* Navigation Desktop */}
          {!isComplementaryPage && (
            <nav className="hidden lg:flex gap-6 flex-1 justify-center ml-8">
              {siteConfig.navItems.map((item) => (
                <Link
                  key={item.hash}
                  to={`/#${item.hash}`}
                  className="text-sm text-gray-700 transition hover:text-blue-900 hover:underline"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}

          {/* Boutons Desktop */}
          <div className="hidden lg:flex gap-3 ml-8">
            <a
              href={professionDeFoiPdf}
              download="Profession_de_foi_liste_RELIER.pdf"
              className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition font-semibold text-sm whitespace-nowrap"
            >
              Profession de foi
            </a>
            <Link
              to="/soutiens"
              className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition font-semibold text-sm whitespace-nowrap"
            >
              Nos soutiens
            </Link>
            <Link
                to="/temoignages"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition font-semibold text-sm text-center"
              >
                Témoignages
              </Link>
            <a
              href="https://forms.gle/QifSf21tYbjteGbZ6"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-amber-400 text-blue-950 rounded-lg hover:bg-amber-300 transition font-bold text-sm whitespace-nowrap shadow-md shadow-amber-900/20 ring-1 ring-amber-300"
            >
              Nous soutenir
            </a>
          </div>

          {/* Bouton Menu Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-blue-900 hover:bg-blue-50 rounded-lg transition"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menu Mobile */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            {!isComplementaryPage && (
              <nav className="flex flex-col gap-3 mb-4">
                {siteConfig.navItems.map((item) => (
                  <Link
                    key={item.hash}
                    to={`/#${item.hash}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2 text-gray-700 transition hover:text-blue-900 hover:underline"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            )}

            <div className={`flex flex-col gap-2 ${!isComplementaryPage ? 'pt-3 border-t border-gray-200' : ''}`}>
              <a
                href={professionDeFoiPdf}
                download="Profession_de_foi_liste_RELIER.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition font-semibold text-sm text-center"
              >
                Profession de foi
              </a>
              <Link
                to="/soutiens"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition font-semibold text-sm text-center"
              >
                Nos soutiens
              </Link>
              <Link
                to="/temoignages"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition font-semibold text-sm text-center"
              >
                Témoignages
              </Link>
              <a
                href="https://forms.gle/QifSf21tYbjteGbZ6"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 bg-amber-400 text-blue-950 rounded-lg hover:bg-amber-300 transition font-bold text-sm text-center shadow-md shadow-amber-900/20 ring-1 ring-amber-300"
              >
                Nous soutenir
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
