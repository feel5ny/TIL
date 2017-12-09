import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = [];
  data = [];
  constructor(private userService: UserService) { }

  // async ngOnInit() {
  //   let data = null;
  //   try {
  //     data = await this.userService.getUsers();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // if(data) {
  //   console.log(data.json())
  //   this.users = data.json();
  // }
  ngOnInit() {
    const users$ = this.userService.getUsersObservable();
    users$.subscribe(data => {
      this.users = data.json();
      this.data = data;
    })
  }
}
