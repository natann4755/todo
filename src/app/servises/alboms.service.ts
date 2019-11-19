import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../modul/album';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AlbomsService {

  api="https://jsonplaceholder.typicode.com/albums?userId=#"
  selectapi="https://jsonplaceholder.typicode.com/albums/"
  constructor(private http:HttpClient,public svsuser:UsersService) { }

  getAlbomBySelect():Observable<Album[]>{
    return this.http.get<Album[]>(this.api
    .replace("#",this.svsuser.selectedUser.id.toString()))
  }

 get(id:number):Observable<Album>{
   return this.http.get<Album>(this.selectapi+id)
 }
}
