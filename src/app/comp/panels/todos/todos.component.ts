import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../../servises/todo.service';
import { todo } from '../../../modul/todo';

@Component({
  selector: 'to-dos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  index:number=0
  currectTodo:todo
  spanClaasValue:string= "stat"
  divClaasValue:string=""

  constructor(public svstodo:TodoService) { }

  ngOnInit() {
    this.next()
  }
  next(){
    this.spanClaasValue = "stat w8"
    this.divClaasValue= "shhh"

    this.svstodo.get(++this.index)
    .subscribe(todoitem=>{
      this.spanClaasValue= "stat"
      this.divClaasValue=""
      this.currectTodo=todoitem
    })
  }
}
