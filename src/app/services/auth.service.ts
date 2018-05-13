export class AuthService {

    isAuth = false;
  
    signIn() {
      console.log('je suis dans le service Auth ...');
      return new Promise(
        (resolve, reject) => {
          setTimeout(
            () => {
              this.isAuth = true;
              console.log('... connecté!');
              resolve(true);
            }, 3000
          );
        }
      );
    }
  
    signOut() {
      console.log('je suis dans le service Auth ...');
      this.isAuth = false;
      console.log('... deconnecté!');
    }
  }