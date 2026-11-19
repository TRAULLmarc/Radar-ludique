// Chargeur de vampirisation unique à l'initialisation (colonnes A à S, sans colonnes T+)
// Si une ancienne version partielle était en localStorage, la mise à jour de VAMPIRIZATION_VERSION la remplace une seule fois.
const VAMPIRIZATION_VERSION = "v2_full_201_entities";

(function bootstrapVampirization() {
  const verKey = "radar_ludique_vampirization_ver";
  const stateKey = "radar_ludique_state_v1";
  const currentVer = localStorage.getItem(verKey);

  if (currentVer !== VAMPIRIZATION_VERSION && typeof INITIAL_ENTITIES !== "undefined") {
    localStorage.setItem(stateKey, JSON.stringify(INITIAL_ENTITIES));
    localStorage.setItem(verKey, VAMPIRIZATION_VERSION);
  }
})();
