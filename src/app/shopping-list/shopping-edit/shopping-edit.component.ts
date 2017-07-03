import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/models/ingredient.model';
import {ShoppingListService} from '../../shared/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  /* Child components in our view can be accessed from our parent component easily with @ViewChild */
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  /* use method 3: shopping-list service to delete the following statement
  // pass ingredientAdded to shopping-list.component
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  */

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient: Ingredient = new Ingredient(ingName, ingAmount);
    /* use method 3: shopping-list service to delete the following statement
    this.ingredientAdded.emit(newIngredient); */
    this.slService.addIngredient(newIngredient);

  }
}
