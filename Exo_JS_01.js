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

let i=0;
let dessin = [];

while (i<10){
    i++;
    dessin.push("#");
    console.log(dessin);
}
