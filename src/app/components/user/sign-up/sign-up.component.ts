import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserRole} from '../../../model/userRole';
import {UserService} from '../../../services/userService/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  dropdownSettings = {};
  signUpForm: FormGroup;
  private dropdownList: { name: string; id: number }[];

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
  }

  get f() {
    return this.signUpForm.controls;
  }

  get roles() {
    return this.signUpForm.get('roles');
  }

  ngOnInit() {
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
    this.signUpForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      roles: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      this.userService.createUser(this.signUpForm.value).subscribe(
        data => {
          this.signUpForm.reset();
          alert('User has been created');
          this.router.navigate(['/admin']);
        },
        error => {
          alert('A aparut o eroare');
        }
      );

    } else {
      alert('Completeaza toate campurile inainte de a adauga volutarul in baza de date!');
    }
  }
}


// import {Component, OnInit} from '@angular/core';
// import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
// import {UserRole} from '../../model/userRole';
// import {UserService} from '../../services/userService/user.service';
// import {Router} from '@angular/router';
// import {Role} from '../../model/role';
//
// @Component({
//   selector: 'app-sign-up',
//   templateUrl: './sign-up.component.html',
//   styleUrls: ['./sign-up.component.css']
// })
// export class SignUpComponent implements OnInit {
//
//   submitted = false;
//   signUpForm: FormGroup;
//   admin = JSON.stringify(UserRole.ROLE_ADMIN);
//   user = UserRole.ROLE_USER;
//   write = UserRole.ROLE_WRITE;
//
//   constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
//   }
//
//   get f() {
//     return this.signUpForm.controls;
//   }
//
//   ngOnInit() {
//     this.signUpForm = this.fb.group({
//       username: ['', Validators.required],
//       password: ['', Validators.required],
//       confirmPassword: ['', Validators.required],
//       roles: this.fb.array([])
//   });
//   }
//
//   onCheckboxChange(e) {
//     const checkArray: FormArray = this.signUpForm.get('roles') as FormArray;
//     if (e.target.checked) {
//       checkArray.push(new FormControl(e.target.value));
//     } else {
//       let i = 0;
//       checkArray.controls.forEach((item: FormControl) => {
//         // tslint:disable-next-line:triple-equals
//         if (item.value == e.target.value) {
//           checkArray.removeAt(i);
//           return;
//         }
//         i++;
//       });
//     }
//   }
//
//   onSubmit() {
//     if (this.signUpForm.valid) {
//       this.userService.createUser(this.signUpForm.value).subscribe(
//         data => {
//           this.signUpForm.reset();
//           alert('User has been created');
//           this.router.navigate(['/admin']);
//         },
//         error => {
//           alert('A aparut o eroare');
//         }
//       );
//
//     } else {
//       alert('Completeaza toate campurile inainte de a adauga volutarul in baza de date!');
//     }
//   }
// }
//
