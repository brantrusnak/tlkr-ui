import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[tlkrModal]'
})
export class ModalDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
