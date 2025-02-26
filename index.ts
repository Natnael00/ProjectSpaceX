// Oefening: Interfaces en Objecten - SpaceX Edition
// Doel: Leer hoe je interfaces gebruikt om objecten te structureren


// 1️⃣ Stap 1: Maak een interface voor een raket
// Een raket heeft een naam, een fabrikant en een lanceerdatum




interface Raket{
    naam: string;
    fabrikant: string;
    lanceerDatum: string;
}


const falcon9: Raket = {


naam:"Falcon9",
fabrikant:"SpaceX",
lanceerDatum:"2013-03-15"


};
