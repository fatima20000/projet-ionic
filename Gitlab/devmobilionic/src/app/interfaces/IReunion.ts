import { Employe } from "../entities/Employe";
import { Salle } from "../entities/Salle";

export interface IReunion {
    id: number;
    code: String;
    dateDebut: Date;
    dateFin: Date;
    salle: Salle;
    employes: [Employe];
}