import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appColorBorder]'
})

export class ColorBorderDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @Input() set appColorBorder(date: string) {
    const creationDate: Date = new Date(date);
    const currentDate = new Date();
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 14);

    if (creationDate < currentDate && creationDate >= newDate) {
      this.colorBorder('green');
    } else if (creationDate > currentDate) {
      this.colorBorder('blue');
    }

  }

  private colorBorder(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'border-color', color);
  }

}

