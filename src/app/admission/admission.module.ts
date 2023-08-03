import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchUserComponent } from './search-user/search-user.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ 
    SearchUserComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ SearchUserComponent ]
})
export class AdmissionModule { }
