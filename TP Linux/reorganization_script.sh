#!/bin/bash

# Création du répertoire Root
root_dir="Root"
mkdir -p "$root_dir"

# Parcours et réorganisation des répertoires
list_dir=$(ls)

for dir in $list_dir; do
    # Vérifie que c'est bien un répertoire
    if [ -d "$dir" ]; then
        echo
        echo "Répertoire : $dir"
        echo
        
        for fichier in "$dir"/*; do
            if [ -f "$fichier" ]; then
                # Récupérer le nom sans chemin et sans extension
                current_filename=$(basename "$fichier" | cut -d. -f1)
                echo "Nom du fichier : $current_filename"
                echo
                echo "Création de l'arborescence associée à ce fichier"
                
                # Splitter le nom par "_"
                IFS='_' read -ra parts <<< "$current_filename"
                
                # Affichage des parties

                #Le prefixe
                prefix=${parts[0]}
                echo "Le préfixe est : $prefix"

                #La date
                date=${parts[1]}
                echo "La date est : $date"
                IFS='-' read -ra parsedDate <<< "$date" 
                day=${parsedDate[0]}
                month=${parsedDate[1]}
                year=${parsedDate[2]}
                

                #L'heure et l'extension du fichier dat
                time=${parts[2]}
                IFS='-' read -ra parsedTime <<< "$time" 
                hour=${parsedTime[0]}
                
                dat_filename="${parsedTime[1]}${parsedTime[2]}${parsedTime[3]}"
                
                echo "L'heure est : $hour"
                echo "Fichier dat generé : $dat_filename.dat"



                # Create directories
                mkdir -p "$root_dir/$dir/$prefix/$year/$month/$day/$hour"

                # Create the file
                touch "$root_dir/$dir/$prefix/$year/$month/$day/$hour/$dat_filename.dat"

                



            fi
        done
    fi
done

# Print final arborescence
echo
echo "Arborescence finale :"
find "$root_dir" | sed -e "s|[^/]*/| |g"
