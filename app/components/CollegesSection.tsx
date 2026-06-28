import cecilePhoto from "../../imports/C_cile__1_.jpg";
import alexandrePhoto from "../../imports/Alexandre.jpg";
import geraldPhoto from "../../imports/G_rald.jpg";
import aureliePhoto from "../../imports/aur_lie-1.jpg";
import sebastienPhoto from "../../imports/S_bastien_LAURENT_1-1.jpg";
import nathalieRPhoto from "../../imports/Nathalie_Richebe_Photo-1.jpg";
import ericPhoto from "../../imports/tafani-eric-1.jpg";
import margitPhoto from "../../imports/Margit-1.jpg";
import nathalieChPhoto from "../../imports/nathalie_C-1.jpg";
import jonathanPhoto from "../../imports/Jonathan_Peterson.jpg";

export default function CollegesSection() {
  const collegeA = [
    ["Aurélie KESSOUS", "Sébastien LAURENT"],
    ["Nathalie RICHEBE", "Eric TAFANI"],
  ];

  const collegeBLeft = [
    "Cécile BOZZO",
    "Margit MUNZER",
    "Nathalie CHALVESCHE",
  ];

  const collegeBRight = [
    "Jonathan PETERSON",
    "Gérald BRUNETTO",
    "Alexandre SEHIER",
  ];

  const getPhotoForName = (name: string) => {
    const photos: { [key: string]: string } = {
      "Aurélie KESSOUS": aureliePhoto,
      "Sébastien LAURENT": sebastienPhoto,
      "Nathalie RICHEBE": nathalieRPhoto,
      "Eric TAFANI": ericPhoto,
      "Cécile BOZZO": cecilePhoto,
      "Margit MUNZER": margitPhoto,
      "Nathalie CHALVESCHE": nathalieChPhoto,
      "Jonathan PETERSON": jonathanPhoto,
      "Gérald BRUNETTO": geraldPhoto,
      "Alexandre SEHIER": alexandrePhoto,
    };
    return photos[name];
  };

  const getTitleForName = (name: string) => {
    const titles: { [key: string]: string } = {
      "Aurélie KESSOUS": "Professeur des Universités, directrice du MSc Marketing & Brand Management",
      "Sébastien LAURENT": "Professeur des Universités, directeur du Master Recherche Etudes et Conseil, membre sénior de l'Institut Universitaire de France",
      "Nathalie RICHEBE": "Professeur des Universités, élue à la Commission Recherche amU, directrice du Master Recherche Etudes et Conseil",
      "Eric TAFANI": "Professeur des Universités",
      "Cécile BOZZO": "Maître de Conférences, VP déléguée affaires générales en formation, directrice du MSc 1ère année",
      "Jonathan PETERSON": "Maître de Conférences, élu au Conseil du CERGAM",
      "Margit MUNZER": "Maître de Conférences, Co-responsable de l'axe FCC du CERGAM, directrice du MSc Contrôle de Gestion et Reporting",
      "Gérald BRUNETTO": "Maître de Conférences, directeur du MSc ISDBC",
      "Nathalie CHALVESCHE": "PRAG, directrice de l'Executive Licence - BAMO",
      "Alexandre SEHIER": "Professeur agrégé, directeur du Msc Management Général",
    };
    return titles[name];
  };

  return (
    <section className="relative bg-white py-12 md:py-20 px-4 md:px-8 z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
          {/* Collège A */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8 text-center">
              Collège A{" "}
            </h2>
            <div className="grid grid-cols-2 gap-4 md:gap-8 items-start">
              {collegeA.flat().map((name, index) => {
                const photo = getPhotoForName(name);
                return (
                  <div key={index} className="text-center flex flex-col items-center">
                    {photo ? (
                      <div className="w-28 h-28 rounded-full mb-3 overflow-hidden flex-shrink-0">
                        <img
                          src={photo}
                          alt={name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-28 h-28 bg-gray-300 rounded-full mb-3 flex-shrink-0"></div>
                    )}
                    <p className="text-sm font-medium text-gray-800">
                      {name}
                    </p>
                    <p className="text-xs text-gray-600 mt-2 px-2 min-h-[3rem]">
                      {getTitleForName(name)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Collège B */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8 text-center">
              Collège B
            </h2>

            {/* Vue mobile : 2 colonnes */}
            <div className="grid grid-cols-2 md:hidden gap-4 items-start">
              {[...collegeBLeft, ...collegeBRight].map((name, index) => {
                const photo = getPhotoForName(name);
                return (
                  <div key={index} className="text-center flex flex-col items-center">
                    {photo ? (
                      <div className="w-28 h-28 rounded-full mb-3 overflow-hidden flex-shrink-0">
                        <img
                          src={photo}
                          alt={name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-28 h-28 bg-gray-300 rounded-full mb-3 flex-shrink-0"></div>
                    )}
                    <p className="text-sm font-medium text-gray-800">
                      {name}
                    </p>
                    <p className="text-xs text-gray-600 mt-2 px-2 min-h-[3rem]">
                      {getTitleForName(name)}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Vue desktop : 3 colonnes */}
            <div className="hidden md:grid grid-cols-3 gap-6 items-start">
              {[...collegeBLeft, ...collegeBRight].map(
                (name, index) => {
                  const photo = getPhotoForName(name);
                  return (
                    <div key={index} className="text-center flex flex-col items-center">
                      {photo ? (
                        <div className="w-28 h-28 rounded-full mb-3 overflow-hidden flex-shrink-0">
                          <img
                            src={photo}
                            alt={name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-28 h-28 bg-gray-300 rounded-full mb-3 flex-shrink-0"></div>
                      )}
                      <p className="text-sm font-medium text-gray-800">
                        {name}
                      </p>
                      <p className="text-xs text-gray-600 mt-2 px-2 min-h-[3rem]">
                        {getTitleForName(name)}
                      </p>
                    </div>
                  );
                },
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}