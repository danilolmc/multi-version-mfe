import { Component, NgZone } from '@angular/core';

declare const require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngVersion = require('../../package.json').dependencies['@angular/core'];

  constructor(public ngZone: NgZone){
    globalThis.ngZone = ngZone;
  }
}
