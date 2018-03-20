import { NgModule, Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'in-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent  {
  @Input() content = "button"
  @Input() loading: boolean = false;
  @Input() styles: object;
}
