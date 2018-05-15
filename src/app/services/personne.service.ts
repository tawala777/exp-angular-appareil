import { Personne } from '../models/Personne.model';
import { Subject } from 'rxjs';

export class PersonneService {
  private personnes: Personne[] = [
    new Personne('Will', 'Alexander', 'will@will.com', '0637222133','75 ave des Champs-Elysées 75008 Paris',1,2,'03/04/1989',
    ['licence de maths', 'maitrise de maths'],
    ['Google', 'Accor', 'Facebook'],
    ['Cinema', 'sport'])
    ];
  personneSubject = new Subject<Personne[]>();

  emitPersonnes() {
    this.personneSubject.next(this.personnes.slice());
  }

  addPersonne(p: Personne) {
    this.personnes.push(p);
    this.emitPersonnes();
  }
}
