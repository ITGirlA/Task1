import { IUser } from './iuser';

export class User implements IUser  {
    public id: number;
    public name: {firstName: string, lastName: string};
    public login: string;
    public password: string;

    constructor(id: number, firstName: string, lastName: string, login: string, password: string) {
        this.id = id;
        this.name =  {firstName: firstName, lastName: lastName};
        this.login = login;
        this.password = password;
     }
 }

