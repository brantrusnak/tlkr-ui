import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import { DropdownOption } from 'src/app/models/dropdown-option';
import { Style } from 'src/app/models/style';

@Component({
  selector: 'tlkr-dropdown[options]',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() options: DropdownOption[];
  @Input() style: Style = 'default';
  @Input() label: string = 'Example';
  public expanded = false;

  @HostListener('document:click', ['$event', '$event.target'])
	public onClick(event: MouseEvent): void {
		if (this.expanded && !(this.element.nativeElement as Element).contains(event.target as Node)) {
			this.hide();
		}
	}

  constructor(private element: ElementRef) { }

  public show() {
    this.expanded = true;
  }

  public hide() {
    this.expanded = false;
  }

  public toggle() {
    this.expanded ? this.hide() : this.show();
  }

  ngOnInit(): void {
  }

}
