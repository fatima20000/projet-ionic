import { ISalle } from "../interfaces/ISalle";
import { Reunion } from "./Reunion";

export class Salle{
    id: number;
    code: String;
    designation: String;
    reunions:  [Reunion];

    constructor(data: ISalle){
        this.id = data.id;
        this.code = data.code;
        this.designation = data.designation;
        this.reunions = data.reunions;
    }

}