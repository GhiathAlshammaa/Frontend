import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-gui',
  template: `
    <p>
      gui works!
    </p>
  `,
  styles: [
  ]
})
export class GuiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
