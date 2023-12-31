import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { CpfPipe } from './pipes/cpf.pipe';
import { ButtonComponent } from './components/button/button.component';
import { SidenavComponent } from './template/sidenav/sidenav.component';
import { HeaderComponent } from './template/header/header.component';


import { FooterComponent } from './template/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const components = [CardComponent, ButtonComponent, SidenavComponent, HeaderComponent, FooterComponent]

@NgModule({
  declarations: [
    ...components,
    CpfPipe,
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule, 
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ 
    ...components,
    CpfPipe,
  ]
})
export class SharedModule { }
