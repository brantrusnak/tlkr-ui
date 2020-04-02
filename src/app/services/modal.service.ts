import { Injectable, ComponentFactoryResolver, Type } from '@angular/core';
import { ModalComponent } from '../components/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private $modal: ModalComponent;
  private $visibility = false;
  private $heading: string;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public get visibility(): boolean {
    return this.$visibility;
  }

  public show() {
    this.$visibility = true;
  }

  public hide() {
    this.$visibility = false;
  }

  public toggle() {
    this.$visibility = !this.$visibility;
  }

  
  public get heading() : string {
    return this.$heading;
  }

  public set heading(value: string) {
    this.$heading = value;
  }

  public loadComponent(component: Type<unknown>) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const viewContainerRef = this.$modal.modalContent.viewContainerRef;
    viewContainerRef.clear();
    viewContainerRef.createComponent(componentFactory);
  }


  public registerModalService(modal: ModalComponent) {
    this.$modal = modal;
  }

}
