import { Role } from "../entities/Role";

export interface IUser{
    id: number;
    login: String;
    cleSecure: String;
    active: Boolean;
    roles: [Role];
}