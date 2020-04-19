import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/userService/user.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {

  users;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getUsers();
  }

  deleteUser(id: string) {
    this.userService.deleteUserById(id).subscribe(
      data => alert('Userul a fost stears.'),
      error => console.log('something went wrong'),
      () => this.getUsers());
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      data => {
        this.users = data;
      },
      error => console.error(error),
      () => console.log('users loaded')
    );
  }
}
