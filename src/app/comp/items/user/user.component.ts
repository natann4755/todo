import { Component, OnInit, Input } from '@angular/core';
import { user } from '../../../modul/user';

@Component({
  selector: 'item-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user:user
  
  constructor() {
   }

  ngOnInit() {
  }

}
