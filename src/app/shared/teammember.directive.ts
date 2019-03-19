import { Directive, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appTeammember]'
})
export class TeammemberDirective {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = '#f7f8f9';
  @HostBinding('style.backgroundColor') backgroundColor: string;


  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    return false; 
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = this.highlightColor;
    return false; 
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
    return false; 
  }

}
