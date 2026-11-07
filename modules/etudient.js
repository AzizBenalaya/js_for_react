export const Etablissement = 'GENIO';

export default class Etudiant {
  constructor(nom, age) {
    this.nom = nom;
    this.age = age;
  }

  info() {
    return `Etudiant nom:${this.nom} a pour age:${this.age}`;
  }
}

export function info(etudiant) {
  return `nom:${etudiant.nom} age:${etudiant.age}`;
}