// app.component.ts
/* learn two-ways binding => ngModel
   property-binding => [] =
   event-binding => ( ) ="onSelected($event)"
   local reference with @ViewChild
   https://stackoverflow.com/questions/30623825/how-to-use-jquery-with-angular2
*/
/* three ways to declare javascript class => https://www.phpied.com/3-ways-to-define-a-javascript-class/
    1. var apple = {
           type: "macintosh",
           color: "red",
           getInfo: function () {
           return this.color + ' ' + this.type + ' apple';
           }
          }
        don't need to create an object
     2. function Apple (type) {
           this.type = type;
           this.color = "red";
           this.getInfo = function() {
           return this.color + ' ' + this.type + ' apple';
           };
          }
         var apple = new Apple('macintosh');
         apple.color = "reddish";
         alert(apple.getInfo());

      3  var apple = new function() {
           this.type = "macintosh";
           this.color = "red";
           this.getInfo = function () {
           return this.color + ' ' + this.type + ' apple';
           };
         }
         apple.color = "reddish";
         alert(apple.getInfo());
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
