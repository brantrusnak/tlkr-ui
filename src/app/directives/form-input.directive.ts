import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[tlkrFormInput]'
})
export class FormInputDirective implements OnInit {
  private $element: HTMLInputElement;

  constructor(private element: ElementRef) { }

  private initalize() {
    let iconContainer = document.createElement('div');
    let successIcon = document.createElement('i');
    let errorIcon = document.createElement('i');

    iconContainer.classList.add('icon-container')
    successIcon.classList.add('fas', 'fa-check', 'success')
    errorIcon.classList.add('fas', 'fa-times', 'error')

    iconContainer.appendChild(successIcon);
    iconContainer.appendChild(errorIcon);

    this.$element.parentElement.appendChild(iconContainer)
  }

  ngOnInit(): void {
    this.$element = (this.element.nativeElement as HTMLInputElement);
    this.initalize();
  }

}
