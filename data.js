// Base issue de 'Suivie planification TRAULL (1).xlsx' (colonnes A à S uniquement, colonnes T+ ignorées)
const INITIAL_ENTITIES = [
  {
    "id": "ent_001",
    "nom": "192pack",
    "roles": {
      "editeur": false,
      "auto_edition": true,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "jeux politiquement incorrects : cyberpunk / onirique / dystopiques",
    "cibles": {
      "enfant": false,
      "famille": true,
      "initie": true,
      "expert": true
    },
    "commentaire": "éditeur underground",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 2,
        "mail": "",
        "mail_2": "",
        "catalog_janv_26": false,
        "check_clic": false,
        "reponse": "",
        "probleme": ""
      }
    ],
    "notes_terrain": [],
    "sorties_12m_comptage": {
      "statut": "NON_CHARGE",
      "message": "Aucune donnée de sorties sur 12 mois glissants chargée. Décompte exhaustif (sans moyenne) requis.",
      "mecaniques_total": {},
      "themes_total": {}
    }
  },
  {
    "id": "ent_002",
    "nom": "2tomatoesgames",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "Prise en main facile / mécanique avancée",
    "cibles": {
      "enfant": true,
      "famille": true,
      "initie": true,
      "expert": true
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 3,
        "mail": "https://forms.zohopublic.eu/2tomatoesgames/form/ContactaconnosotrosColaboradores/formperma/s3iGWqg9Y6WrlStkhyzpAfJq6LiGxrJbpUwR78Coi8M?zf_lang=fr",
        "mail_2": "",
        "catalog_janv_26": false,
        "check_clic": false,
        "reponse": "",
        "probleme": ""
      }
    ],
    "notes_terrain": [],
    "sorties_12m_comptage": {
      "statut": "NON_CHARGE",
      "message": "Aucune donnée de sorties sur 12 mois glissants chargée. Décompte exhaustif (sans moyenne) requis.",
      "mecaniques_total": {},
      "themes_total": {}
    }
  }
];
