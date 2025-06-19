let jamesH=81;
console.log(jamesH);

let larsU;
console.log(larsU);

let jasonN="Bass";
console.log(jasonN);

let robertT=true;
console.log(robertT);

let metallica = [jamesH,larsU,jasonN];
console.log(metallica);

// Objet//

let band = new Object();
band.guitarist="Kirk";
band.singer="James";

let nameGeeko="Bobby";
let age=37;

console.log ("Bonjour ",nameGeeko,"tu as ", age, " ans aujourd'hui, c'est la fiesta !");

let party = "Bonjour " + nameGeeko + " tu as " + age + " ans aujourd'hui, c'est la fiesta !";

console.log(party);
console.log(age.length);
console.log(jasonN.length);
console.log(party.length);

let queen = ["Freddie","Brian","Roger","John"];



let ageArtists = [49,37,88,27];

let instruments = ["bass","guitar","mic","drums"];

let forever = [queen, ageArtists,instruments];

let band2 = forever [0][2]+ "uses" + forever [2][3] + "and he is" + forever [1][3];

console.log(forever);
console.log(forever.length);

console.log(forever [0] [0], forever [2] [2]);

console.log(band2);

console.log(instruments [instruments.length-1]);

let geekoFirstName = "Nico";
let geekoLastName = "Sabatino";
let initials = geekoFirstName[0] + geekoLastName [0];

let geekoIdentity = [0];

console.log(geekoIdentity);

geekoIdentity [0] = geekoFirstName;

console.log(geekoFirstName);

geekoIdentity.push(geekoLastName);

geekoIdentity.push(initials);


console.log(geekoIdentity);


let doctorWho = ["Doctor Who", "extraterrestre"];
let doctorHouse = ["Doctor House", "mysanthrope"];
let doctorQuinn = ["Doctor Quinn", "femme médecin"];

let doctors = [doctorWho,doctorHouse,doctorQuinn];

console.log(doctors);

console.log (doctors[2]);

console.log (doctors [2] [1])

doctorWho.push("Tardis");

console.log (doctorWho);

doctorQuinn.push("Far West");

doctorHouse.push("béquille");


console.log(doctors [0] [2] , doctors [1] [2] ,doctors [2] [2] ,);

console.log (doctors.length);

console.log (doctors.pop);

console.log (doctors);

doctors.pop();

console.log (doctors);
doctors.push(doctorQuinn);


let noteA = 10 ;
let noteB = 2 ;

function Booby (a,b){

    let result=0;

    result = (a+b)/2;

    return result;
}

Booby ( noteA,noteB);

console.log ( Booby ( noteA,noteB));

let random = Math.random();
console.log(random);


let tabloo = [2,4,9,32,random];

let multiplex3 = tabloo.map(function(nombre){
    return nombre *3;
});


console.log(tabloo);

console.log(multiplex3);

console.log(Math.floor(6.28));

console.log(Math.floor(random*5));

// EXO DU 19/06

function mention(francais,math,philo) {
    if ((francais+math+philo)/3 >= 15) 
         {
            return "Très bien !";
         }

     else if ((francais+math+philo)/3 >= 10) 
         {
            return "Assez bien !";
         }

    else {
        return "T'es nul !";

    }     
};


console.log(mention(20,20,20));


console.log(mention(5,13,6));


// TEST ALTERNATIF

let francais2 = 5;
let math2 = 10;
let philo2 = 12;

let tabStudent = [francais2,math2,philo2];

function mentionDeux (tab) {

        if (tab/ tab.length >= 15) 
         {
            return "Très bien !";
         }

        else if (tab/ tab.length >= 10) 
         {
            return "Assez bien !";
         }

        else {
            return "T'es nul !";

    } 
}


console.log(mentionDeux(tabStudent));


// PROMPT //

//let signe = prompt("Quel est votre signe astrologique ?");

/*if (signe.toLowerCase() == "verseau") {
  console.log("Oh ? moi aussi je suis verseau :)");
}

// Différentes façons d'utiliser prompt
//signe = window.prompt(); // ouvre une fenêtre de saisie sans texte
//signe = prompt(); //  ouvre une fenêtre de saisie sans texte

// ouvre une fenêtre avec le texte "Quelle est la réponse ?"
//signe = window.prompt("Quelle est la réponse ?");

// ouvre une fenêtre avec le texte "Quelle est la réponse ?"
// avec la valeur "42" comme réponse par défaut
//signe = window.prompt("Quelle est la réponse ?", "42");

*/

/*let number1 = parseInt(prompt("Donne-moi 1 premier nombre"));
let number2 = parsInt(prompt("Donne-moi 1 second nombre"));

if (number1>number2) {
    console.log(number1);
}

else if  (number1<number2) {
    console.log(number2);
}

else {
    console.log("les 2 sont égaux");

}*/

// Correction

/*let comp1 = parseInt(prompt('Saisissez un premier nombre'));
let comp2 = parseInt(prompt('Saisissez un deuxième nombre'));
if (comp1 > comp2) {
    console.log(comp1 + " est plus grand que " + comp2);
} else if (comp1 < comp2) {
    console.log(comp1 + " est plus petit que " + comp2);
} else {
    console.log(comp1 + " les deux nombres sont égaux");
}
*/

/* let i=0;
let dessin = [];

while (i<10){
    i++;
    dessin.push("#");
    console.log(dessin);
}
*/


let tabSkool = [5,10,7,19,13];
let moyenneSkool = 0;


function calculator(tab) {
        // fait une boucle jusqu'à la fin du nombre de cellules !  
    for (let i=0; i < tab.length; i++) {

        // addition de toutes les cellules !   
        moyenneSkool += tab[i];
        
    }

    // fait la moyenne de la somme part rapport aux nombres de cellules 
    moyenneSkool = moyenneSkool/tab.length;

    return moyenneSkool;
}

console.log (calculator(tabSkool));


////////////////

let james = ["guitar"];
let freddie = ["vocals"];
let duff = ["bass"];
let john = ["bass"];
let brian = ["guitar"];
let roger = ["drums"];
let axl = ["vocals"];
let slash = ["guitar"];
let izzy = ["guitar"];
let kirk = ["guitar"];
let lars = ["drums"];
let jason = ["bass"];

let queen2 = [freddie,john,brian,roger];
let guns = [axl,slash,duff,izzy];
let metallica2 = [james,kirk,lars,jason];

let band3 = [queen2,guns,metallica2];



/*function search (tabloo) {
        // fait une boucle jusqu'à la fin du nombre de cellules !  
    for (let i=0; i < tabloo.length; i++)  {

        for (let k=0 ; k < tabloo[i].length; k++) {
            console.log ([i],[k], "la réponse est :", tabloo [i][j]);
            
        }

    }
}
*/


/*let miniTab1 = [10, 40, 4.25];
let miniTab2 = [32, 7.41, 4];
let miniTab3 = [10, 74, 514];

let tabPrincipal = [miniTab1, miniTab2, miniTab3];

for (let i = 0; i < tabPrincipal.length; i++) {
    for (let j = 0; j < tabPrincipal[i].length; j++) {

        console.log([i], [j], "La valeur est :", tabPrincipal[i][j]);
    }
}*/

/* let voiture = {
    "nbChevaux" : 500,
    "vitesseMax" : 450,
    "faiblesse" : ["accélération","adhérence"],
};

let solex= {
    "nbChevaux" : 1,
    "vitesseMax" : 30,
    "faiblesse" : ["pas rapide","inventé à la création de la roue !"],
};

let afficher = "vitesseMax";


console.log(voiture.vitesseMax);
console.log(voiture["vitesseMax"]);
console.log(solex[afficher]);
console.log(voiture.faiblesse[1]);





console.log(solex.vitesseMax);

// rajoute une clé !
solex.marque = "Solex";

console.log(solex);

// supprime une clé !
delete solex.marque;

console.log(solex); */

let jinjer = {
    "Number of Artist" : 4,
    "Discography" : ["Cloud Factory","King of Everything","Wallflowers","Duel"],
    "Music Style" : ["Groove Metal","Progressive"],
    "Artist Name" : {
        "Eugene" : "Bass Guitar",
        "Vlad" : "Drums",
        "Roman" :"Guitar",
        "Tatiana" :"Vocals"
}
}


let ukrainianBand = ["Tati","Eug","Vlady", "Rom"];
let armenianBand = ["Serj","Daron","John","Shavo"];

let bandImpossible = ["Johnny",...ukrainianBand, ...armenianBand];



let bandImpossible2 = bandImpossible;

bandImpossible2.push("Hallyday");

console.log (bandImpossible);