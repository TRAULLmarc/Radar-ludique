const VAMPIRIZATION_VERSION = "v4_editeurs_sync";
const STATE_KEY = "radar_ludique_state_v2";
const VER_KEY = "radar_ludique_vampirization_ver";

function getBaseEntities() {
  if (typeof INITIAL_ENTITIES !== "undefined" && Array.isArray(INITIAL_ENTITIES)) {
    return INITIAL_ENTITIES;
  }
  if (typeof editeurs !== "undefined" && Array.isArray(editeurs)) {
    return editeurs;
  }
  return null;
}

function mergeBaseWithUserChanges(baseEntities, currentState) {
  if (!Array.isArray(currentState) || currentState.length === 0) {
    return structuredClone(baseEntities);
  }
  const currentById = new Map(currentState.map((item) => [item.id, item]));
  const currentByName = new Map(
    currentState.map((item) => [String(item.nom || "").trim().toLowerCase(), item])
  );

  const merged = baseEntities.map((baseItem, index) => {
    const baseId = baseItem.id || index;
    const prev =
      currentById.get(baseId) ||
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
      user_modified: Boolean(prev.user_modified)
    };
  });

  const baseIds = new Set(baseEntities.map((b, i) => b.id || i));
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
  const baseEntities = getBaseEntities();
  if (!baseEntities) return;

  const savedVer = localStorage.getItem(VER_KEY);
  const rawState = localStorage.getItem(STATE_KEY);

  if (!rawState) {
    localStorage.setItem(STATE_KEY, JSON.stringify(baseEntities));
    localStorage.setItem(VER_KEY, VAMPIRIZATION_VERSION);
    return;
  }

  if (savedVer !== VAMPIRIZATION_VERSION) {
    try {
      const parsedCurrent = JSON.parse(rawState);
      const nextState = mergeBaseWithUserChanges(baseEntities, parsedCurrent);
      localStorage.setItem(STATE_KEY, JSON.stringify(nextState));
      localStorage.setItem(VER_KEY, VAMPIRIZATION_VERSION);
    } catch (e) {
      localStorage.setItem(STATE_KEY, JSON.stringify(baseEntities));
      localStorage.setItem(VER_KEY, VAMPIRIZATION_VERSION);
    }
  }
})();
