import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './comp/panels/users/users.component';
import { UserComponent } from './comp/items/user/user.component';
import { UseropshensComponent } from './comp/useropshens/useropshens.component';
import { TodosComponent } from './comp/panels/todos/todos.component';
import { PostsComponent } from './comp/panels/posts/posts.component';
import { AlbomsComponent } from './comp/panels/alboms/alboms.component';
import { TodoComponent } from './comp/items/todo/todo.component';
import { PostComponent } from './comp/items/post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UseropshensComponent,
    TodosComponent,
    PostsComponent,
    AlbomsComponent,
    TodoComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
