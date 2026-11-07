import Etudiant, { Etablissement, info } from './etudient.js';

const Etd = Etudiant;

const etd1 = new Etudiant('Rami', 33);
console.log(info(etd1));

const etd2 = new Etd('Rami', 33);
console.log(`${info(etd2)} Etablissement: ${Etablissement}`);