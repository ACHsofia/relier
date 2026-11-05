export type SiteRoute = {
  path: string;
  title: string;
  description: string;
};

export const siteConfig = {
  name: "Liste RELIER",
  defaultTitle: "Liste RELIER | IAE Aix-Marseille",
  baseUrl: import.meta.env.VITE_SITE_URL ?? "https://liste-relier.fr",
  description:
    "Liste RELIER, conduite par Cécile Bozzo, pour l'IAE Aix-Marseille : recherche, excellence, légitimité universitaire, international, étudiants et rayonnement collectif.",
  navItems: [
    { label: "Étudiants", hash: "etudiants" },
    { label: "Université", hash: "amu" },
    { label: "Recherche", hash: "recherche" },
    { label: "Accréditations", hash: "accreditations" },
    { label: "Collectif", hash: "collectif" },
  ],
  routes: [
    {
      path: "/",
      title: "Liste RELIER | IAE Aix-Marseille",
      description:
        "Un projet collectif pour l'IAE Aix-Marseille, ancré dans la recherche, l'excellence, la légitimité universitaire et l'international.",
    },
    {
      path: "/soutiens",
      title: "Nos soutiens | Liste RELIER",
      description:
        "Découvrez les alumni, étudiants et partenaires qui soutiennent la Liste RELIER pour l'IAE Aix-Marseille.",
    },
    {
      path: "/temoignages",
      title: "Témoignages | Liste RELIER",
      description:
        "Témoignages d'étudiantes, étudiants et alumni autour de l'accompagnement porté par Cécile Bozzo et la Liste RELIER.",
    },
    {
      path: "/page-complementaire-1",
      title: "Étudiants et gouvernance | Liste RELIER",
      description:
        "Propositions complémentaires de la Liste RELIER pour placer les étudiants au centre du projet de l'IAE.",
    },
    {
      path: "/page-complementaire-2",
      title: "Recherche | Liste RELIER",
      description:
        "Propositions complémentaires de la Liste RELIER pour renforcer la recherche et le pilotage scientifique de l'IAE.",
    },
    {
      path: "/page-complementaire-3",
      title: "Aix-Marseille Université | Liste RELIER",
      description:
        "Propositions complémentaires pour inscrire pleinement l'IAE dans Aix-Marseille Université tout en préservant son identité.",
    },
    {
      path: "/page-complementaire-4",
      title: "Accréditations et rayonnement | Liste RELIER",
      description:
        "Propositions complémentaires sur les accréditations, l'amélioration continue et le rayonnement de l'IAE.",
    },
  ] satisfies SiteRoute[],
};

export function getRouteMeta(pathname: string): SiteRoute {
  return (
    siteConfig.routes.find((route) => route.path === pathname) ?? {
      path: pathname,
      title: siteConfig.defaultTitle,
      description: siteConfig.description,
    }
  );
}
