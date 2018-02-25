import { NgModule, Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'in-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() fontSize: string;
  @Input() content: string;
  @Input() fontColor: string;
  @Input() border: string;
  @Input() borderRadius: string;
  @Input() borderColor: string;
  @Input() backgroundColor: string;
  @Input() width: number;
  @Input() height: number;
  @Input() textAlign: string;
  @Input() loading: boolean;
  @ViewChild('button') button: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.border = this.border ? this.border : 'none';
    this.borderRadius = this.borderRadius ? this.borderRadius : 'none';
    this.borderColor = this.borderColor ? this.borderColor : 'CornflowerBlue';
    this.fontSize = this.fontSize ? this.fontSize : '14px';
    this.fontColor = this.fontColor ? this.fontColor : 'white';
    this.backgroundColor = this.backgroundColor ? this.backgroundColor : '#0f71e2';
    this.content = this.content ? this.content : 'button';
    this.textAlign = this.textAlign ? this.textAlign : 'center';
    this.loading = this.loading ? this.loading : true;

    this.applyStyles();
  }

  private applyStyles(): void {
    this.renderer.setStyle(this.button.nativeElement, "background-color", this.backgroundColor);
    this.renderer.setStyle(this.button.nativeElement, "border", `${this.border} solid ${this.borderColor}`);
    this.renderer.setStyle(this.button.nativeElement, "font-size", this.fontSize);
    this.renderer.setStyle(this.button.nativeElement, "color", this.fontColor);
    this.renderer.setStyle(this.button.nativeElement, "border-radius", this.borderRadius);
    this.renderer.setStyle(this.button.nativeElement, "width", this.width);
    this.renderer.setStyle(this.button.nativeElement, "height", this.height);
    this.renderer.setStyle(this.button.nativeElement, "text-align", this.textAlign);
  }

}
