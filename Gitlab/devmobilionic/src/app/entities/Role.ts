import { IRole } from "../interfaces/IRole";
import { User } from "./User";

export class Role{
    id: number;
    code: String;
    designation: String;
    users: [User];

    constructor(data: IRole){
        this.id = data.id;
        this.code = data.code;
        this.designation = data.designation;
        this.users = data.users;
    }

}