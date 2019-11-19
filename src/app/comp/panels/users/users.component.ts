import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../servises/users.service';
import { user } from '../../../modul/user';
import { LocashenService } from '../../../servises/locashen.service';

@Component({
  selector: 'panel-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:user [] = []
  constructor(public svs:UsersService,private svsloc:LocashenService) { }

  ngOnInit() {
    this.svs.getUsers()
    .subscribe(data => this.users=data)
  }

  selectUser(u:user){
    this.svs.selectedUser = u
    this.svsloc.locashen = 'userOptions'
  }
}
