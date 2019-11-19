import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from '../modul/posts';
import { UsersService } from './users.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private api = 'https://jsonplaceholder.typicode.com/posts/'
  private usersapi = 'https://jsonplaceholder.typicode.com/posts?userId=#' 

  selectedt:Posts

  constructor(private http:HttpClient, private svsuser:UsersService) { }

  getPostsByBelect():Observable<Posts[]>{
    return this.http.get<Posts[]>(this.usersapi
    .replace("#",this.svsuser.selectedUser.id.toString()))
  }

  get(id:number):Observable<Posts>{
    return this.http.get<Posts>(this.api+id)
  }
}
