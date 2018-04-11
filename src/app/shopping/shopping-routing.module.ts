import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { LoginComponent } from '../login/login.component';

const routes = [
    {path:'shopping', component : ShoppingListComponent}    
]
@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class ShoppingRoutingModule { }