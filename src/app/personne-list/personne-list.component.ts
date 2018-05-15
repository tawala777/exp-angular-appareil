import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Personne } from '../models/Personne.model';
import { PersonneService } from '../services/personne.service';

@Component({
  selector: 'app-personne-list',
  templateUrl: './personne-list.component.html',
  styleUrls: ['./personne-list.component.css']
})
export class PersonneListComponent implements OnInit, OnDestroy {
  personnes: Personne[];
  personneSubscription: Subscription;

  constructor(private persSrv: PersonneService) { }

  ngOnInit() {
    this.personneSubscription = this.persSrv.personneSubject.subscribe(
      (personnes: Personne[]) => {
        this.personnes = personnes;
      }
    );
    this.persSrv.emitPersonnes();
  }

  ngOnDestroy(){
      this.personneSubscription.unsubscribe();
  }
}
