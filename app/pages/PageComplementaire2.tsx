import { Link } from "react-router-dom";

export default function PageComplementaire2() {
  return (
    <main className="pt-32 pb-20 px-4 md:px-8 bg-blue-50">
      <div className="max-w-4xl mx-auto">
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

          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">
            La recherche : un pilotage collégial, des ressources à la hauteur
          </h1>

          <section className="mb-12 bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              La recherche au cœur de notre identité académique
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                La recherche constitue l'un des fondements de l'identité académique de l'IAE. Elle nourrit les enseignements, structure l'exigence scientifique de nos formations, contribue au rayonnement de l'Institut et irrigue l'accompagnement des doctorants. Elle ne peut être pensée comme une activité périphérique ou secondaire : elle doit être replacée au cœur du projet stratégique de l'IAE.
              </p>
              <p>
                Les dernières accréditations, et notamment le peer review report EQUIS 2023, ont confirmé la qualité des travaux scientifiques menés par nos collègues tout en soulignant plusieurs enjeux structurants : renforcer la visibilité de notre politique scientifique, mieux articuler recherche et stratégie institutionnelle, soutenir davantage les dynamiques collectives et développer une vision plus lisible de nos priorités scientifiques.
              </p>
              <p>
                L'objectif n'est pas d'opposer recherche, pédagogie et professionnalisation. C'est au contraire de mieux les articuler afin de renforcer ce qui constitue aujourd'hui l'une des singularités fortes d'un IAE : une formation universitaire adossée à une recherche vivante, exigeante et connectée aux transformations contemporaines.
              </p>
            </div>
          </section>

          <section className="mb-12 bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Construire un pilotage scientifique plus collégial
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Nous proposons la création d'un comité scientifique de l'IAE afin de renforcer la collégialité du pilotage de la recherche et de mieux articuler politique scientifique, stratégie institutionnelle et développement des formations.
              </p>
              <p>
                Cette instance aurait vocation à constituer un espace de dialogue, de coordination et de réflexion stratégique associant les différentes composantes de la recherche à l'IAE. La Directrice du CERGAM serait invitée à participer à ce comité, car nous sommes convaincus que la politique scientifique de l'IAE ne peut être menée efficacement que dans le cadre d'une relation clarifiée, constructive et apaisée avec le laboratoire.
              </p>
              <p>
                Ce comité n'aurait pas vocation à se substituer au CERGAM ni à dupliquer ses missions scientifiques. L'animation des axes de recherche, les séminaires, l'accompagnement doctoral ou les paper development workshops relèvent pleinement du laboratoire. L'enjeu est au contraire de mieux articuler les rôles, de renforcer les coopérations et de permettre aux collègues de bénéficier plus pleinement des ressources et des dynamiques existantes.
              </p>
            </div>
          </section>

          <section className="mb-12 bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Soutenir davantage les dynamiques collectives de recherche
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                La recherche contemporaine repose de plus en plus sur des dynamiques collectives : co-publications, réponses à des appels à projets, collaborations internationales, projets interdisciplinaires ou développement de réseaux scientifiques. Le dernier rapport EQUIS a d'ailleurs souligné la nécessité de faire évoluer progressivement notre politique scientifique dans cette direction.
              </p>
              <p>
                Nous souhaitons mieux reconnaître et valoriser ces formes d'engagement collectif, tout en renforçant l'accompagnement des collègues qui souhaitent développer des projets de recherche, répondre à des appels à financements ou renforcer leurs collaborations scientifiques.
              </p>
              <p>
                Cela suppose notamment :
              </p>
              <ul className="list-none space-y-2 ml-6">
                <li className="flex gap-2">
                  <span>-</span>
                  <span>Une meilleure information sur les dispositifs de soutien existants</span>
                </li>
                <li className="flex gap-2">
                  <span>-</span>
                  <span>Le développement d'appels à projets propres à l'IAE</span>
                </li>
                <li className="flex gap-2">
                  <span>-</span>
                  <span>Un accompagnement renforcé au montage de projets nationaux et internationaux</span>
                </li>
                <li className="flex gap-2">
                  <span>-</span>
                  <span>Un soutien accru aux séjours de recherche à l'étranger</span>
                </li>
                <li className="flex gap-2">
                  <span>-</span>
                  <span>Le développement de collaborations avec les instituts d'établissement d'amU</span>
                </li>
                <li className="flex gap-2">
                  <span>-</span>
                  <span>Le développement de Chaires de recherche en lien avec le CERGAM</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12 bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Donner davantage de moyens humains et financiers à la recherche
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Une politique scientifique ambitieuse ne peut reposer uniquement sur des dispositifs d'incitation. Elle suppose également des moyens humains et organisationnels adaptés.
              </p>
              <p>
                Une réflexion doit être menée sur la manière dont l'IAE peut soutenir plus activement le recrutement de personnels d'appui à la recherche (ingénieurs de recherche, post-doctorants, stagiaires) lorsque les projets scientifiques le justifient. L'attractivité de notre Institut auprès des chercheurs internationaux, le développement des financements doctoraux, l'accompagnement des évolutions de carrière ou encore le soutien aux collègues souhaitant se réinvestir davantage dans la recherche constituent également des enjeux structurants pour les prochaines années.
              </p>
              <p>
                Cette ambition suppose enfin de mieux accompagner les collègues dans leurs trajectoires académiques : demandes de CRCT, séjours de recherche internationaux, développement des publications, participation aux réseaux scientifiques et soutien aux projets collectifs.
              </p>
            </div>
          </section>

          <section className="mb-12 bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Renforcer le lien entre formation, recherche et impact sociétal
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Le lien entre formation et recherche constitue un élément différenciant majeur face à la concurrence croissante d'établissements très variés. Ce lien ne doit pas être réservé aux seuls parcours doctoraux. Il doit irriguer l'ensemble des formations, selon des modalités adaptées aux niveaux et aux disciplines.
              </p>
              <p>
                L'initiation des étudiants à la recherche dès le Master 1, le développement de l'esprit critique face aux transformations liées à l'intelligence artificielle ou encore la capacité à interpréter et questionner les données deviennent aujourd'hui des enjeux centraux de la formation universitaire en management.
              </p>
              <p>
                Les standards AACSB et EQUIS accordent désormais une importance croissante à l'impact scientifique, économique, territorial et sociétal des travaux de recherche. Nous devons donc mieux valoriser la contribution de nos travaux aux grandes transformations contemporaines, sans opposer recherche fondamentale et recherche appliquée.
              </p>
              <p>
                L'enjeu est clair : consolider une recherche visible, utile, exigeante et pleinement intégrée au projet académique et institutionnel de l'IAE.
              </p>
            </div>
          </section>
      </div>
    </main>
  );
}
