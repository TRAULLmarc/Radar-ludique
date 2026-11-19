import pandas as pd
import openpyxl
import json
import os

filepath = 'Suivie planification TRAULL (1).xlsx'
xls = pd.ExcelFile(filepath)
print("Sheets:", xls.sheet_names)
df = pd.read_excel(filepath, sheet_name='Liste des éditeurs')

def to_bool(val):
    if pd.isna(val):
        return False
    s = str(val).strip().upper()
    return 'TRUE' in s

def clean_str(val):
    if pd.isna(val):
        return ''
    s = str(val).strip()
    if s.lower() == 'nan':
        return ''
    return s

# Build normalized entities preserving ALL contacts/rows without losing anything
entities_map = {}
raw_rows_count = 0

for idx, row in df.iterrows():
    nom = clean_str(row['Nom'])
    if not nom:
        continue
    raw_rows_count += 1
    key = nom.lower()
    
    contact_obj = {
        'excel_row': idx + 2,
        'mail': clean_str(row['Mail']),
        'mail_2': clean_str(row['2nd mail']),
        'catalog_janv_26': to_bool(row['Catalog Envoyé janv 26']),
        'check_clic': to_bool(row['Check a cliqué sur le lien']),
        'reponse': clean_str(row['Réponse']),
        'probleme': clean_str(row['Problème'])
    }
    
    if key not in entities_map:
        entities_map[key] = {
            'id': f"ent_{len(entities_map)+1:03d}",
            'nom': nom,
            'roles': {
                'editeur': to_bool(row['éditeur']),
                'auto_edition': to_bool(row['auto-   édition']),
                'distrib': to_bool(row['distrib'])
            },
            'flag_g': clean_str(row['Unnamed: 6']),
            'recherche_connue': clean_str(row["on sait qu'ils recherchent"]),
            'cibles': {
                'enfant': to_bool(row['cible enfant']),
                'famille': to_bool(row['cible famille']),
                'initie': to_bool(row['cible initié']),
                'expert': to_bool(row['cible expert'])
            },
            'commentaire': clean_str(row['Commentaire']),
            'ne_plus_deranger': clean_str(row['"ne plus déranger car..."']),
            'contacts': [contact_obj],
            'notes_terrain': [],
            'sorties_12m_comptage': {
                'statut': 'NON_CHARGE',
                'message': 'Aucune donnée de sorties sur 12 mois glissants chargée. Décompte exhaustif (sans moyenne) requis.',
                'mecaniques_total': {},
                'themes_total': {}
            }
        }
    else:
        ent = entities_map[key]
        # Merge boolean flags with logical OR so nothing is lost
        ent['roles']['editeur'] = ent['roles']['editeur'] or to_bool(row['éditeur'])
        ent['roles']['auto_edition'] = ent['roles']['auto_edition'] or to_bool(row['auto-   édition'])
        ent['roles']['distrib'] = ent['roles']['distrib'] or to_bool(row['distrib'])
        ent['cibles']['enfant'] = ent['cibles']['enfant'] or to_bool(row['cible enfant'])
        ent['cibles']['famille'] = ent['cibles']['famille'] or to_bool(row['cible famille'])
        ent['cibles']['initie'] = ent['cibles']['initie'] or to_bool(row['cible initié'])
        ent['cibles']['expert'] = ent['cibles']['expert'] or to_bool(row['cible expert'])
        
        if not ent['flag_g'] and clean_str(row['Unnamed: 6']):
            ent['flag_g'] = clean_str(row['Unnamed: 6'])
        if clean_str(row["on sait qu'ils recherchent"]):
            if not ent['recherche_connue']:
                ent['recherche_connue'] = clean_str(row["on sait qu'ils recherchent"])
            elif clean_str(row["on sait qu'ils recherchent"]) not in ent['recherche_connue']:
                ent['recherche_connue'] += " | " + clean_str(row["on sait qu'ils recherchent"])
        if clean_str(row['Commentaire']):
            if not ent['commentaire']:
                ent['commentaire'] = clean_str(row['Commentaire'])
            elif clean_str(row['Commentaire']) not in ent['commentaire']:
                ent['commentaire'] += " | " + clean_str(row['Commentaire'])
        if clean_str(row['"ne plus déranger car..."']):
            if not ent['ne_plus_deranger']:
                ent['ne_plus_deranger'] = clean_str(row['"ne plus déranger car..."'])
            elif clean_str(row['"ne plus déranger car..."']) not in ent['ne_plus_deranger']:
                ent['ne_plus_deranger'] += " | " + clean_str(row['"ne plus déranger car..."'])
                
        ent['contacts'].append(contact_obj)

entities_list = list(entities_map.values())
total_contacts = sum(len(e['contacts']) for e in entities_list)
print(f"Entities: {len(entities_list)}, Total contacts preserved: {total_contacts}, Raw rows: {raw_rows_count}")

# Save data.js for zero-server static PWA compatibility
os.makedirs('pwa_app', exist_ok=True)
with open('pwa_app/data.js', 'w', encoding='utf-8') as f:
    f.write("// Base issue de 'Suivie planification TRAULL (1).xlsx' (colonnes A à S uniquement, colonnes T+ ignorées)\n")
    f.write("const INITIAL_ENTITIES = " + json.dumps(entities_list, ensure_ascii=False, indent=2) + ";\n")

print("Saved pwa_app/data.js successfully. Size (bytes):", os.path.getsize('pwa_app/data.js'))