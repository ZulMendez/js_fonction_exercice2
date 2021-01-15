// ## EXO1
// ## Créer une function [reverseNumber] qui retourne une série de nombre à l'envers (exemple si j'entre 851 elle me retourne 158)
// let rev = (a) => {
//     return a.toString().split("").reverse().join("")
// }
// console.log(rev(734));

// correction 
// let chiffre = prompt('Nombre')
// let reverseNumber = (n) => {
//     // n = n.split("").reverse().join("");
//     // return n
//     n = parseInt(n.toString().split("").reverse().join(''))
//     return n
// }
// let nbr = reverseNumber(123)
// console.log(nbr);

// #### EXO2
// ## Créer une function [divPar2] contenant un switch qui vérifie si un nombre est divisible par 2
// ## Qui répond "Le num x est divisible par 2 x:2 = z"
// ## Dans le cas ou ce n'est pas divisible il répond : "Ce nombre n'est pas divisible par 2"
// let nombre = parseInt(prompt('entrez un nombre'));
// let result = nombre / 2;

// let divPar2 = (a) => {
//     switch (a % 2 == 0) {
//         case 0: 
//         return `${a} divisé par 2 = ${result}`;
//         case 1: 
//         return `ce nombre n'est pas divisible par 2`
//         default:
//          return `ce que vous avez mis n'est pas un chiffre`
//     }  
// }
// console.log(divPar2(result));
// #### EXO3
// ## Créer une fonction [logIn] qui va demander à l'utilisateur un mot de passe et vérifier s'il a bien entré "mdp" si oui, faites une alert "Vous êtes connecté", si non, redemander le mot de passe jusqu'à ce que l'utilisateur rentre "mdp"

// let mdp = prompt('entrez un mot de passe')
// let count = 0;
// let login = (a) => {
//     while (mdp !== 'mdp') {
//         mdp = prompt('reessayez')
//     }
//     if (mdp == 'mdp'){
//         alert('vous êtes connecté')
//     }
// }

// console.log(login(mdp));

// correction 
// if (a == 'mdp') {
    //     alert('connecté')
    // } else {
    //     do {
    //         a = prompt('faux, recommence')
    //         if (a == 'mdp') {
    //             alert('connecté') 
    //         }
    //     } while (a !== 'mdp' && count !== 3);
    // }


// #### EXO4
// ## Créer une function qui permet d'ajouter et de faire sortir des stagiaires d'une classe en animant la function. C-a-d demander s'il veut a chaque fois rajouter une personne si oui qui si non lui dire ouki et afficher le tableau.
// ## Avec la capture d'écran reproduisez les entrées / sorties de la classe

// FILTER intro //
// let test = ['ayhan', 'test', 'test2', 'test4'];
// let newtest = test.filter( (el) => {
//     return el != "test"
// } )
// console.log(test);
// console.log(newtest);

// let coding16 = ['test'];

// let rentrer = (a) => {
//     let tab = a.split(" ")
//     coding16.push(...tab) // ["test", "el1", "el2"]
//     coding16.forEach(el => {
//         console.log(`${el} est rentré, salut`);
//     });

// }
// let sortir = (a) => {
//     coding16 = coding16.filter((el) => {
//         return el != a
//     })
// }

// SCENARIO
// do {
//     var a = prompt('Veux-tu ajouter ou supprimer une personne (oui ou non)')
//     if (a === 'oui') {
//         let name = prompt('qui veux tu ajouter ou supprimer (prenom)');
//         if (coding16.indexOf(name) != -1) {
//             sortir(name)
//             console.log(`${name} est sorti de la classe`);
//         } else {
//             rentrer(name)
//         }
//     } else if (a === 'non') {
//         if (coding16.length === 0) {
//             console.log('Il ya personne');
//         } else {
//             console.log(`D'accord, voici la classe ${coding16}`);
//         }
//     } else {
//         alert('Erreur, demande oui et non');
//     }
// } while (coding16.length < 19 && a === "oui");


// console.log(coding16);


// 4 Version Dawid
// let classeCoding16 = []; 
// console.log(classeCoding16); 

// let addClass = (eleve) => {
//     if(eleve.length > 0){
//         classeCoding16.push(eleve); 
//         return `${eleve} arrive en classe // tab:`+classeCoding16; 
//     }else{
//         return "error: vide"; 
//     } 
// }

// let delClass = (eleve) => { 
//     if(eleve.length > 0){
//         if(classeCoding16.includes(eleve)){
//             console.log(classeCoding16.indexOf(eleve));
//             classeCoding16.splice( classeCoding16.indexOf(eleve), 1); 
//             return `${eleve} sort de la classe // tab:`+classeCoding16;   
//         }else{
//             return "pas de match dans la classe!"+classeCoding16; 
//         }
//     }else{
//         return "error: vide"; 
//     }
// }

// let choix; 
// let pers; 

// let choixpossibles = [1,2, 3, 4]; 

// function init(){
//     choix = prompt("Fais un choix: \n [ 1 ] pour ajouter une personne.\n [ 2 ] pour supprimer une personne. \n [ 3 ] pour afficher le tableau. \n [ 4 ] pour quitter ");
//     switch(choix){
//             case "1":
//                 pers = prompt("Entre le nom de la personne a ajouter"); 
//                 if(!classeCoding16.includes(pers)){
//                     addClass(pers);
//                     alert(`${pers} a bien ete ajouter!`); 
//                 }else{
//                     alert("La personne est deja presente!!");
//                 }
//                 init(); 
//             break;
//             case "2":
//                 if(classeCoding16.length != 0){
//                     pers = prompt("Entre le nom de la personne a SUPPRIMER"); 
//                     // pour le del on check dirrectement dans l'autre fonction s'il est present dans le tab []; 
//                     let con = confirm(`Confirmez vous la suppresion de ${pers}?`); 
//                     if(con){
//                         delClass(pers);
//                     }else{
//                         alert(`${pers} n'a pas ete supp!`);
//                     }
//                     init();  
//                 }else{
//                     alert("erreur. le tab est vide!!");     
//                     init();
//                 }
//             break;
//             case "3":
//                 alert(classeCoding16);
//                 console.log(classeCoding16);
//                 init();
//             break;
//             case "4":
//                 alert(":Ok je sors:");
//                 console.log(classeCoding16); 
//                 alert(classeCoding16); 
//             break;
//             default:
//                 console.log(choix, typeof choix);
//                 alert('erreur'); 
//                 init();
//             break;
//         }
// }

// init();