import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tlkr-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {
  @Input() drawerPosition: 'right' | 'left' | 'top' | 'bottom' = 'right';
  visible = false;

  constructor() { }

  open(event?: MouseEvent) {
    if (event) {
      event.stopPropagation();
    }
    this.visible = true;
  }

  close() {
    this.visible = false;
  }

  toggle() {
    this.visible ? this.close() : this.open();
  }

  ngOnInit(): void {
  }

}
