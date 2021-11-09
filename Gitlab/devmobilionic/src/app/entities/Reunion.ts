import { IReunion } from "../interfaces/IReunion";
import { Employe } from "./Employe";
import { Salle } from "./Salle";

export class Reunion{
    id: number;
    code: String;
    dateDebut: Date;
    dateFin: Date;
    salle: Salle;
    employes: [Employe];

    constructor(data?){
        this.id = data.id;
        this.code = data.code;
        this.dateDebut = data.dateDebut;
        this.dateFin = data.dateFin;
        this.salle = data.salle;
        this.employes = data.employes;
    }

}