import { Injectable } from '@angular/core';
import { User } from '../user/user';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  private data: User[] = [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Snow',
        email: 'John_Snow@epam.com',
        password: 'Know nothing'
      },
      {
        id: 2,
        firstName: 'Hodor',
        lastName: 'Hodor',
        email: 'Hodor',
        password: 'Hodor'
      }
  ];

  checkEmailAndPassword(email: string, password: string): boolean {
    return this.data.find(x => x.email === email && x.password === password) !== undefined;
  }
}
