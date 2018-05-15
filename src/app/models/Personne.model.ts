export class Personne {
    constructor(
      public prenom: string,
      public nom: string,
      public email: string,
      public tel: string,
      public adresse: string,
      public lat: number,
      public long: number,
      public datedenaissance: string,
      public diplomes?: string[],
      public experiences?: string[],
      public hobbies?: string[]
    ) {}
  }
