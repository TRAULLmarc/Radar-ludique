const VAMPIRIZATION_VERSION = "v5_supabase_ready";
const STATE_KEY = "radar_ludique_state_v2";
const VER_KEY = "radar_ludique_vampirization_ver";

(function initSmartSync() {
  const source =
    typeof INITIAL_ENTITIES !== "undefined" && Array.isArray(INITIAL_ENTITIES)
      ? INITIAL_ENTITIES
      : typeof editeurs !== "undefined" && Array.isArray(editeurs)
      ? editeurs
      : null;

  if (!source) return;

  const savedVer = localStorage.getItem(VER_KEY);
  const rawState = localStorage.getItem(STATE_KEY);

  if (!rawState || savedVer !== VAMPIRIZATION_VERSION) {
    localStorage.setItem(STATE_KEY, JSON.stringify(source));
    localStorage.setItem(VER_KEY, VAMPIRIZATION_VERSION);
  }
})();
