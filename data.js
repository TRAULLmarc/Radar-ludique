// Vampirisation unique issue de 'Suivie planification TRAULL (1).xlsx' (colonnes A à S uniquement, colonnes T+ ignorées)
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
  },
  {
    "id": "ent_003",
    "nom": "404onboard",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
    "cibles": {
      "enfant": false,
      "famille": true,
      "initie": true,
      "expert": false
    },
    "commentaire": "pop culture / culture geek",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 4,
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
    "id": "ent_004",
    "nom": "A.zuga games",
    "roles": {
      "editeur": false,
      "auto_edition": true,
      "distrib": true
    },
    "flag_g": "!",
    "recherche_connue": "éducatif / ecoresponsable",
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
        "excel_row": 5,
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
    "id": "ent_005",
    "nom": "A&G éditions",
    "roles": {
      "editeur": true,
      "auto_edition": true,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "jeux à message / instructifs / ambiance / porteur de valeurs",
    "cibles": {
      "enfant": false,
      "famille": true,
      "initie": true,
      "expert": true
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 6,
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
    "id": "ent_006",
    "nom": "Abeilles édition",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "éducatifs : surtout lié à santé publique / seoucrisme",
    "cibles": {
      "enfant": true,
      "famille": true,
      "initie": false,
      "expert": false
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 7,
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
    "id": "ent_007",
    "nom": "Allplay",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "Petits formats stratégiques et boîtes ultra-compactes aux mécaniques très épurées.",
    "cibles": {
      "enfant": false,
      "famille": true,
      "initie": true,
      "expert": false
    },
    "commentaire": "éditeur US",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 8,
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
    "id": "ent_008",
    "nom": "Amazing Game",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "moins de 30 min, règles accessibles / thème fort / forte interaction // NON : jeu abstrait / élimination de joueur",
    "cibles": {
      "enfant": false,
      "famille": true,
      "initie": false,
      "expert": false
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 9,
        "mail": "cedric@amazinggame.fr",
        "mail_2": "",
        "catalog_janv_26": true,
        "check_clic": false,
        "reponse": "",
        "probleme": "Address Morte"
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
    "id": "ent_009",
    "nom": "Ankamas boardgames",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
    "cibles": {
      "enfant": true,
      "famille": true,
      "initie": false,
      "expert": false
    },
    "commentaire": "filiale d'Ankama animation...",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 10,
        "mail": "contact-edition@ankama.com",
        "mail_2": "",
        "catalog_janv_26": true,
        "check_clic": true,
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
    "id": "ent_010",
    "nom": "Argyxgames",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "jeux immersifs : enquête / réalité alternée",
    "cibles": {
      "enfant": false,
      "famille": true,
      "initie": true,
      "expert": true
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 11,
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
    "id": "ent_011",
    "nom": "Arkada",
    "roles": {
      "editeur": false,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
    "cibles": {
      "enfant": false,
      "famille": false,
      "initie": false,
      "expert": false
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 12,
        "mail": "contact@arkada.fr",
        "mail_2": "",
        "catalog_janv_26": true,
        "check_clic": true,
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
    "id": "ent_012",
    "nom": "Arkham society",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "NON : jeu abstait ou de dextérité ou en duel",
    "cibles": {
      "enfant": false,
      "famille": true,
      "initie": true,
      "expert": false
    },
    "commentaire": "",
    "ne_plus_deranger": "à Marc : \"pas de démarchage commercial\"",
    "contacts": [
      {
        "excel_row": 13,
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
    "id": "ent_013",
    "nom": "Art of games",
    "roles": {
      "editeur": false,
      "auto_edition": true,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "éducatifs",
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
        "excel_row": 14,
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
    "id": "ent_014",
    "nom": "Arthory",
    "roles": {
      "editeur": true,
      "auto_edition": true,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "Party-games  -> jeux haut en couleur",
    "cibles": {
      "enfant": false,
      "famille": true,
      "initie": true,
      "expert": true
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 15,
        "mail": "https://www.arthory.fr/contact",
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
    "id": "ent_015",
    "nom": "Asmodee édition",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": true
    },
    "flag_g": "!",
    "recherche_connue": "NON : thématique doublon",
    "cibles": {
      "enfant": false,
      "famille": true,
      "initie": true,
      "expert": true
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 16,
        "mail": "monsieur.francois@lab4games.com",
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
    "id": "ent_016",
    "nom": "Aspic games",
    "roles": {
      "editeur": true,
      "auto_edition": true,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "jeux colorés / univers riche / création gamme 5min, Forte interaction sans élimination / 30-40min / peu de cartesn // NON : Tour par tour / élimination de joueur",
    "cibles": {
      "enfant": true,
      "famille": true,
      "initie": false,
      "expert": false
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 17,
        "mail": "aspicgames.fr/index.php/contact/",
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
    "id": "ent_017",
    "nom": "Asyncron games",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
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
        "excel_row": 18,
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
    "id": "ent_018",
    "nom": "Atalia jeux",
    "roles": {
      "editeur": false,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "règles épurées, twist de mécanique original",
    "cibles": {
      "enfant": false,
      "famille": false,
      "initie": false,
      "expert": false
    },
    "commentaire": "",
    "ne_plus_deranger": "liquidation judiciaire",
    "contacts": [
      {
        "excel_row": 19,
        "mail": "contact@atalia-jeux.com",
        "mail_2": "",
        "catalog_janv_26": false,
        "check_clic": false,
        "reponse": "",
        "probleme": "liquidation Judiciaire"
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
    "id": "ent_019",
    "nom": "ATM gaming",
    "roles": {
      "editeur": false,
      "auto_edition": true,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "ambiance (JUDUKU)",
    "cibles": {
      "enfant": true,
      "famille": true,
      "initie": false,
      "expert": false
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 20,
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
    "id": "ent_020",
    "nom": "Aurora",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
    "cibles": {
      "enfant": true,
      "famille": true,
      "initie": true,
      "expert": true
    },
    "commentaire": "game jeux enquête .... jeu identité caché : shadow hunter /Avalon",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 21,
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
    "id": "ent_021",
    "nom": "Auzou games",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": true
    },
    "flag_g": "!",
    "recherche_connue": "\"cultivons l'imagination\"",
    "cibles": {
      "enfant": true,
      "famille": true,
      "initie": false,
      "expert": false
    },
    "commentaire": "issu de auzou livres jeunesse",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 22,
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
    "id": "ent_022",
    "nom": "Awaken realms",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "nombreuses figurines",
    "cibles": {
      "enfant": false,
      "famille": false,
      "initie": false,
      "expert": true
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 23,
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
    "id": "ent_023",
    "nom": "Azao games",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "en recherche pour gamme de petite boite",
    "cibles": {
      "enfant": true,
      "famille": true,
      "initie": true,
      "expert": true
    },
    "commentaire": "peuvent aussi réaliser une commande de proto",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 24,
        "mail": "info@azaogames.com",
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
    "id": "ent_024",
    "nom": "Bakakou",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "jeux d'ambiance",
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
        "excel_row": 25,
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
    "id": "ent_025",
    "nom": "Banana smiles",
    "roles": {
      "editeur": false,
      "auto_edition": true,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
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
        "excel_row": 26,
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
    "id": "ent_026",
    "nom": "Bankiiz éditions",
    "roles": {
      "editeur": false,
      "auto_edition": true,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "famillial rafraichissant  // NON : jeu abstrait / jeu d'adresse / jeu de quizz",
    "cibles": {
      "enfant": true,
      "famille": true,
      "initie": false,
      "expert": false
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 27,
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
    "id": "ent_027",
    "nom": "Bayard Jeux",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": true
    },
    "flag_g": "!",
    "recherche_connue": "Franchise enfants (samsam/toto/petit ours brun)  \"emmener les enfants vers de nouveaux horizons\"",
    "cibles": {
      "enfant": true,
      "famille": true,
      "initie": false,
      "expert": false
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 28,
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
    "id": "ent_028",
    "nom": "Bioviva",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": true
    },
    "flag_g": "!",
    "recherche_connue": "éducatifs / épanouissement de l'enfant  //  nature - écoresponsabilité",
    "cibles": {
      "enfant": true,
      "famille": true,
      "initie": false,
      "expert": false
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 29,
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
    "id": "ent_029",
    "nom": "Blackrock games",
    "roles": {
      "editeur": false,
      "auto_edition": false,
      "distrib": true
    },
    "flag_g": "!",
    "recherche_connue": "",
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
        "excel_row": 30,
        "mail": "yoann.laurent@blackrockgames.fr",
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
    "id": "ent_030",
    "nom": "Blam !",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "éditeur Celestia",
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
        "excel_row": 31,
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
    "id": "ent_031",
    "nom": "Blue cocker",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
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
        "excel_row": 32,
        "mail": "https://bluecocker.com/formulaire-de-contact-sourcing/",
        "mail_2": "",
        "catalog_janv_26": true,
        "check_clic": false,
        "reponse": "",
        "probleme": "Erreur sur le site"
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
    "id": "ent_032",
    "nom": "Blue Orange",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": true
    },
    "flag_g": "!",
    "recherche_connue": "Innovant / malins / Créer du nouveau joueur // NON : 2J / jeu de souffle / Jeu à « capacité »",
    "cibles": {
      "enfant": true,
      "famille": true,
      "initie": true,
      "expert": false
    },
    "commentaire": "sont en Lorraine",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 33,
        "mail": "anthony@blueorangegames.eu",
        "mail_2": "",
        "catalog_janv_26": true,
        "check_clic": false,
        "reponse": "",
        "probleme": ""
      },
      {
        "excel_row": 34,
        "mail": "matthieu@blueorangegames.eu",
        "mail_2": "matthias.girardeau@blueorangegames.eu",
        "catalog_janv_26": true,
        "check_clic": true,
        "reponse": "a apporté retour construit sur chacun, demandé test de Floraison",
        "probleme": ""
      },
      {
        "excel_row": 35,
        "mail": "maxime@blueorangegames.eu",
        "mail_2": "",
        "catalog_janv_26": true,
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
    "id": "ent_033",
    "nom": "Boarddice",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "",
    "recherche_connue": "Eurogames moyens/lourds (2-4 joueurs). Pitch vidéo (2-3 min) + version TTS recommandés.Très orienté gros jeux de gestion et d'optimisation.",
    "cibles": {
      "enfant": false,
      "famille": false,
      "initie": true,
      "expert": true
    },
    "commentaire": "éditeur Polonais lié Asmodée",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 36,
        "mail": "contact@boardanddice.com | Formulaire web",
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
    "id": "ent_034",
    "nom": "Bombyx",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "cartes uniquement (pour nouvelle gamme) / 2J+                       // NON : 2J / party game",
    "cibles": {
      "enfant": false,
      "famille": true,
      "initie": true,
      "expert": false
    },
    "commentaire": "\"fonctionnent au coup de coeur\" pour tout type de jeu",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 37,
        "mail": "ehascoet@studiobombyx.com",
        "mail_2": "",
        "catalog_janv_26": true,
        "check_clic": false,
        "reponse": "",
        "probleme": ""
      },
      {
        "excel_row": 38,
        "mail": "info@studiobombyx.com",
        "mail_2": "",
        "catalog_janv_26": true,
        "check_clic": false,
        "reponse": "",
        "probleme": ""
      },
      {
        "excel_row": 39,
        "mail": "tledoare@studiobombyx.com",
        "mail_2": "ydroumaguet@studiobombyx.com",
        "catalog_janv_26": true,
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
    "id": "ent_035",
    "nom": "Boom boom games",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
    "cibles": {
      "enfant": true,
      "famille": true,
      "initie": true,
      "expert": true
    },
    "commentaire": "éditeur fliptown",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 40,
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
    "id": "ent_036",
    "nom": "Bouvier international",
    "roles": {
      "editeur": false,
      "auto_edition": true,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "thèmes fort / règles faciles astucieuces  // NON : SEULEMENT EN AUTOEDITION",
    "cibles": {
      "enfant": false,
      "famille": false,
      "initie": true,
      "expert": false
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 41,
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
    "id": "ent_037",
    "nom": "Bragelonne games",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": true
    },
    "flag_g": "!",
    "recherche_connue": "? souvent jeux un peu naratif ?",
    "cibles": {
      "enfant": true,
      "famille": true,
      "initie": true,
      "expert": true
    },
    "commentaire": "issus de bragelonne édition littéraire",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 42,
        "mail": "e.beiramar@bragelonne.games",
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
    "id": "ent_038",
    "nom": "Button shy games",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "",
    "recherche_connue": "18 cartes only",
    "cibles": {
      "enfant": false,
      "famille": true,
      "initie": false,
      "expert": false
    },
    "commentaire": "éditeur US",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 43,
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
    "id": "ent_039",
    "nom": "Buzzy games",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "expérience ludique dynamique, FUN, qui bouge autour de la table",
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
        "excel_row": 44,
        "mail": "wwatine@blackrockgames.fr",
        "mail_2": "Contact - BUZZY GAMES",
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
    "id": "ent_040",
    "nom": "BYR games",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
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
        "excel_row": 45,
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
    "id": "ent_041",
    "nom": "Capitaine meeple",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
    "cibles": {
      "enfant": true,
      "famille": true,
      "initie": true,
      "expert": true
    },
    "commentaire": "entreprise de \"vacances ludique\" (dont croisière)",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 46,
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
    "id": "ent_042",
    "nom": "Catch up games",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "Mécanique originale   // NON : jeu solo / abstrait",
    "cibles": {
      "enfant": false,
      "famille": false,
      "initie": true,
      "expert": true
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 47,
        "mail": "clement@catchupgames.com",
        "mail_2": "",
        "catalog_janv_26": true,
        "check_clic": false,
        "reponse": "",
        "probleme": ""
      },
      {
        "excel_row": 48,
        "mail": "contact@catchupgames.com",
        "mail_2": "",
        "catalog_janv_26": true,
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
    "id": "ent_043",
    "nom": "Celtic tales",
    "roles": {
      "editeur": false,
      "auto_edition": true,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "jeux celtiques / bretons / tradition bretonne : jeux locaux et légendes locales",
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
        "excel_row": 49,
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
    "id": "ent_044",
    "nom": "Chèvre édition",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": true
    },
    "flag_g": "!",
    "recherche_connue": "",
    "cibles": {
      "enfant": true,
      "famille": true,
      "initie": true,
      "expert": true
    },
    "commentaire": "écoresponsable",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 50,
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
    "id": "ent_045",
    "nom": "Chouic",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "créateur d'appli mobile / jeux d'ambiance",
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
        "excel_row": 51,
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
    "id": "ent_046",
    "nom": "Cocktailgames",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "Jeux ambiance en boite metallique, rapide à jouer",
    "cibles": {
      "enfant": true,
      "famille": true,
      "initie": true,
      "expert": false
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 52,
        "mail": "info@cocktailgames.com",
        "mail_2": "",
        "catalog_janv_26": true,
        "check_clic": false,
        "reponse": "pas intéressé",
        "probleme": ""
      },
      {
        "excel_row": 53,
        "mail": "mike@cocktailgames.com",
        "mail_2": "",
        "catalog_janv_26": true,
        "check_clic": false,
        "reponse": "pas intéressé",
        "probleme": ""
      },
      {
        "excel_row": 54,
        "mail": "Site",
        "mail_2": "",
        "catalog_janv_26": true,
        "check_clic": false,
        "reponse": "pas intéressé",
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
    "id": "ent_047",
    "nom": "Collective adventure",
    "roles": {
      "editeur": false,
      "auto_edition": true,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "\"impacter le monde social et environnemental\"",
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
        "excel_row": 55,
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
    "id": "ent_048",
    "nom": "Comoludo",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "Jeux abstrait / stratégie sans hasard : de 25min max               // NON : trop d’informations / variante de jeu d’échecs",
    "cibles": {
      "enfant": false,
      "famille": true,
      "initie": true,
      "expert": true
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 56,
        "mail": "info@cosmoludo.com",
        "mail_2": "cosmoludo@outlook.com",
        "catalog_janv_26": true,
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
    "id": "ent_049",
    "nom": "CTRL zèbre édition",
    "roles": {
      "editeur": false,
      "auto_edition": true,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
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
        "excel_row": 57,
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
    "id": "ent_050",
    "nom": "Czech Games Edition",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "",
    "recherche_connue": "Eurogames 60-180 min avec twists originaux, party games malins. Formulaire dédié + vidéo en anglais (pas de jeux < 20 min).",
    "cibles": {
      "enfant": false,
      "famille": true,
      "initie": true,
      "expert": true
    },
    "commentaire": "éditeur république Tchèque",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 58,
        "mail": "support@czechgames.com",
        "mail_2": "marketing@czechgames.com",
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
    "id": "ent_051",
    "nom": "Darucat",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
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
        "excel_row": 59,
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
    "id": "ent_052",
    "nom": "Dayx of wonder",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
    "cibles": {
      "enfant": false,
      "famille": true,
      "initie": false,
      "expert": false
    },
    "commentaire": "lié à asmodée",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 60,
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
    "id": "ent_053",
    "nom": "De Breville éditions",
    "roles": {
      "editeur": false,
      "auto_edition": true,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "jeu divertissants et humoristique",
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
        "excel_row": 61,
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
    "id": "ent_054",
    "nom": "Debacle jeu",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "originaux / frenchy / accessible",
    "cibles": {
      "enfant": false,
      "famille": true,
      "initie": true,
      "expert": true
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 62,
        "mail": "marianne@ludistri.fr",
        "mail_2": "Contact - Débâcle Jeux (debacle.fr)",
        "catalog_janv_26": true,
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
    "id": "ent_055",
    "nom": "Devir",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "",
    "recherche_connue": "Jeux de cartes tactiques (Gamme Pocket), Eurogames 30-60 min. Sell sheet + vidéo requises.",
    "cibles": {
      "enfant": true,
      "famille": true,
      "initie": true,
      "expert": true
    },
    "commentaire": "éditeur Espagnol   Enfant et Expert rarement",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 63,
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
    "id": "ent_056",
    "nom": "Discovery",
    "roles": {
      "editeur": false,
      "auto_edition": true,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "jeux narratif et immercif",
    "cibles": {
      "enfant": false,
      "famille": false,
      "initie": false,
      "expert": false
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 64,
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
    "id": "ent_057",
    "nom": "Disto studio",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "jeux distordus et insolite",
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
        "excel_row": 65,
        "mail": "contact@distostudio.fr",
        "mail_2": "",
        "catalog_janv_26": true,
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
    "id": "ent_058",
    "nom": "Djeco",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
    "cibles": {
      "enfant": true,
      "famille": true,
      "initie": false,
      "expert": false
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 66,
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
    "id": "ent_059",
    "nom": "Don't panic game",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "Culture de l'imaginaire //  LOCALISATION",
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
        "excel_row": 67,
        "mail": "communication@dontpanicgames.com",
        "mail_2": "",
        "catalog_janv_26": true,
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
    "id": "ent_060",
    "nom": "Double combo games",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "Secret / eternité",
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
        "excel_row": 68,
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
    "id": "ent_061",
    "nom": "Dujardin",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": true
    },
    "flag_g": "!",
    "recherche_connue": "",
    "cibles": {
      "enfant": true,
      "famille": true,
      "initie": true,
      "expert": true
    },
    "commentaire": "appartient à TF1",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 69,
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
    "id": "ent_062",
    "nom": "Dungeon factory",
    "roles": {
      "editeur": false,
      "auto_edition": true,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "impression 3D",
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
        "excel_row": 70,
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
    "id": "ent_063",
    "nom": "Edge entertainement",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "imaginaire / partage / rêve",
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
        "excel_row": 71,
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
    "id": "ent_064",
    "nom": "éditions Spielwiese",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
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
        "excel_row": 72,
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
    "id": "ent_065",
    "nom": "EGPX",
    "roles": {
      "editeur": false,
      "auto_edition": true,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
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
        "excel_row": 73,
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
    "id": "ent_066",
    "nom": "entre 2 chainses",
    "roles": {
      "editeur": false,
      "auto_edition": true,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
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
        "excel_row": 74,
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
    "id": "ent_067",
    "nom": "evolugame",
    "roles": {
      "editeur": false,
      "auto_edition": true,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "Jeux de cartes",
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
        "excel_row": 75,
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
    "id": "ent_068",
    "nom": "Exploding Kitten",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "",
    "recherche_connue": "Party games très décalés, mécaniques simples, cartes à effets, humour immédiat. Axé sur le grand public, les règles lues en 2 min et le fun. Sournoiserie est reine",
    "cibles": {
      "enfant": true,
      "famille": true,
      "initie": false,
      "expert": false
    },
    "commentaire": "éditeur US Rarement enfant",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 76,
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
    "id": "ent_069",
    "nom": "Explor8",
    "roles": {
      "editeur": false,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "éditeur  fédération   ainsi que jeu de pli",
    "cibles": {
      "enfant": false,
      "famille": true,
      "initie": true,
      "expert": true
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 77,
        "mail": "contact@explor8.com",
        "mail_2": "",
        "catalog_janv_26": true,
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
    "id": "ent_070",
    "nom": "Faire play édition",
    "roles": {
      "editeur": false,
      "auto_edition": true,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
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
        "excel_row": 78,
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
    "id": "ent_071",
    "nom": "Fantastic lombric",
    "roles": {
      "editeur": false,
      "auto_edition": true,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
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
        "excel_row": 79,
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
    "id": "ent_072",
    "nom": "Fée mumuz",
    "roles": {
      "editeur": false,
      "auto_edition": true,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
    "cibles": {
      "enfant": false,
      "famille": true,
      "initie": false,
      "expert": false
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 80,
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
    "id": "ent_073",
    "nom": "Fentasy games",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
    "cibles": {
      "enfant": false,
      "famille": false,
      "initie": true,
      "expert": true
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 81,
        "mail": "florian@fentasy-games.com",
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
    "id": "ent_074",
    "nom": "Fernand sathan",
    "roles": {
      "editeur": false,
      "auto_edition": true,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "Créer exclusivement pour éditer \"JoRéTaPo\" :          \"pervertir les generations a venir\"",
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
        "excel_row": 82,
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
    "id": "ent_075",
    "nom": "Fish in the sea",
    "roles": {
      "editeur": true,
      "auto_edition": true,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
    "cibles": {
      "enfant": false,
      "famille": true,
      "initie": true,
      "expert": false
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 83,
        "mail": "contact@editions.fish",
        "mail_2": "",
        "catalog_janv_26": true,
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
    "id": "ent_076",
    "nom": "Flatlined Games",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
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
        "excel_row": 84,
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
    "id": "ent_077",
    "nom": "Funforge",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": true
    },
    "flag_g": "!",
    "recherche_connue": "",
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
        "excel_row": 85,
        "mail": "claude@funforge.fr",
        "mail_2": "contact@funforge.zohosupport.com",
        "catalog_janv_26": true,
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
    "id": "ent_078",
    "nom": "Funnyfox",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
    "cibles": {
      "enfant": false,
      "famille": true,
      "initie": true,
      "expert": false
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 86,
        "mail": "games@funnyfox.fr",
        "mail_2": "",
        "catalog_janv_26": true,
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
    "id": "ent_079",
    "nom": "Game flow",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "Livres jeux",
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
        "excel_row": 87,
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
    "id": "ent_080",
    "nom": "Game stud",
    "roles": {
      "editeur": false,
      "auto_edition": true,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
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
        "excel_row": 88,
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
    "id": "ent_081",
    "nom": "Geek Attitude Games",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "Jeux à thème ; mécanique décalée",
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
        "excel_row": 89,
        "mail": "etienne@geekattitudegames.com",
        "mail_2": "Contact | Geek Attitude Games",
        "catalog_janv_26": true,
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
    "id": "ent_082",
    "nom": "Geekoviz",
    "roles": {
      "editeur": false,
      "auto_edition": true,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
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
        "excel_row": 90,
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
    "id": "ent_083",
    "nom": "Ghost dog games",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": true
    },
    "flag_g": "!",
    "recherche_connue": "Gamme Jeux dans une boite 110*65*25 (vente 10€ max)         // NON : jeu abstrait",
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
        "excel_row": 91,
        "mail": "antoinedavrou@ghostdoggames.com",
        "mail_2": "",
        "catalog_janv_26": true,
        "check_clic": false,
        "reponse": "",
        "probleme": "Address Morte"
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
    "id": "ent_084",
    "nom": "Gigamic",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": true
    },
    "flag_g": "!",
    "recherche_connue": "règles simples (Akropolis MAX) / mécanique innovant / matériel valorisant, <1h de jeu       // NON : agression entre les joueurs / bluf / mise / culture",
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
        "excel_row": 92,
        "mail": "project@gigamic.com",
        "mail_2": "",
        "catalog_janv_26": true,
        "check_clic": true,
        "reponse": "",
        "probleme": "Address plus utilisée : plutôt contacté Alain"
      },
      {
        "excel_row": 93,
        "mail": "alain@gigamic.com",
        "mail_2": "caroline@gigamic.com",
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
    "id": "ent_085",
    "nom": "Goliath",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": true
    },
    "flag_g": "!",
    "recherche_connue": "",
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
        "excel_row": 94,
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
    "id": "ent_086",
    "nom": "GR édition",
    "roles": {
      "editeur": false,
      "auto_edition": true,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
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
        "excel_row": 95,
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
    "id": "ent_087",
    "nom": "Green games",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": true
    },
    "flag_g": "!",
    "recherche_connue": "",
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
        "excel_row": 96,
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
    "id": "ent_088",
    "nom": "Grrre games",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
    "cibles": {
      "enfant": false,
      "famille": true,
      "initie": false,
      "expert": false
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 97,
        "mail": "contact.grrregames@gmail.com",
        "mail_2": "grrregames@gmail.com",
        "catalog_janv_26": true,
        "check_clic": false,
        "reponse": "pas intéressé",
        "probleme": "Négatif"
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
    "id": "ent_089",
    "nom": "HABA",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": true
    },
    "flag_g": "!",
    "recherche_connue": "",
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
        "excel_row": 98,
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
    "id": "ent_090",
    "nom": "Hans im gluck",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
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
        "excel_row": 99,
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
    "id": "ent_091",
    "nom": "Haumea Games",
    "roles": {
      "editeur": false,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
    "cibles": {
      "enfant": false,
      "famille": false,
      "initie": false,
      "expert": false
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 100,
        "mail": "thomas@haumeagames.com",
        "mail_2": "",
        "catalog_janv_26": true,
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
    "id": "ent_092",
    "nom": "Hécate éditions",
    "roles": {
      "editeur": false,
      "auto_edition": true,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "JDR et animation",
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
        "excel_row": 101,
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
    "id": "ent_093",
    "nom": "Helvetiq",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "Petits jeux de cartes (Gamme Pocket), thèmes originaux/nature, twist mécanique. Formulaire + vidéo.",
    "cibles": {
      "enfant": true,
      "famille": true,
      "initie": true,
      "expert": false
    },
    "commentaire": "éditeur suisse",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 102,
        "mail": "creative@helvetiq.ch",
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
    "id": "ent_094",
    "nom": "Horrible Guild",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "",
    "recherche_connue": "Jeux à matériel/concept fort (gimmick original, billes, découpes), familiaux+ à initiés.",
    "cibles": {
      "enfant": false,
      "famille": true,
      "initie": true,
      "expert": false
    },
    "commentaire": "éditeur Italien",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 103,
        "mail": "press@horribleguild.com",
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
    "id": "ent_095",
    "nom": "Hot Macacos",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "innovant / stimulant",
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
        "excel_row": 104,
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
    "id": "ent_096",
    "nom": "Iello",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": true
    },
    "flag_g": "!",
    "recherche_connue": "Cherche ++ pour gamme de jeux de dé                               sinon tout type de jeu  // SAUF : petit jeu 2j",
    "cibles": {
      "enfant": false,
      "famille": true,
      "initie": true,
      "expert": true
    },
    "commentaire": "sont en Lorraine",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 105,
        "mail": "gautier.althaus@iello.fr",
        "mail_2": "",
        "catalog_janv_26": true,
        "check_clic": false,
        "reponse": "pas intéressé",
        "probleme": "Négatif"
      },
      {
        "excel_row": 106,
        "mail": "adrien.fenouillet@iello.fr",
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
    "id": "ent_097",
    "nom": "Igiari",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
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
        "excel_row": 107,
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
    "id": "ent_098",
    "nom": "inPatience",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "spécialisé en jeu SOLO ou COOP.",
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
        "excel_row": 108,
        "mail": "info@inpatience.com",
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
    "id": "ent_099",
    "nom": "InstaPlay",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
    "cibles": {
      "enfant": true,
      "famille": true,
      "initie": true,
      "expert": true
    },
    "commentaire": "intermédiaire : propose aux auteurs ayant bon jeu de trouver le bon éditeur",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 109,
        "mail": "gaetan@instaplay.fr",
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
    "id": "ent_100",
    "nom": "Intrafin",
    "roles": {
      "editeur": false,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "surtout LOCALISATION.... pourrait changer",
    "cibles": {
      "enfant": false,
      "famille": false,
      "initie": true,
      "expert": true
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 110,
        "mail": "jurgen@intrafin.be",
        "mail_2": "",
        "catalog_janv_26": true,
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
    "id": "ent_101",
    "nom": "IPA",
    "roles": {
      "editeur": false,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
    "cibles": {
      "enfant": false,
      "famille": false,
      "initie": false,
      "expert": false
    },
    "commentaire": "Tiket 991824",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 111,
        "mail": "Aurora, Kolossal Games, Grail Games, Maple Games, Matagot Studio, Moon Gate Design",
        "mail_2": "",
        "catalog_janv_26": true,
        "check_clic": false,
        "reponse": "pas intéressé",
        "probleme": "Négatif"
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
    "id": "ent_102",
    "nom": "J-lec",
    "roles": {
      "editeur": false,
      "auto_edition": true,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "jeux familiaux",
    "cibles": {
      "enfant": false,
      "famille": true,
      "initie": false,
      "expert": false
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 112,
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
    "id": "ent_103",
    "nom": "Jester games",
    "roles": {
      "editeur": false,
      "auto_edition": true,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "jeux de stratégie intermediaire : beaux et profond",
    "cibles": {
      "enfant": false,
      "famille": false,
      "initie": true,
      "expert": true
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 113,
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
    "id": "ent_104",
    "nom": "Jeunoh",
    "roles": {
      "editeur": false,
      "auto_edition": true,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "Ludo-pédagogique : cible les enfants \"dys\"",
    "cibles": {
      "enfant": true,
      "famille": true,
      "initie": false,
      "expert": false
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 114,
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
    "id": "ent_105",
    "nom": "Jeux opla",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": true
    },
    "flag_g": "!",
    "recherche_connue": "",
    "cibles": {
      "enfant": true,
      "famille": true,
      "initie": true,
      "expert": true
    },
    "commentaire": "dev et éco-fabrication française",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 115,
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
    "id": "ent_106",
    "nom": "Jocus",
    "roles": {
      "editeur": false,
      "auto_edition": true,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
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
        "excel_row": 116,
        "mail": "nicolas@jocus.fr",
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
    "id": "ent_107",
    "nom": "Joodini éditions",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
    "cibles": {
      "enfant": false,
      "famille": true,
      "initie": true,
      "expert": true
    },
    "commentaire": "fonctionnent au coup de coeur",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 117,
        "mail": "auteur@joodini.com",
        "mail_2": "Contact – JOODINI Éditions",
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
    "id": "ent_108",
    "nom": "JyDe Games",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
    "cibles": {
      "enfant": false,
      "famille": true,
      "initie": true,
      "expert": true
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 118,
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
    "id": "ent_109",
    "nom": "KYF édition",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
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
        "excel_row": 119,
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
    "id": "ent_110",
    "nom": "La boite de jeu",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
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
        "excel_row": 120,
        "mail": "contact@laboitedejeu.fr",
        "mail_2": "",
        "catalog_janv_26": true,
        "check_clic": false,
        "reponse": "pas intéressé ??",
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
    "id": "ent_111",
    "nom": "Lab4games",
    "roles": {
      "editeur": false,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
    "cibles": {
      "enfant": false,
      "famille": false,
      "initie": false,
      "expert": false
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 121,
        "mail": "Days of Wonder, Libellud, Next Move, Repos Production et Space Cowboys",
        "mail_2": "",
        "catalog_janv_26": true,
        "check_clic": false,
        "reponse": "",
        "probleme": ""
      },
      {
        "excel_row": 122,
        "mail": "monsieur.francois@lab4games.com",
        "mail_2": "",
        "catalog_janv_26": true,
        "check_clic": false,
        "reponse": "",
        "probleme": "Address Morte"
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
    "id": "ent_112",
    "nom": "Laboludic",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "Jeux enfant que les parents aiment rejouer  // NON : jeu personnalisé",
    "cibles": {
      "enfant": true,
      "famille": true,
      "initie": true,
      "expert": true
    },
    "commentaire": "écoresponsable",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 123,
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
    "id": "ent_113",
    "nom": "Les jeux de société De Nico",
    "roles": {
      "editeur": false,
      "auto_edition": true,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
    "cibles": {
      "enfant": true,
      "famille": true,
      "initie": true,
      "expert": true
    },
    "commentaire": "fabrication exclusivement française",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 124,
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
    "id": "ent_114",
    "nom": "Les jeux du lac",
    "roles": {
      "editeur": false,
      "auto_edition": true,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
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
        "excel_row": 125,
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
    "id": "ent_115",
    "nom": "Les jeux du Mouss",
    "roles": {
      "editeur": false,
      "auto_edition": true,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "jeux nomades / jeux d'adresse",
    "cibles": {
      "enfant": true,
      "famille": true,
      "initie": true,
      "expert": true
    },
    "commentaire": "ecoresponsable français",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 126,
        "mail": "contact@jeuxdumouss.com",
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
    "id": "ent_116",
    "nom": "Libellud",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
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
        "excel_row": 127,
        "mail": "voir avec asmode",
        "mail_2": "",
        "catalog_janv_26": true,
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
    "id": "ent_117",
    "nom": "Loki",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": true
    },
    "flag_g": "!",
    "recherche_connue": "",
    "cibles": {
      "enfant": true,
      "famille": false,
      "initie": false,
      "expert": false
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 128,
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
    "id": "ent_118",
    "nom": "Lord racoon games",
    "roles": {
      "editeur": false,
      "auto_edition": true,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
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
        "excel_row": 129,
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
    "id": "ent_119",
    "nom": "Lucky duck kids",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
    "cibles": {
      "enfant": true,
      "famille": false,
      "initie": false,
      "expert": false
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 130,
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
    "id": "ent_120",
    "nom": "Luckyduckgames",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "Cherche des jeux à 40€",
    "cibles": {
      "enfant": false,
      "famille": true,
      "initie": true,
      "expert": true
    },
    "commentaire": "TOUT DOIT ÊTRE EN ANGLAIS",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 131,
        "mail": "info@luckyduckgames.com",
        "mail_2": "",
        "catalog_janv_26": true,
        "check_clic": true,
        "reponse": "pas intéressé",
        "probleme": ""
      },
      {
        "excel_row": 132,
        "mail": "marek.cholostiakow@luckyduckgames.com",
        "mail_2": "",
        "catalog_janv_26": true,
        "check_clic": true,
        "reponse": "pas intéressé",
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
    "id": "ent_121",
    "nom": "Ludistri",
    "roles": {
      "editeur": false,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
    "cibles": {
      "enfant": false,
      "famille": false,
      "initie": false,
      "expert": false
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 133,
        "mail": "cyril@ludistri.f",
        "mail_2": "",
        "catalog_janv_26": true,
        "check_clic": true,
        "reponse": "",
        "probleme": "Transférer"
      },
      {
        "excel_row": 134,
        "mail": "tiffany@ludistri.fr",
        "mail_2": "",
        "catalog_janv_26": true,
        "check_clic": true,
        "reponse": "",
        "probleme": "Transférer"
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
    "id": "ent_122",
    "nom": "Ludolux",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "plutôt jeux pour enfant",
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
        "excel_row": 135,
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
    "id": "ent_123",
    "nom": "Ludonaute",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
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
        "excel_row": 136,
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
    "id": "ent_124",
    "nom": "Lumberjack",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
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
        "excel_row": 137,
        "mail": "a.roffe@lumberjacks-studio.com",
        "mail_2": "",
        "catalog_janv_26": true,
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
    "id": "ent_125",
    "nom": "Lumberjacks",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
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
        "excel_row": 138,
        "mail": "",
        "mail_2": "",
        "catalog_janv_26": true,
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
    "id": "ent_126",
    "nom": "Mad distribution",
    "roles": {
      "editeur": false,
      "auto_edition": false,
      "distrib": true
    },
    "flag_g": "!",
    "recherche_connue": "Nippon",
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
        "excel_row": 139,
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
    "id": "ent_127",
    "nom": "Matago",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "Généraliste",
    "cibles": {
      "enfant": false,
      "famille": true,
      "initie": true,
      "expert": false
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 140,
        "mail": "https://support.matagot-friends.com/open.php?userTypeId=2&lang=fr_FR",
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
    "id": "ent_128",
    "nom": "Maxilud",
    "roles": {
      "editeur": false,
      "auto_edition": true,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
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
        "excel_row": 141,
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
    "id": "ent_129",
    "nom": "Monolith editions",
    "roles": {
      "editeur": false,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
    "cibles": {
      "enfant": false,
      "famille": false,
      "initie": false,
      "expert": false
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 142,
        "mail": "chloe@monolithedition.com",
        "mail_2": "",
        "catalog_janv_26": true,
        "check_clic": false,
        "reponse": "",
        "probleme": "Address Morte"
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
    "id": "ent_130",
    "nom": "Morning",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "Raconter des histoires",
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
        "excel_row": 143,
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
    "id": "ent_131",
    "nom": "Multifaces éditions",
    "roles": {
      "editeur": false,
      "auto_edition": true,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "> 16 ans  :  rêver / s'évader / partager / communiquer",
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
        "excel_row": 144,
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
    "id": "ent_132",
    "nom": "Multivers édition",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "jeu à thème fort, pas spécialement ambiance",
    "cibles": {
      "enfant": false,
      "famille": true,
      "initie": true,
      "expert": false
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 145,
        "mail": "dg.multivers@gmail.com",
        "mail_2": "",
        "catalog_janv_26": true,
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
    "id": "ent_133",
    "nom": "Naga éditions",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "Jeu de cartes expert",
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
        "excel_row": 146,
        "mail": "contact@nagaeditions.com",
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
    "id": "ent_134",
    "nom": "NCV",
    "roles": {
      "editeur": false,
      "auto_edition": true,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "jeux bizarres",
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
        "excel_row": 147,
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
    "id": "ent_135",
    "nom": "Neoludis",
    "roles": {
      "editeur": false,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
    "cibles": {
      "enfant": false,
      "famille": false,
      "initie": false,
      "expert": false
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 148,
        "mail": "",
        "mail_2": "",
        "catalog_janv_26": true,
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
    "id": "ent_136",
    "nom": "Next moves",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "Abstrait / simple",
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
        "excel_row": 149,
        "mail": "voir asmodée",
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
    "id": "ent_137",
    "nom": "Nothing but games",
    "roles": {
      "editeur": false,
      "auto_edition": true,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "univers de AracKhan",
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
        "excel_row": 150,
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
    "id": "ent_138",
    "nom": "Nürnberger-Spielkarten-Verlag",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "",
    "recherche_connue": "TRAVEL stands for very compact dice and card games with quick play times \nthat fit into almost any pocket. Their simple structure makes them particularly \nattractive for small debut projects.\nSIGNATURE is the standard format at NSV. Here you’ll find games in the \nspirit of our successful titles QWIXX and THE MIND: timeless mechanics that \nwork as language‑neutral as possible and are therefore easy to bring to the \ninternational market.\nEXTRA includes our games that offer a “certain extra”. With this format, we \ntarget more experienced board game fans, while still staying accessible to an‑\nyone. Materials should primarily be card‑ and/or dice‑based.",
    "cibles": {
      "enfant": false,
      "famille": true,
      "initie": true,
      "expert": false
    },
    "commentaire": "éditeur allemand ligne éditoriale sur www.nsv.de/en/our-game-designers",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 151,
        "mail": "https://www.nsv.de/wp-content/uploads/2026/02/Information-for-Game-Designers.pdf",
        "mail_2": "https://calendly.com/nsv-designer-days/nsvdesignerdays2026dez",
        "catalog_janv_26": false,
        "check_clic": false,
        "reponse": "",
        "probleme": "- Minimal variations of well-known classics (e.g. Mau-Mau variants)\n- Role-playing systems\n- Trading card games\n- Games with very extensive rules – even if the components would fit our programme\n- Children’s games\n- Pure 2-player games\n- Educational games\n- Arithmetic games\n- Trick-taking games\n- Highly performative party games\n- Games heavily dependent on language\n- Games whose rule systems were developed using generative AI (you’re free to use AI \nto visually enhance your prototypes, though)"
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
    "id": "ent_139",
    "nom": "Nuts! Publishing",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": true
    },
    "flag_g": "!",
    "recherche_connue": "Histoire / situation de conflit fictif",
    "cibles": {
      "enfant": true,
      "famille": true,
      "initie": true,
      "expert": true
    },
    "commentaire": "max 1 jeu par an",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 152,
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
    "id": "ent_140",
    "nom": "Nutz",
    "roles": {
      "editeur": false,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
    "cibles": {
      "enfant": false,
      "famille": false,
      "initie": false,
      "expert": false
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 153,
        "mail": "",
        "mail_2": "",
        "catalog_janv_26": true,
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
    "id": "ent_141",
    "nom": "Oh happy games",
    "roles": {
      "editeur": false,
      "auto_edition": true,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "simple et positif",
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
        "excel_row": 154,
        "mail": "https://ohhappygames.com/pages/contact",
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
    "id": "ent_142",
    "nom": "OINK games",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "",
    "recherche_connue": "Format boîte ultra-compact, règles minimalistes mais grande profondeur/bluff (15-30 min).",
    "cibles": {
      "enfant": true,
      "famille": true,
      "initie": true,
      "expert": false
    },
    "commentaire": "éditeur Japonais",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 155,
        "mail": "contact@oinkgames.com",
        "mail_2": "info@oinkgames.com",
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
    "id": "ent_143",
    "nom": "Oka luda",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "jeu 100% bon karma",
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
        "excel_row": 156,
        "mail": "https://okaluda.fr/contactez-nous/",
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
    "id": "ent_144",
    "nom": "Okopix",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
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
        "excel_row": 157,
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
    "id": "ent_145",
    "nom": "Oldchap games",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "Jeux d'ambiance",
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
        "excel_row": 158,
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
    "id": "ent_146",
    "nom": "Oldgames edition",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
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
        "excel_row": 159,
        "mail": "voir avec asmodee",
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
    "id": "ent_147",
    "nom": "Olibrius",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
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
        "excel_row": 160,
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
    "id": "ent_148",
    "nom": "Origames",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
    "cibles": {
      "enfant": false,
      "famille": true,
      "initie": true,
      "expert": true
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 161,
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
    "id": "ent_149",
    "nom": "Osprey games",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "",
    "recherche_connue": "axé sur la stratégie, le contrôle de territoire et les règles d'affrontement fluides",
    "cibles": {
      "enfant": true,
      "famille": true,
      "initie": true,
      "expert": true
    },
    "commentaire": "éditeur UK",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 162,
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
    "id": "ent_150",
    "nom": "Oya",
    "roles": {
      "editeur": false,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
    "cibles": {
      "enfant": false,
      "famille": false,
      "initie": false,
      "expert": false
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 163,
        "mail": "oya@oya.fr",
        "mail_2": "",
        "catalog_janv_26": true,
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
    "id": "ent_151",
    "nom": "Ôz éditions",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
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
        "excel_row": 164,
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
    "id": "ent_152",
    "nom": "Paldis",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
    "cibles": {
      "enfant": true,
      "famille": true,
      "initie": true,
      "expert": false
    },
    "commentaire": "ecoresponsabilité",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 165,
        "mail": "",
        "mail_2": "",
        "catalog_janv_26": true,
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
    "id": "ent_153",
    "nom": "Pandor games",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "jeu facile d'accés : accessibilité / proximité / émotions  //  NON : aux trop gros jeux",
    "cibles": {
      "enfant": true,
      "famille": true,
      "initie": false,
      "expert": false
    },
    "commentaire": "sont en Lorraine",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 166,
        "mail": "guillaume.weislinger@pandor-games.com",
        "mail_2": "",
        "catalog_janv_26": true,
        "check_clic": false,
        "reponse": "",
        "probleme": ""
      },
      {
        "excel_row": 167,
        "mail": "contact@pandor-games.com",
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
    "id": "ent_154",
    "nom": "Paradice games",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "Fantastique",
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
        "excel_row": 168,
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
    "id": "ent_155",
    "nom": "Paria",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
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
        "excel_row": 169,
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
    "id": "ent_156",
    "nom": "Pauses Jeux",
    "roles": {
      "editeur": false,
      "auto_edition": true,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "Convivialité",
    "cibles": {
      "enfant": false,
      "famille": true,
      "initie": false,
      "expert": false
    },
    "commentaire": "Plus en activité ?!?!",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 170,
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
    "id": "ent_157",
    "nom": "Pearl games",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "Jeux de Stratégie",
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
        "excel_row": 171,
        "mail": "https://pearlgames.be/contact/",
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
    "id": "ent_158",
    "nom": "Pegasus spiel",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "",
    "recherche_connue": "",
    "cibles": {
      "enfant": true,
      "famille": true,
      "initie": true,
      "expert": true
    },
    "commentaire": "éditeur allemand Attention selection de proto via les \"Pegasus Designer Days\" (visio) ou salons only !",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 172,
        "mail": "info@pegasus.de",
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
    "id": "ent_159",
    "nom": "Perroq éditins",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
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
        "excel_row": 173,
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
    "id": "ent_160",
    "nom": "Perte & fracas",
    "roles": {
      "editeur": false,
      "auto_edition": true,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
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
        "excel_row": 174,
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
    "id": "ent_161",
    "nom": "Piatnik",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "puzzle et cartes : convivialité",
    "cibles": {
      "enfant": false,
      "famille": true,
      "initie": true,
      "expert": false
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 175,
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
    "id": "ent_162",
    "nom": "Pixie",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": true
    },
    "flag_g": "!",
    "recherche_connue": "généraliste",
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
        "excel_row": 176,
        "mail": "pierre@pixiegames.fr",
        "mail_2": "",
        "catalog_janv_26": true,
        "check_clic": false,
        "reponse": "",
        "probleme": "Address Morte"
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
    "id": "ent_163",
    "nom": "Plan B games",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "Jeux familiaux/initiés à matériel premium et règles fluides (séries Azul, Century, Challengers!).",
    "cibles": {
      "enfant": false,
      "famille": true,
      "initie": true,
      "expert": false
    },
    "commentaire": "exceptionnel ( éditeur canadien)",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 177,
        "mail": "voir asmodée",
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
    "id": "ent_164",
    "nom": "Play Punk",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "éditeur Zenith et Captain'flip",
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
        "excel_row": 178,
        "mail": "antoine@playpunk.com",
        "mail_2": "thomas@playpunk.com",
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
    "id": "ent_165",
    "nom": "Poulplay",
    "roles": {
      "editeur": false,
      "auto_edition": true,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "Petite séries",
    "cibles": {
      "enfant": true,
      "famille": true,
      "initie": true,
      "expert": true
    },
    "commentaire": "production française",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 179,
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
    "id": "ent_166",
    "nom": "Projet CarTylion",
    "roles": {
      "editeur": false,
      "auto_edition": true,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "Médieval fantastique / ambiance / Dark fantasy",
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
        "excel_row": 180,
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
    "id": "ent_167",
    "nom": "Randolph",
    "roles": {
      "editeur": false,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
    "cibles": {
      "enfant": false,
      "famille": false,
      "initie": false,
      "expert": false
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 181,
        "mail": "info@randolph.ca",
        "mail_2": "",
        "catalog_janv_26": true,
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
    "id": "ent_168",
    "nom": "Ravensburger",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": true
    },
    "flag_g": "!",
    "recherche_connue": "Classique et Puzzle  // NON : jeux solo",
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
        "excel_row": 182,
        "mail": "service.fr@ravensburger.com",
        "mail_2": "Jeux Ravensburger France",
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
    "id": "ent_169",
    "nom": "Repos production",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
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
        "excel_row": 183,
        "mail": "voir asmodée",
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
    "id": "ent_170",
    "nom": "Rose noire édition",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "univers originaux et fort de sens",
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
        "excel_row": 184,
        "mail": "letscreate@wearerosenoire.com",
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
    "id": "ent_171",
    "nom": "Rossignol édition",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
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
        "excel_row": 185,
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
    "id": "ent_172",
    "nom": "Salt and peppers games",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "jeux condensés, les affrontements tactiques et les formats à deux ou petit comité. Ils privilégient la tension entre joueurs, la lecture du jeu adverse et les mécaniques d'opportunité dépouillées de tout superflu.",
    "cibles": {
      "enfant": false,
      "famille": true,
      "initie": true,
      "expert": false
    },
    "commentaire": "éditeur espagnol",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 186,
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
    "id": "ent_173",
    "nom": "Schmidt",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
    "cibles": {
      "enfant": true,
      "famille": true,
      "initie": true,
      "expert": true
    },
    "commentaire": "créer en 1907 (c'est important)",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 187,
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
    "id": "ent_174",
    "nom": "Scorpion masqué",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "Ambiance, déduction, coopératif.",
    "cibles": {
      "enfant": true,
      "famille": true,
      "initie": true,
      "expert": false
    },
    "commentaire": "éditeur canadien",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 188,
        "mail": "prototypes@scorpionmasque.com",
        "mail_2": "",
        "catalog_janv_26": true,
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
    "id": "ent_175",
    "nom": "Shakos",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "Wargame  (et sa promotion au \"tout public\")",
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
        "excel_row": 189,
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
    "id": "ent_176",
    "nom": "Sit down",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
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
        "excel_row": 190,
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
    "id": "ent_177",
    "nom": "Smile life",
    "roles": {
      "editeur": false,
      "auto_edition": true,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
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
        "excel_row": 191,
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
    "id": "ent_178",
    "nom": "space cowboys",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
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
        "excel_row": 192,
        "mail": "voir asmodée",
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
    "id": "ent_179",
    "nom": "Spiral éditions",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
    "cibles": {
      "enfant": false,
      "famille": true,
      "initie": false,
      "expert": false
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 193,
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
    "id": "ent_180",
    "nom": "Studio H",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
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
        "excel_row": 194,
        "mail": "contact@studio-h-games.com",
        "mail_2": "",
        "catalog_janv_26": true,
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
    "id": "ent_181",
    "nom": "Studio Twin games",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "Twinples / magie",
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
        "excel_row": 195,
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
    "id": "ent_182",
    "nom": "Subverti",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "thèmes engagés / jeux modernes",
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
        "excel_row": 196,
        "mail": "pro@subverti.com",
        "mail_2": "",
        "catalog_janv_26": true,
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
    "id": "ent_183",
    "nom": "Superlude",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
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
        "excel_row": 197,
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
    "id": "ent_184",
    "nom": "Supermeeple",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": true
    },
    "flag_g": "!",
    "recherche_connue": "",
    "cibles": {
      "enfant": true,
      "famille": true,
      "initie": true,
      "expert": true
    },
    "commentaire": "réédition de classique",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 198,
        "mail": "info@supermeeple.com",
        "mail_2": "philippe@supermeeple.com",
        "catalog_janv_26": true,
        "check_clic": false,
        "reponse": "",
        "probleme": "Erreur"
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
    "id": "ent_185",
    "nom": "Sweet november",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "\" Chaque jeu raconte une histoire\"",
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
        "excel_row": 199,
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
    "id": "ent_186",
    "nom": "Sylex éditions",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "Profondeur en univers immersif  -> simplement complexe / thématique très forte  // NON : jeu abstrait",
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
        "excel_row": 200,
        "mail": "contact@sylex-edition.com",
        "mail_2": "",
        "catalog_janv_26": true,
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
    "id": "ent_187",
    "nom": "TF1 Games",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
    "cibles": {
      "enfant": false,
      "famille": true,
      "initie": false,
      "expert": false
    },
    "commentaire": "dérivé d'émission télé",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 201,
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
    "id": "ent_188",
    "nom": "The flying games",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
    "cibles": {
      "enfant": true,
      "famille": true,
      "initie": true,
      "expert": false
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 202,
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
    "id": "ent_189",
    "nom": "The freaky 42",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "aucune limite / intellectuellement amusant",
    "cibles": {
      "enfant": true,
      "famille": true,
      "initie": true,
      "expert": true
    },
    "commentaire": "ecoresponsable",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 203,
        "mail": "contact@thefreaky42.com",
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
    "id": "ent_190",
    "nom": "Tiki édition",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
    "cibles": {
      "enfant": true,
      "famille": true,
      "initie": false,
      "expert": false
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 204,
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
    "id": "ent_191",
    "nom": "Tribuo",
    "roles": {
      "editeur": false,
      "auto_edition": false,
      "distrib": true
    },
    "flag_g": "!",
    "recherche_connue": "",
    "cibles": {
      "enfant": false,
      "famille": false,
      "initie": false,
      "expert": false
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 205,
        "mail": "",
        "mail_2": "",
        "catalog_janv_26": true,
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
    "id": "ent_192",
    "nom": "Two manta",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "forte intéraction / adéquation thème et mécanique",
    "cibles": {
      "enfant": false,
      "famille": true,
      "initie": true,
      "expert": false
    },
    "commentaire": "",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 206,
        "mail": "https://www.twomanta.fr/contact/",
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
    "id": "ent_193",
    "nom": "U token to me",
    "roles": {
      "editeur": false,
      "auto_edition": true,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
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
        "excel_row": 207,
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
    "id": "ent_194",
    "nom": "Unstable games",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "",
    "recherche_connue": "jeux de cartes compétitifs à attaques directes, éliminations et coups fourrés",
    "cibles": {
      "enfant": false,
      "famille": true,
      "initie": true,
      "expert": false
    },
    "commentaire": "éditeur US",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 208,
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
    "id": "ent_195",
    "nom": "Victoire",
    "roles": {
      "editeur": false,
      "auto_edition": true,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "immersion / ambiance  -> créé du nouveau joueur",
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
        "excel_row": 209,
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
    "id": "ent_196",
    "nom": "Wilson jeux",
    "roles": {
      "editeur": false,
      "auto_edition": false,
      "distrib": true
    },
    "flag_g": "!",
    "recherche_connue": "",
    "cibles": {
      "enfant": false,
      "famille": false,
      "initie": false,
      "expert": false
    },
    "commentaire": "uniquement distributeur",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 210,
        "mail": "jean-marie.leandri@wilsonjeux.fr",
        "mail_2": "",
        "catalog_janv_26": true,
        "check_clic": true,
        "reponse": "",
        "probleme": "Transférer"
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
    "id": "ent_197",
    "nom": "World-wide games",
    "roles": {
      "editeur": false,
      "auto_edition": true,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "Thème Sportif",
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
        "excel_row": 211,
        "mail": "https://www.worldwidegames.fr/contact/",
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
    "id": "ent_198",
    "nom": "Yeast Games",
    "roles": {
      "editeur": false,
      "auto_edition": true,
      "distrib": true
    },
    "flag_g": "!",
    "recherche_connue": "Jeux sérieux ou décalés, mais non-conforme",
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
        "excel_row": 212,
        "mail": "https://yeastgames.com/contact-2/",
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
    "id": "ent_199",
    "nom": "Yoka bytsume",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
    "cibles": {
      "enfant": true,
      "famille": true,
      "initie": true,
      "expert": true
    },
    "commentaire": "personnage de manga et anime",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 213,
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
    "id": "ent_200",
    "nom": "Zenagame",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "!",
    "recherche_connue": "",
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
        "excel_row": 214,
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
    "id": "ent_201",
    "nom": "Zoch Verlag",
    "roles": {
      "editeur": true,
      "auto_edition": false,
      "distrib": false
    },
    "flag_g": "",
    "recherche_connue": "jeux d'adresse, de rapidité et de manipulation de dés décalée.",
    "cibles": {
      "enfant": false,
      "famille": true,
      "initie": false,
      "expert": false
    },
    "commentaire": "éditeur allemand",
    "ne_plus_deranger": "",
    "contacts": [
      {
        "excel_row": 215,
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
  }
];
