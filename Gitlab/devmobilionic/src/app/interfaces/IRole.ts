import { User } from "../entities/User";

export interface IRole{
    id: number;
    code: String;
    designation: String;
    users: [User];
}