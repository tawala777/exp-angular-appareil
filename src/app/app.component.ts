import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { interval } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  tempspasse: number;
  counterSubscription : Subscription;
  authentifie:boolean = false;
  isAuthSubscription: Subscription;

  constructor(private authSrv: AuthService) {
    
  }
  ngOnInit() {
    const counter = interval(1000);
    this.counterSubscription = counter.subscribe( (value) => {
        this.tempspasse = value;
        },
        (error) => {
          console.log('Uh-oh, an error occurred! : ' + error);
        },
        () => {
          console.log('Observable complete!');
        }
      );
      this.isAuthSubscription = this.authSrv.isAuthSubject.subscribe(
        (authSt: boolean) => {
          this.authentifie = authSt;
        }
      );
      this.authSrv.emitisAuthSubject();
    }
    ngOnDestroy() {
      this.counterSubscription.unsubscribe();
      this.isAuthSubscription.unsubscribe();
    }
}