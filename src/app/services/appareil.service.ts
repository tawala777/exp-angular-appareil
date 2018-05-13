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
    },
    {
      name: 'Radiateur éléctrique',
      status: 'éteint'
    },
    {
      name: 'Micro ondes',
      status: 'allumé'
    },
    {
      name: 'Lampe',
      status: 'éteint'
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
}