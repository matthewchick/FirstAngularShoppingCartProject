// app.component.ts
/* learn two-ways binding => ngModel
   property-binding => [] =
   event-binding => ( ) ="onSelected($event)"
   local reference with @ViewChild
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
    console.log("loadedFeature's content is " + this.loadedFeature);
  }
}
