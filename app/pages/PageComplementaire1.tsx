import { Link } from "react-router-dom";

export default function PageComplementaire1() {
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
            Les étudiants au centre, avec une gouvernance assumée
          </h1>

          <section className="mb-12 bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Préserver ce qui fait la singularité de l'IAE
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                L'IAE est souvent décrit comme une « famille ». Cette formule peut parfois sembler imparfaite, mais elle traduit malgré tout une réalité : les étudiants valorisent fortement la proximité, la disponibilité des équipes et l'attention portée à leur parcours.
              </p>
              <p>
                Le fait que certaines familles nous confient plusieurs générations d'étudiants ou des fratries entières constitue un signal fort. Cela révèle une confiance durable dans notre manière d'accompagner les parcours, dans nos valeurs et dans l'équilibre que nous avons su construire entre exigence académique et accompagnement.
              </p>
              <p>
                Cette identité doit être préservée, y compris dans un contexte de croissance, d'accréditations et de transformations institutionnelles.
              </p>
            </div>
          </section>

          <section className="mb-12 bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Les associations étudiantes : soutenir davantage, promettre moins
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Les associations étudiantes jouent un rôle essentiel dans la vie de l'IAE. Elles contribuent à l'intégration, à la cohésion entre promotions, à l'animation du campus et au développement de compétences qui dépassent largement le cadre académique.
              </p>
              <p>
                Mais soutenir les associations ne signifie pas simplement promettre.
              </p>
              <p>
                Nous souhaitons construire une relation claire, stable et adulte avec les associations étudiantes. Nous ne croyons pas aux effets d'annonce difficilement tenables dans le temps mais à un soutien durable et structurant permettant à la vie associative de se développer. Le développement des moyens alloués aux associations est fondamental, qu'ils soient financiers, techniques ou humains.
              </p>
              <p>
                Cela suppose de mieux accompagner les associations dans leurs projets : simplifier certains échanges administratifs, améliorer la lisibilité des interlocuteurs, faciliter l'anticipation des événements et renforcer la coordination avec les équipes de l'IAE et d'amU.
              </p>
            </div>
          </section>

          <section className="mb-12 bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Adapter nos formations aux nouvelles exigences
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                L'enseignement supérieur connaît aujourd'hui des transformations profondes qui imposent d'adapter les formations, les formats pédagogiques et les modes d'organisation. L'intelligence artificielle, les évolutions du marché de l'alternance, les nouvelles attentes des entreprises et le développement de la formation tout au long de la vie modifient durablement les besoins en compétences et les parcours professionnels.
              </p>
              <p>
                L'IAE doit pleinement prendre en compte ces mutations.
              </p>
              <p>
                L'IA transforme déjà de nombreux métiers et de nombreuses universités et grandes écoles ont commencé à intégrer des modules dédiés à l'IA générative, à la culture numérique, à l'éthique des algorithmes ou à la maîtrise critique des outils d'IA dans leurs cursus. Cette adaptation ne doit cependant pas se limiter à l'ajout de nouveaux outils. Elle suppose une réflexion plus large sur les compétences que nous souhaitons développer : esprit critique, capacité d'analyse, créativité, maîtrise des outils, et compréhension des enjeux éthiques, économiques et sociétaux liés à l'IA.
              </p>
              <p>
                L'évolution récente du financement de l'alternance impose également de repenser certains équilibres. L'IAE devra adapter ses rythmes et ses formats d'alternance afin de préserver leur qualité pédagogique, leur soutenabilité financière et leur adéquation avec les besoins réels des entreprises et des étudiants.
              </p>
              <p>
                Enfin, le développement de la Formation Tout au Long de la Vie constitue un enjeu stratégique majeur. Avec des trajectoires professionnelles plus mobiles, des reconversions plus fréquentes et de nouveaux besoins de montée en compétences, le développement de formations hybrides, de modules courts, de certifications, et la VAE doivent se développer. L'IAE d'Aix doit renforcer sa capacité à accompagner ces nouveaux parcours et à devenir un acteur de référence de la FTLV.
              </p>
            </div>
          </section>

          <section className="mb-12 bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Construire une écoute étudiante intégrée à la gouvernance
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Placer les étudiants au centre ne signifie pas multiplier les dispositifs symboliques ou fonctionner dans une logique de réaction permanente. Cela implique au contraire d'organiser une écoute structurée, intégrée à la gouvernance de l'établissement et articulée avec les responsables de programme qui portent les formations au quotidien.
              </p>
              <p>
                Dans cette logique, nous souhaitons créer un véritable statut de délégué étudiant de l'IAE.
              </p>
              <p>
                Élu par ses pairs, ce représentant travaillerait en binôme avec la personne en charge de la vie étudiante. Ce binôme étudiant/personnel participerait à la circulation de l'information entre les étudiants, les équipes pédagogiques, les BIATSS et la direction. Il pourrait identifier les difficultés rencontrées, faire remonter les points de vigilance, proposer des améliorations concrètes et contribuer à renforcer la cohérence entre expérience étudiante et décisions institutionnelles.
              </p>
              <p>
                L'objectif n'est pas de créer une gouvernance parallèle, mais d'intégrer pleinement la parole étudiante dans un cadre collectif, responsable et cohérent avec les priorités de l'IAE.
              </p>
            </div>
          </section>

          <section className="mb-12 bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Écouter ne signifie pas renoncer à gouverner
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Placer les étudiants au centre ne signifie pas effacer le rôle des enseignants, des responsables de programme ou de la direction.
              </p>
              <p>
                Une institution universitaire a besoin d'une ligne claire, d'une capacité de décision et d'une gouvernance assumée. Notre responsabilité est d'écouter sans céder à l'immédiateté, d'accompagner sans renoncer à l'exigence, et de garantir la cohérence globale des formations ainsi que le respect des équilibres humains et institutionnels.
              </p>
              <p>
                Nous croyons profondément que cette articulation entre dialogue, exigence et responsabilité constitue aujourd'hui l'une des conditions essentielles pour préserver la qualité académique de l'IAE tout en renforçant l'engagement des étudiants dans la vie de l'établissement.
              </p>
            </div>
          </section>
      </div>
    </main>
  );
}
