import { Link } from "react-router-dom";
import { siteConfig } from "../config/site";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Listes RELIER
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Pour un IAE ancré dans la <span className="font-bold">R</span>echerche, l'<span className="font-bold">E</span>xcellence,
              la <span className="font-bold">L</span>égitimité universitaire et l'<span className="font-bold">I</span>nternational au
              service des <span className="font-bold">E</span>tudiants et du <span className="font-bold">R</span>ayonnement collectif.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Cécile BOZZO</li>
              <li>cecile.bozzo@iae-aix.com</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {siteConfig.navItems.map((item) => (
                <li key={item.hash}>
                  <Link
                    to={`/#${item.hash}`}
                    className="hover:text-white transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2026 Listes RELIER</p>
        </div>
      </div>
    </footer>
  );
}
