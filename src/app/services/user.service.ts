import { User } from '../models/User.model';
import { Subject } from 'rxjs';

export class UserService {
  private users: User[] = [
        new User('Will', 'Alexander', 'will@will.com', '35 rue de Courcelles 75008 Paris', 'jus d\'orange', ['coder', 'sortir en boite'])
    ];
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}