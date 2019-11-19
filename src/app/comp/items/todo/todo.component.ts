import { Component, OnInit, Input } from '@angular/core';
import { todo } from '../../../modul/todo';

@Component({
  selector: 'item-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todo:todo

  constructor() { 
    
  }

  ngOnInit() {
  }

}
