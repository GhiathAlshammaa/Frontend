import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cms-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }
  @Input() projectName = ""
  ngOnInit(): void {

  }

}
