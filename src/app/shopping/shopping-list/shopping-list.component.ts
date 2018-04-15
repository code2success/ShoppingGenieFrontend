import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  searchTerm : String;
  message : String;
  shoppingList :String[] = [];
  constructor() { }

  ngOnInit() {
  }

  search(item :String){
    
  }
  add(){
    this.message = this.searchTerm;
    if(this.searchTerm !=null && this.searchTerm !=""){
    this.shoppingList.push(this.searchTerm);
    }else{
      console.log("item is null. Not adding to the list");
    }
    this.searchTerm=null;
  }
  onKeydown(event) {
    if (event.key === "Enter") {
      this.add();
    }
  } 
  removeItem(item: String){
    console.log("removing " +item);
    this.shoppingList.splice( this.shoppingList.indexOf(item), 1 );
  }
  submitList(){
    console.log("submitting List");
    console.log(JSON.stringify(this.shoppingList))
  }

}
