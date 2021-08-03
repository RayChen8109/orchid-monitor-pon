import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSnapshothover]'
})
export class SnapshothoverDirective implements OnInit {

  @Input('backgroundColor') backgroundColor = '';
  @Input('hoverColor') hoverColor = '';

  constructor(private el: ElementRef, private render: Renderer2) { }

  ngOnInit(): void {
    // let newColor = this.render.createText(this.backgroundColor);
    // this.render.setAttribute(this.el.nativeElement, 'style.backgroundColor', this.backgroundColor);
    // this.render.appendChild(this.el.nativeElement, newColor);
    this.setColor(this.backgroundColor);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setColor(this.hoverColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setColor(this.backgroundColor);
  }

  private setColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
