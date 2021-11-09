import { IUser } from "../interfaces/IUser";
import { Role } from "./Role";

export class User{
    id: number;
    login: String;
    cleSecure: String;
    active: Boolean;
    roles: [Role];

    constructor(data: IUser){
        this.id = data.id;
        this.login = data.login;
        this.cleSecure = data.cleSecure;
        this.active = data.active;
        this.roles = data.roles;
    }

}