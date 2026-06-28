import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-blue-50 px-4 py-32">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-700">
          Page introuvable
        </p>
        <h1 className="mb-6 text-3xl font-bold text-blue-950 md:text-5xl">
          Cette page n'existe pas encore.
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-gray-700 md:text-lg">
          Le site RELIER est prêt à évoluer, mais cette adresse ne correspond pas à une page publiée.
        </p>
        <Link
          to="/"
          className="inline-flex rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800"
        >
          Retour à l'accueil
        </Link>
      </div>
    </main>
  );
}
