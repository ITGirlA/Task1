import { ICoursesListItem } from './icourse';

export class CoursesListItem implements ICoursesListItem  {
    id: number;
    title: string;
    creationDate: Date;
    duration: number;
    description: string;
    topRated: boolean;

    constructor(id: number, title: string, creationDate: Date, duration: number, description: string,
                topRated: boolean) {
        this.id = id;
        this.title = title;

        this.description = description;
        this.topRated = topRated;
        this.creationDate = creationDate;
        // this.authors = authors[];
        this.duration = duration;
     }
 }
