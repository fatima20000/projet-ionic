import { Reunion } from "../entities/Reunion";

export interface ISalle{
    id: number;
    code: String;
    designation: String;
    reunions:  [Reunion];
}