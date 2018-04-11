import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingRoutingModule } from './shopping-routing.module';
@NgModule(
    {
        imports: [
            CommonModule,
            FormsModule,
            ShoppingRoutingModule
          ],
          declarations:[ShoppingListComponent],
          providers:[]
    }
)
export class ShoppingModule{}