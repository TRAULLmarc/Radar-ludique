// Vampirisation & fusion intelligente :
// - Applique la base initiale (colonnes A à S, colonnes T+ exclues)
// - Préserve les notes terrain et modifications manuelles de l'utilisateur lors des mises à jour de version
const VAMPIRIZATION_VERSION = "v3_smart_sync";
const STATE_KEY = "radar_ludique_state_v1";
const VER_KEY = "radar_ludique_vampirization_ver";

function mergeBaseWithUserChanges(baseEntities, currentState) {
  if (!Array.isArray(currentState) || currentState.length === 0) {
    return structuredClone(baseEntities);
  }
  const currentById = new Map(currentState.map((item) => [item.id, item]));
  const currentByName = new Map(
    currentState.map((item) => [String(item.nom || "").trim().toLowerCase(), item])
  );

  const merged = baseEntities.map((baseItem) => {
    const prev =
      currentById.get(baseItem.id) ||
      currentByName.get(String(baseItem.nom || "").trim().toLowerCase());

    if (!prev) return structuredClone(baseItem);

    const prevNotes = Array.isArray(prev.notes_terrain) ? prev.notes_terrain : [];
    const baseNotes = Array.isArray(baseItem.notes_terrain) ? baseItem.notes_terrain : [];
    const noteKeys = new Set(baseNotes.map((n) => `${n.date || ""}||${n.texte || ""}`));
    const combinedNotes = [...baseNotes];
    for (const n of prevNotes) {
      const k = `${n.date || ""}||${n.texte || ""}`;
      if (!noteKeys.has(k)) {
        noteKeys.add(k);
        combinedNotes.push(n);
      }
    }

    return {
      ...structuredClone(baseItem),
      notes_terrain: combinedNotes,
      // Conserve l'éventuelle personnalisation manuelle de l'utilisateur si marquée
      user_modified: Boolean(prev.user_modified)
    };
  });

  // Conserve également d'éventuelles fiches créées manuellement par l'utilisateur qui ne sont pas dans la base
  const baseIds = new Set(baseEntities.map((b) => b.id));
  const baseNames = new Set(baseEntities.map((b) => String(b.nom || "").trim().toLowerCase()));
  for (const prev of currentState) {
    const key = String(prev.nom || "").trim().toLowerCase();
    if (!baseIds.has(prev.id) && !baseNames.has(key) && prev.user_created) {
      merged.push(structuredClone(prev));
    }
  }

  return merged;
}

(function initSmartSync() {
  if (typeof INITIAL_ENTITIES === "undefined") return;
  const savedVer = localStorage.getItem(VER_KEY);
  const rawState = localStorage.getItem(STATE_KEY);

  if (!rawState) {
    localStorage.setItem(STATE_KEY, JSON.stringify(INITIAL_ENTITIES));
    localStorage.setItem(VER_KEY, VAMPIRIZATION_VERSION);
    return;
  }

  if (savedVer !== VAMPIRIZATION_VERSION) {
    try {
      const parsedCurrent = JSON.parse(rawState);
      const nextState = mergeBaseWithUserChanges(INITIAL_ENTITIES, parsedCurrent);
      localStorage.setItem(STATE_KEY, JSON.stringify(nextState));
      localStorage.setItem(VER_KEY, VAMPIRIZATION_VERSION);
    } catch (e) {
      localStorage.setItem(STATE_KEY, JSON.stringify(INITIAL_ENTITIES));
      localStorage.setItem(VER_KEY, VAMPIRIZATION_VERSION);
    }
  }
})();
