export class AppareilService {
  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Réfrigerateur',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'éteint'
    },
    {
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
      console.log('On allume l"apppareil ',i);
      this.appareils[i].status= 'allumé';
  }
}