import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ApplicationUser} from '../../../model/applicationUser';
import {UserService} from '../../../services/userService/user.service';
import {UserRole} from '../../../model/userRole';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  userForm: FormGroup;
  userToEdit;
  dropdownSettings = {};
  dropdownList: { name: string; id: number }[];

  constructor(private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getUser();
    this.dropdownList = [
      UserRole.ROLE_ADMIN, UserRole.ROLE_USER, UserRole.ROLE_WRITE
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      itemsShowLimit: 3,
      allowSearchFilter: false,
      enableCheckAll: false
    };
    this.userForm = this.fb.group({
      username: new FormControl('', Validators.required),
      roles: new FormControl('')
    });
  }

  getUser() {
    this.userToEdit = this.userService.getById(this.activatedRoute.snapshot.paramMap.get('id')).subscribe(
      data => {
        this.userToEdit = data;
        this.setFormValues();
      },
      err => console.error(err),
      () => {
      }
    );
  }

  private setFormValues() {
    this.userForm.patchValue({
      username: this.userToEdit.username,
      roles: this.userToEdit.roles
    });
  }

  updateUser() {
    Object.assign(this.userToEdit, this.userForm.value);
    this.userService.updateUser(this.userToEdit).subscribe(
      data => {
        this.userForm.reset();
        alert('Userul a fost modificat!');
        this.router.navigate(['/users']);
      },
      error => {
        console.log('something went wrong!');
      },
      () => {
      }
    );
  }
}
