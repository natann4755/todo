import { Component, OnInit } from '@angular/core';
import { LocashenService } from '../../servises/locashen.service';

@Component({
  selector: 'user-opshens',
  templateUrl: './useropshens.component.html',
  styleUrls: ['./useropshens.component.css']
})
export class UseropshensComponent implements OnInit {

  constructor(private svsloc:LocashenService) { }

  ngOnInit() {
  }

  muvto(page:string){
    this.svsloc.locashen=page
  }
}
