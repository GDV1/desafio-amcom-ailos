import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';

import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/shared/typings/user.model';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit, OnDestroy {
  subs: Subscription = new Subscription();
  user: any;

  constructor(
    private userService: UserService,
    private form: FormBuilder
  ) { }

  consultForm = this.form.group({
    cpf: ['', Validators.required, Validators.maxLength(11)],
  });


  consultUserByCpf() {
    
    // this.subs.add(this.userService.consultUser('').subscribe(
    //   (data) => console.log(data)
    // ));
  }

  ngOnInit(): void { }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
