import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';


@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit {
  
  constructor(
    private userService: UserService,
  ) { }

  userForm = new FormGroup({
    cpf: new FormControl('', [Validators.required])
  })

  ngOnInit(): void { }

  onSubmit() {
    this.userService.consultUser(this.userForm.value).subscribe(() => {
      (data: any) => console.log(data)
    })
    // console.log(this.userForm.value.cpf);
  }
}
