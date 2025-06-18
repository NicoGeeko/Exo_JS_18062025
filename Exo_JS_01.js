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
