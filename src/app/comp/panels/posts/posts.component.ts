import { Component, OnInit } from '@angular/core';
import { Posts } from '../../../modul/posts';
import { PostsService } from '../../../servises/posts.service';

@Component({
  selector: 'p-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postss:Posts[]=[]

  constructor(public svspo:PostsService) { }

  ngOnInit() {
     this.svspo.getPostsByBelect()
    .subscribe(data =>this.postss = data)
  }

}
