import { Component, OnInit } from '@angular/core';
import { Album } from '../../../modul/album';
import { AlbomsService } from '../../../servises/alboms.service';

@Component({
  selector: 'p-alboms',
  templateUrl: './alboms.component.html',
  styleUrls: ['./alboms.component.css']
})
export class AlbomsComponent implements OnInit {

  alboms:Album[]=[]
  constructor(public svsalbo:AlbomsService) { }


  ngOnInit() {
    this.svsalbo.getAlbomBySelect()
    .subscribe(albo => this.alboms=albo)
  }

}
