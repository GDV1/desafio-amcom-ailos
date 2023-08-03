import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { CpfPipe } from './utils/cpf.pipe';
import { ButtonComponent } from './components/button/button.component';

const components = [CardComponent, ButtonComponent]

@NgModule({
  declarations: [
    ...components,
    CpfPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [ 
    ...components,
    CpfPipe,
  ]
})
export class SharedModule { }
