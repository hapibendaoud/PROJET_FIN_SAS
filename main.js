const prompt = require("prompt-sync")();

// const name = prompt("To back to the menu, enter 1, to Quitter 0: ");
// console.log(name);

const candidats = [
    {
        cin : "AB123456",
        nom : "Boushaba",
        prenom : "Soufiane",
        partiPolitique : "Independant",
        age: 40,
        electeurs: ["ss","ss","ss","ss","ss"]
    },
    {
        cin : "jc111",
        nom : "ait",
        prenom : "said",
        partiPolitique : "Independant",
        age: 25,
        electeurs: ["ss","ss","ss","ss","ss","dd","kk"]
    }
];
function menu(){
    console.log(`
===========================================
====         Menu Prancipale           ====
===========================================
== 1 - Ajouter un candidats              ==
== 2 - Ajouter  plusieurs candidats      ==
== 3 - Afficher la liste des candidats   ==
== 4 - Voter pour un candidat            ==
== 5 - Modifier les info d'un candidat   ==
== 6 - Supprimer un candidat             ==
== 7 - Rechercher des candidats          ==
== 8 - Statistiques de l'élection        ==
== 0 - Quitter                           ==
===========================================

    `);
    const choice = Number(prompt("Choose From The Menu: "));
    switch(choice){
        case 1:
            Ajouter();
            break
        case 2:
            AjouterPlusieurs();
            break
        case 3:
            Afficher();
            break
        case 4:
            vote();
            break
        case 5:
            update();
            break
        case 6:
            deleteFunction();
            break
        case 7:
            search();
            break
        case 8:
            Statistiques();
            break
        case 0:
            console.log("See You Soon Sir");
            break
    }
    
}
menu();


function Ajouter(){
    console.log("============== Ajouter un candidats =============")
    const cin = prompt("Entrez le CIN: ");
    for(let con of candidats){
        if(cin === con.cin){
            console.log(`The CIN: ${con.cin} is already EXIST!!`);
            const choix = prompt("Click Enter:");
            switch(choix){
                case '':
                    menu();
            }
        }
    }
    const nom = prompt("Entrez le Nom: ");
    const prenom = prompt("Entrez le Prenom: ");
    const partiPolitique = prompt("Entrez le Parti Politique (ou Indépendant): ");
    const age = Number(prompt("Entrez l'âge: "));

    const candidat = {
        cin: cin,
        nom: nom,
        prenom: prenom,
        partiPolitique: partiPolitique || "Indépendant",
        age: age,
        electeurs: []
    };

    candidats.push(candidat);
    // console.log(candidats)
    const choix = prompt("To back to the Menu click Enter:");
    switch(choix){
        case '':
            menu();
    }

}
