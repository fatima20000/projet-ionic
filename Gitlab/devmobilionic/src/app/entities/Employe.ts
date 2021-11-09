import { IDirection } from "../interfaces/IDirection";
import { IEmploye } from "../interfaces/IEmploye";
import { IReunion } from "../interfaces/IReunion";

export class Employe{
    id:number;
    immatricule: String;
    nom: String;
    prenom: String;
    direction: IDirection;
    reunions: [IReunion];

    constructor(data: IEmploye){
        this.id = data.id;
        this.immatricule = data.immatricule;
        this.nom = data.nom;
        this.prenom = data.prenom;
        this.direction = data.direction;
        this.reunions = data.reunions;
    }

}