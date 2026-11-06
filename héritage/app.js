class Stagiaire extends Etudiant{
constructor(nom,age,stage){
super(nom,age);
this.stage=stage; }
info(){return `Stagiaire nom:${this.nom} a pour
age:${this.age} stage:${this.stage}`
}
}