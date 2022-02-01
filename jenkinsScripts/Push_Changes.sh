#!/bin/bash  



git config --global user.email \'mataix.ab@gmail.com\'
git config --global user.name \'abmataix5\'
git remote set-url origin https://$1@github.com/abmataix5/Jenkins_Practica_Final.git
git add .
git commit -m "Pipeline ejecutada por $2. Motivo: $3"
git push origin HEAD:main