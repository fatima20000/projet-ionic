import { IDirection } from '../interfaces/IDirection';
import { Reunion } from "../entities/Reunion";

export interface IEmploye{
    id:number;
    immatricule: String;
    nom: String;
    prenom: String;
    direction: IDirection;
    reunions: [Reunion];
}