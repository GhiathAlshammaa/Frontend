import { Component, OnInit, Input, HostBinding } from '@angular/core';
export type ButtonType = 'button' | 'submit';

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  // @HostBinding('button.component.scss') primary: '#00bcd4';

  @Input() type: ButtonType;
  // @Input() color: any;

  constructor() {
    this.type = 'button';
  }

  ngOnInit(): void {}
}
