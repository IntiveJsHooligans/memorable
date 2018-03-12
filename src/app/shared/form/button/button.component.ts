import { NgModule, Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'in-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() content = "button"
  @Input() loading: boolean = false;
  @Input() styles: object;

  defaultStyles = {
    "font-size": '12px',
    "border-radius": '30px'
  }
  
  ngOnInit() {
    this.styles = { ...this.defaultStyles, ...this.styles };
  }

}
