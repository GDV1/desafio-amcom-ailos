import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { CpfPipe } from './utils/cpf.pipe';
import { ButtonComponent } from './components/button/button.component';
import { SidenavComponent } from './template/sidenav/sidenav.component';
import { HeaderComponent } from './template/header/header.component';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './template/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { StepperComponent } from './components/stepper/stepper.component';

const components = [CardComponent, ButtonComponent, SidenavComponent, HeaderComponent, FooterComponent]

const material = [
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatButtonModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule
]

@NgModule({
  declarations: [
    ...components,
    CpfPipe,
    StepperComponent,
  ],
  imports: [
    ...material,
    AppRoutingModule,
    CommonModule,
  ],
  exports: [ 
    ...components,
    CpfPipe,
  ]
})
export class SharedModule { }
