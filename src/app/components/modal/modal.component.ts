import { Component, OnInit, HostListener, ViewChild, ComponentFactoryResolver, Input } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ModalDirective } from 'src/app/directives/modal.directive';

@Component({
  selector: 'tlkr-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() heading: string;
  @ViewChild(ModalDirective, {static: true}) modalContent: ModalDirective;
  @HostListener('document:keydown.escape', ['$event']) onEscape(event: KeyboardEvent) {
    if (this.modal.visibility) {
      this.modal.hide();
    }
  };

  constructor(public modal: ModalService) { }
  
  ngOnInit(): void {
    this.modal.registerModalService(this);
  }

}
