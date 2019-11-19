import { Component, OnInit, Input } from '@angular/core';
import { Posts } from '../../../modul/posts';

@Component({
  selector: 'item-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }
  
  @Input() post:Posts
  ngOnInit() {
    
  }

}
