import { Employe } from "./Employe";
import { IDirection } from "../interfaces/IDirection";

export class Direction{
    id: number;
    code: String;
    libelle: String;
    employes: [Employe];

    constructor(data: IDirection){
        this.id = data.id;
        this.code = data.code;
        this.libelle = data.libelle;
        this.employes = data.employes;
    }

}