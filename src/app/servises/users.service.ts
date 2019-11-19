import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 
import { user } from '../modul/user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private api = 'https://jsonplaceholder.typicode.com/users/'

  selectedUser:user

  constructor(private http:HttpClient) { }

  getUsers():Observable<user[]>{
    return this.http.get<user[]>(this.api)
  }
}
