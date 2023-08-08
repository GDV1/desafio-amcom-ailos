import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() type: string = 'CONSULT' || 'ACCOUNT';
  @Input() title !: string
  @Input() description !: string
  @Input() icon !: string
  @Input() name !: string
  @Input() instutition !: string
  @Input() numberAccount !: string
  @Input() status !: string
}
