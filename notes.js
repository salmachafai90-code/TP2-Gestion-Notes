// 1. Tableau des étudiants
const etudiants = [
    { id: 1, nom: "Amine", note: 16 },
    { id: 2, nom: "Youssef", note: 8 },
    { id: 3, nom: "Salma", note: 14 },
    { id: 4, nom: "Omar", note: 12 }
];

// 2. Vérifier la validité d'une note
function noteValide(note) {
    return Number.isFinite(note) &&
        note >= 0 && note <= 20;
}

// 3. Calculer la moyenne
function moyenne(notes) {
    if (notes.length === 0) return null;

    const total = notes.reduce(
        (somme, note) => somme + note, 0
    );

    return total / notes.length;
}

// 4. Extraire les notes
const notes = etudiants.map((e) => e.note);

// 5. Sélectionner les étudiants admis
const admis = etudiants.filter(
    (e) => e.note >= 10
);

// 6. Préparer les lignes d'affichage
const lignes = etudiants.map((e) => {
    const decision = e.note >= 10 ? "Admis" : "Ajourné";

    return `${e.nom} - ${e.note}/20 - ${decision}`;
});

// 7. Afficher les résultats
console.log("Moyenne :", moyenne(notes));
console.log("Admis :", admis.length);

for (const ligne of lignes) {
    console.log(ligne);
}
console.log(10 == "10");
console.log(10 === "10");
const { nom, note } = etudiants[0];

console.log(`${nom} : ${note}/20`);