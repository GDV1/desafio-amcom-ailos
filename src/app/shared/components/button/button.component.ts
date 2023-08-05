import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() title = '';   
  @Input() styles = '';

  setStyle = false;

  constructor() { }

  ngOnInit(): void {
    this.styles === 'primary' ? (this.setStyle = !this.setStyle) : (this.setStyle = this.setStyle);
  }
}
