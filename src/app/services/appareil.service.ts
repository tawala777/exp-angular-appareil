import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppareilService {
  private urlMonFirebase = 'https://exp-angular-appareil.firebaseio.com/';
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
  private maxId = 52;

  constructor(private httpClient: HttpClient) { 

  }  
  saveAppareilsToServer() {
    this.httpClient
      .post(this.urlMonFirebase, this.appareils)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
}
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
  getMaxId() {
    this.maxId++;
    return this.maxId;
  }
  
  ajouterOne(n:string, s:string){
    const obj = {
      id: 0,
      name: '',
      status: ''
    };
    obj.id = this.getMaxId();
    obj.name = n;
    obj.status = s;
    this.appareils.push(obj);
    this.emitAppareilSubject();
  }
}
