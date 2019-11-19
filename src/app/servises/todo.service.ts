import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { todo } from '../modul/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private api = 'https://jsonplaceholder.typicode.com/todos/'
  constructor(private Http:HttpClient) { }

  getTodos():Observable<todo[]>{
    return this.Http.get<todo[]>(this.api)
  }

  get(id:number):Observable<todo>{
    return this.Http.get<todo>(this.api+id)
  }
}
