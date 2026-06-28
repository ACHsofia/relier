import { Link } from "react-router-dom";

export default function PageComplementaire3() {
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
            Un IAE pleinement inscrit dans amU sans renoncer à son identité
          </h1>

          <section className="mb-12 bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Préserver l'identité de l'IAE tout en renforçant son intégration
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                L'autonomie d'un IAE ne se construit pas contre son université.
              </p>
              <p>
                Elle se construit dans la capacité
              </p>
              <ul className="list-none space-y-2 ml-6">
                <li className="flex gap-2">
                  <span>-</span>
                  <span>A comprendre les équilibres institutionnels</span>
                </li>
                <li className="flex gap-2">
                  <span>-</span>
                  <span>A connaître les mécanismes de décision</span>
                </li>
                <li className="flex gap-2">
                  <span>-</span>
                  <span>A identifier les bons interlocuteurs</span>
                </li>
                <li className="flex gap-2">
                  <span>-</span>
                  <span>Et à inscrire les projets de l'IAE dans une stratégie cohérente avec celle d'amU.</span>
                </li>
              </ul>
              <p className="mt-4">
                C'est dans ce cadre que des membres de la liste RELIER ont, notamment, accompagné :
              </p>
              <ul className="list-none space-y-2 ml-6">
                <li className="flex gap-2">
                  <span>-</span>
                  <span>La création de nouvelles mentions de master afin de renforcer la lisibilité et l'attractivité de nos programmes ayant contribué à une augmentation de 40% du volume de candidatures en M1</span>
                </li>
                <li className="flex gap-2">
                  <span>-</span>
                  <span>Le développement et le passage à l'alternance du master Innovation & Entrepreneuriat</span>
                </li>
                <li className="flex gap-2">
                  <span>-</span>
                  <span>L'ouverture du master Recherche à la FEG en complément de l'IMPGT</span>
                </li>
                <li className="flex gap-2">
                  <span>-</span>
                  <span>L'intégration de l'ensemble de nos programmes dans TIGER (transformation de la formation par la recherche) dont l'ambition est de permettre aux étudiants d'acquérir un maximum de compétences par une formation par les chercheurs, les acteurs du monde socio-économique et à l'international</span>
                </li>
                <li className="flex gap-2">
                  <span>-</span>
                  <span>Le versement de bourses de mobilité supplémentairesfléchées à des étudiants M1 et M2 dans le cadre de leur semestre d'échange ou de leur study tours</span>
                </li>
                <li className="flex gap-2">
                  <span>-</span>
                  <span>L'obtention de financements AMIDEX pour développer des passerelles vers l'IAE pour des étudiants de la Faculté de Droit et de Sciences Politiques, l'IUT et Polytech</span>
                </li>
                <li className="flex gap-2">
                  <span>-</span>
                  <span>Le développement de bourses d'excellence TIGER permettant à des étudiants internationaux de financer leur parcours à l'IAE</span>
                </li>
              </ul>
              <p className="mt-4">
                Ces projets montrent qu'une bonne connaissance du fonctionnement d'amU n'est pas synonyme de perte d'autonomie. C'est au contraire un levier concret permettant de défendre efficacement les intérêts de l'IAE.
              </p>
            </div>
          </section>

          <section className="mb-12 bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Mieux mobiliser l'écosystème amU
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                amU déploie une stratégie fortement orientée vers la responsabilité sociale, l'ouverture internationale et la transdisciplinarité.
              </p>
              <p>
                Ces orientations sont profondément cohérentes avec les valeurs de Humanistic Leadership que nous défendons à l'IAE.
              </p>
              <p>
                Cette convergence représente une opportunité importante.
              </p>
              <p>
                L'IAE doit davantage s'appuyer sur les ressources offertes par l'université :
              </p>
              <ul className="list-none space-y-2 ml-6">
                <li className="flex gap-2">
                  <span>-</span>
                  <span>L'alliance européenne CIVIS et plus largement les partenaires internationaux</span>
                </li>
                <li className="flex gap-2">
                  <span>-</span>
                  <span>Les réseaux de recherche</span>
                </li>
                <li className="flex gap-2">
                  <span>-</span>
                  <span>Les dispositifs de mobilité internationale des étudiants comme des équipes</span>
                </li>
                <li className="flex gap-2">
                  <span>-</span>
                  <span>Les financements transdisciplinaires</span>
                </li>
                <li className="flex gap-2">
                  <span>-</span>
                  <span>Les collaborations pédagogiques entre composantes</span>
                </li>
              </ul>
              <p className="mt-4">
                Nous devons notamment développer davantage de synergies avec d'autres composantes d'amU, en particulier dans les domaines de l'ingénierie, de la santé, du droit et des sciences sociales.
              </p>
              <p>
                Ces collaborations peuvent enrichir nos programmes, ouvrir de nouveaux terrains de recherche et renforcer notre capacité d'innovation pédagogique.
              </p>
            </div>
          </section>

          <section className="mb-12 bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Une stratégie cohérente avec les attentes des accréditations internationales
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Les accréditations internationales insistent aujourd'hui fortement sur la cohérence entre la stratégie des écoles de management et celle de leur université.
              </p>
              <p>
                AACSB rappelle explicitement que la stratégie d'une école doit refléter sa mission propre tout en restant alignée avec les orientations stratégiques de son université.
              </p>
              <p>
                Cette exigence ne doit pas être perçue comme une contrainte. Elle constitue au contraire une opportunité pour mieux articuler les ambitions de l'IAE avec celles d'amU, renforcer notre visibilité institutionnelle et consolider notre positionnement académique.
              </p>
              <p>
                L'enjeu est clair : affirmer pleinement l'identité de l'IAE tout en assumant notre appartenance à une grande université de recherche internationale.
              </p>
            </div>
          </section>

          <section className="mb-12 bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Transformer notre positionnement universitaire en avantage concurrentiel
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Dans un contexte de concurrence croissante avec les écoles privées, notre appartenance à amU constitue un différenciant fort.
              </p>
              <p>
                Elle nous permet de proposer :
              </p>
              <ul className="list-none space-y-2 ml-6">
                <li className="flex gap-2">
                  <span>-</span>
                  <span>Une véritable articulation entre formation et recherche</span>
                </li>
                <li className="flex gap-2">
                  <span>-</span>
                  <span>Des collaborations interdisciplinaires</span>
                </li>
                <li className="flex gap-2">
                  <span>-</span>
                  <span>Un accès à des réseaux scientifiques internationaux</span>
                </li>
                <li className="flex gap-2">
                  <span>-</span>
                  <span>Une capacité à mobiliser des financements structurants</span>
                </li>
                <li className="flex gap-2">
                  <span>-</span>
                  <span>Une ouverture sur des enjeux sociétaux et scientifiques plus larges</span>
                </li>
              </ul>
              <p className="mt-4">
                Cet ancrage universitaire doit devenir un élément pleinement visible de notre identité et de notre stratégie de développement.
              </p>
            </div>
          </section>
      </div>
    </main>
  );
}
