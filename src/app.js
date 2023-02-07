"use strict";

import { User } from "./User";

//Récupère les données de l'API et transforme le json en js
let response = await fetch("https://randomuser.me/api/?results=20");
let data = await response.json();

console.log(data);

//Nettoie les données que nous avons récuprérés
const parsedData = data.results;

console.log(parsedData);

//créer les users récupérés
const user1 = new User(parsedData[0]);
const user2 = new User(parsedData[1]);
const user3 = new User(parsedData[2]);
const user4 = new User(parsedData[3]);
const user5 = new User(parsedData[4]);
const user6 = new User(parsedData[5]);
const user7= new User(parsedData[6]);
const user8 = new User(parsedData[7]);
const user9 = new User(parsedData[8]);

//Affiche les users 
render();


