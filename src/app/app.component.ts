import { Component } from '@angular/core';
import { LocashenService } from './servises/locashen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data';
  constructor(public locashen:LocashenService){
    locashen.locashen
  }
}



