import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-compo',
  templateUrl: './single-compo.component.html',
  styleUrls: ['./single-compo.component.css']
})
export class SingleCompoComponent implements OnInit {

  name: string = 'Appareil';
  status: string = 'Statut';
  id: number = -1;


  constructor(private appSrv: AppareilService,private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.name = this.appSrv.getAppareilById(+id).name;
    this.status = this.appSrv.getAppareilById(+id).status;  

    this.id = this.appSrv.getAppareilById(+id).id;  
      
  }


}
