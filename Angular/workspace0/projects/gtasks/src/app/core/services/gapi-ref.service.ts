import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GapiRef {
  gapi;

  constructor() {
    this.gapi = gapi;
  }
}
