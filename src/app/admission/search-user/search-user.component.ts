import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/typings/user.model';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit {

  user!: any;
  typeAccount!: string;
  
  constructor(
    private userService: UserService,
  ) { }

  userForm = new FormGroup({
    cpf: new FormControl('', [Validators.required])
  })

  ngOnInit(): void { }

  onSubmit() {
    this.userService.consultUser('').subscribe((data) => {
      this.user = data;
    })
  }
}
