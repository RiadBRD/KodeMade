#!/bin/bash

function create_dir() {
    read -p "Donnez un nom au repertoire: " dir_name
    if [ -e "$dir_name" ]; then
        echo "Ce dossier existe déjà !"
    else 
        mkdir "$dir_name"
    fi
    echo "$dir_name"  
}

function generate_files() {
    dir_name="$1"
    read -p "Donnez un prefixe aux fichiers: " prefix
    read -p "Donnez le nombre de fichiers à générer: " number

    while [ "$number" -gt 0 ]; do
        currentDate=$(date +"%Y-%m-%d_%H-%M-%S-%3N")
        file_name="${prefix}_${currentDate}.txt"
        echo "Le fichier $file_name est créé"
        touch "$dir_name/$file_name"
        ((number--))
    done
}   

dir_name=$(create_dir)
generate_files "$dir_name"

is_done=false

while [ "$is_done" = false ]; do
    echo -e "Voulez-vous continuer à créer des fichiers ?\n1. Yes\n2. No"
    read -p "Votre choix: " answer
    if [ "$answer" -eq 1 ]; then
        generate_files "$dir_name"
    else
        is_done=true
    fi
done
