/**
 * Created by MatthewChick on 12/6/2017.
 * header is user-defined component manually
 */
// header.component.ts
import {Component, EventEmitter, Output} from '@angular/core';
// Register HeaderComponent in app.module.ts, otherwise has an error
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  /* method 1: event binding
     method 2: we do not need the following codes <= use angular routing
  // pass data to parent component => app.component.html
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
    console.log("feature's content is " + feature);
  } */
}
