export default function ConvictionFinale() {
  const convictions = [
    <>
      <strong>Préserver l'autonomie et l'identité de l'IAE</strong> en tant
      qu'école universitaire, en utilisant cette position au service de nos
      ambitions et de nos étudiants.
    </>,
    <>
      <strong>Faire de l'ouverture une force</strong>, car l'avenir de l'IAE se
      construit avec les autres, pas dans le repli.
    </>,
    <>
      <strong>Placer les étudiants au cœur des décisions</strong>, avec des
      améliorations concrètes de leurs conditions d'études et de leur avenir
      professionnel.
    </>,
    <>
      <strong>Faire de l'excellence académique une exigence quotidienne</strong>,
      qui se construit et se démontre, jamais simplement proclamée.
    </>,
    <>
      <strong>Garantir une gestion transparente des ressources</strong>, au
      service des formations, de la recherche et de la vie de l'école.
    </>,
    <>
      <strong>Faire vivre une gouvernance collective et respectueuse</strong>,
      où les décisions se construisent dans le dialogue et se traduisent en
      actes.
    </>,
  ];

  return (
    <section
      id="convictions"
      className="relative bg-slate-50 px-4 py-14 md:px-8 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
            Notre cap
          </p>
          <h2 className="text-3xl font-bold leading-tight text-blue-950 md:text-4xl">
            Six convictions pour l'avenir de l'IAE
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Notre projet pour l'IAE Aix repose sur six convictions :
          </p>
        </div>

        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {convictions.map((conviction, index) => (
            <li
              key={index}
              className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:p-7"
            >
              <span
                aria-hidden="true"
                className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-800"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-base leading-relaxed text-slate-700">
                {conviction}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-10 rounded-2xl bg-gradient-to-r from-blue-950 to-indigo-900 px-6 py-8 text-center text-xl font-semibold leading-relaxed text-white shadow-lg md:mt-14 md:px-12 md:py-10 md:text-2xl">
          L'avenir de l'IAE mérite un débat fondé sur des faits, des projets et
          des engagements vérifiables.
        </p>
      </div>
    </section>
  );
}