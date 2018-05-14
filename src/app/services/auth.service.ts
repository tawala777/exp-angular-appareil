import { Subject } from 'rxjs';

export class AuthService {
    isAuthSubject = new Subject<boolean>();
    private isAuth = false;
  
    signIn() {
      console.log('je suis dans le service Auth ...');
      return new Promise(
        (resolve, reject) => {
          setTimeout(
            () => {
              this.isAuth = true;
              this.emitisAuthSubject();//le statut de l'auth a changé ==> publier le changement 
              console.log('... connecté!');
              resolve(true);
            }, 2000
          );
        }
      );
    }
  
    
    signOut() {
      console.log('je suis dans le service Auth ...');
      this.isAuth = false;
      this.emitisAuthSubject();  //le statut de l'auth a changé ==> publier le changement 
      console.log('... deconnecté!');
    }
    getAuth(){
      return this.isAuth;
    }
    emitisAuthSubject() {
      this.isAuthSubject.next(this.isAuth);
    }
  }