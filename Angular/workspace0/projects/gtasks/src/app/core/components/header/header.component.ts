import { Component, Input, OnInit } from '@angular/core';
// import {* as logo} from '../../../../assets/logo.svg';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  src: string = '../../../../assets/logo.png';
  constructor() {}

  ngOnInit(): void {}
}
