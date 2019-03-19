import { Directive, Input, TemplateRef, ViewContainerRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAssignedTo]'
})
export class AssignedToDirective {
  // @Input() account: {name: string, status: string, team1Member: string, team2Member: string, 
  //   priority: string, comment : string};
  condition:boolean = false; 

  constructor(
    private templateRef: TemplateRef<any>,
    private _renderer: Renderer2,
    private viewContainer: ViewContainerRef) { }

    @Input() set appAssignedTo(condition: boolean) {
      let view = this.viewContainer.createEmbeddedView(this.templateRef);
      let rootElem = view.rootNodes[0];
      if(!condition) {
        //rootElem.style.visibility = 'hidden';
        rootElem.style.color = 'red';
        rootElem.style.backgroundColor = 'lightyellow';
        //this._renderer.setProperty(rootElem, 'disabled', true);
        //console.log(Object.values(this.account));
        console.log(rootElem.value);
      } 
    }
  }


