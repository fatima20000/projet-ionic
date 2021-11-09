import { Employe } from "../entities/Employe";

export interface IDirection{
    id: number;
    code: String;
    libelle: String;
    employes: [Employe];
}