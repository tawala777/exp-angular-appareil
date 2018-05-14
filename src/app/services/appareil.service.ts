import { Subject } from 'rxjs';

export class AppareilService {
  appareilsSubject = new Subject<any[]>();
  private appareils = [
    {
      id: 11,
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      id: 12,
      name: 'Réfrigerateur',
      status: 'allumé'
    },
    {
      id: 41,
      name: 'Ordinateur',
      status: 'éteint'
    },
    {
      id: 52,
      name: 'Poste de télévision',
      status: 'allumé'
    }
  ];
  
  emitAppareilSubject() {
    this.appareilsSubject.next(this.appareils.slice());
  }

  eteindreTout(){
      console.log('On eteint le service!');
    for(let app of this.appareils){
        app.status = 'éteint';
    }
    this.emitAppareilSubject();
  }
  allumerTout(){
      console.log('On allume le service!');
    for(let app of this.appareils){
        app.status = 'allumé'
    }
    this.emitAppareilSubject();
  }
  eteindreOne(i:number){
      console.log('On éteint l"apppareil ',i);
      this.appareils[i].status= 'éteint';
      this.emitAppareilSubject();
  }
  allumerOne(i:number){
      console.log('AMBRETTE  allume l"apppareil ',i);
      this.appareils[i].status= 'allumé';
      this.emitAppareilSubject();
  }
  getAppareilById(id: number) {
    const obj = this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
    return obj;
  }
}
