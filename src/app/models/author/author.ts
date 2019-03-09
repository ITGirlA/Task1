import { IAuthor} from './iauthor';

export class Author implements IAuthor  {
    id: string;
    name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
     }
 }

 export interface IAuthor {
    id: string;
    name: string;
}
