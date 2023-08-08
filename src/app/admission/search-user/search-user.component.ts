import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit {

  user!: any;
  userForm!: FormGroup;
  accounts !: any;
  
  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      cpf: new FormControl (null, [Validators.required])
    })
  }

  get cpf() {
    return this.userForm.value.cpf;
  }

  onSubmit() {
    this.userService.consultUser(this.cpf).subscribe((result) => {
      this.user = result;
    })
  }

  // consultAccounts() {
  //   this.userService.consultAccountByUser(this.cpf).subscribe((data) => {
  //     this.accounts = data;
  //   })
  // }

}
