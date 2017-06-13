/**
 * Created by MatthewChick on 12/6/2017.
 * header is user-defined component manually
 */

import {Component, EventEmitter, Output} from '@angular/core';

// Register HeaderComponent in app.module.ts, otherwise has an error
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  // pass data to parent component => app.component.html
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
    console.log("feature's content is " + feature);
  }
}
