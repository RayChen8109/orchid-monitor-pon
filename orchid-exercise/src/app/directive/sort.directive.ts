import { Directive, Input, Renderer2, ElementRef, HostListener } from '@angular/core';
import { Sort } from "../../util/sort"; 

@Directive({
  selector: '[appSort]'
})
export class SortDirective {

  @Input() appSort!: Array<any>;

  constructor(private renderer: Renderer2, private targetElement: ElementRef) { }

  @HostListener("click")
  sortData() {

    const sort = new Sort();

    const elem = this.targetElement.nativeElement;

    const order = elem.getAttribute("data-order");

    const type = elem.getAttribute("data-type");

    const property = elem.getAttribute("data-name");

    console.log(this.targetElement);
    console.log(this.targetElement.nativeElement);
    console.log(this.targetElement.nativeElement.children[0]);

    if (order === "desc") {
      this.appSort.sort(sort.startSort(property, order, type));
      elem.setAttribute("data-order", "asc");
      elem.children[0].classList.toggle('open');
      // console.log('rotate(180deg)');
      // this.renderer.setAttribute(elem.children[0], "class", "bi bi-arrow-down icon-select reverse");
      // this.renderer.setStyle(elem, 'transform', 'rotate(180deg)');
      // this.renderer.setStyle(elem, 'transition', 'transform 0.5s linear');
      
    } else {
      this.appSort.sort(sort.startSort(property, order, type));
      elem.setAttribute("data-order", "desc");
      elem.children[0].classList.toggle('open');
      // console.log('rotate(0deg)');
      // this.renderer.setAttribute(elem.children[0], "class", "bi bi-arrow-down icon-select");
      // this.renderer.setStyle(elem, 'transform', 'rotate(0deg)');
      // this.renderer.setStyle(elem, 'transition', 'transform 0.5s linear');
    }

  }
}
