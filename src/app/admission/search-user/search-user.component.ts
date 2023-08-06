import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit {

  constructor(private userService: UserService) {}

  consultUserByCpf() {
    this.userService.consultUser('').subscribe();
  }
  ngOnInit(): void {

  }

}
