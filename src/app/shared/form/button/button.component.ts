import { NgModule, Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'in-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() size: string;
  @Input() content: string;
  @Input() contentColor: string;
  @Input() border: boolean;
  @Input() borderColor: string;
  @Input() backgroundColor: string;
  @ViewChild('button') button: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.size = this.size || 'middle';    
    this.border = this.border || true;
    this.borderColor = this.borderColor || 'blue';
    this.contentColor = this.contentColor || 'blue';

    this.applyStyles();
  }

  private applyStyles(): void {
    this.renderer.setStyle(this.button.nativeElement, "background-color", this.backgroundColor);    
  }

}
