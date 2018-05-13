export class AppareilService {
  appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      id: 2,
      name: 'Réfrigerateur',
      status: 'allumé'
    },
    {
      id: 4,
      name: 'Ordinateur',
      status: 'éteint'
    },
    {
      id: 5,
      name: 'Poste de télévision',
      status: 'allumé'
    }
  ];
  eteindreTout(){
      console.log('On eteint le service!');
    for(let app of this.appareils){
        app.status = 'éteint'
    }
  }
  allumerTout(){
      console.log('On allume le service!');
    for(let app of this.appareils){
        app.status = 'allumé'
    }
  }
  eteindreOne(i:number){
      console.log('On éteint l"apppareil ',i);
      this.appareils[i].status= 'éteint';
  }
  allumerOne(i:number){
      console.log('AMBRETTE  allume l"apppareil ',i);
      this.appareils[i].status= 'allumé';
  }
  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil;
  }
}
