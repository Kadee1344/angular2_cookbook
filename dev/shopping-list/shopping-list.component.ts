import {Component} from '@angular/core';
import {ShoppingNewItem} from './shopping-new-item';
import {ListItem} from '../list-item';
import {ShoppingListItemComponent} from './shopping-list-item-component';

@Component({
  selector: 'shopping-list',
  template: `
    <section>
      <shopping-new-item (itemAdded)="onItemAdded($event)"></shopping-new-item>
    </section>
    <section>
      <h3>My list</h3>
      <div class="list">
        <ul>
          <li *ngFor="#item of listItems" (click)="onSelect(item)" >{{item.name}} ({{item.amount}})</li>
        </ul>
      </div>
    </section>
    <section *ngIf="selectedItem != null">
      <shopping-list-item [item]="selectedItem" (removed)="onRemove($event)"></shopping-list-item>
    </section>
  `,
  directives: [ShoppingNewItem, ShoppingListItemComponent]
})

export class ShoppingListComponent {
  listItems = new Array<ListItem>();
  selectedItem: ListItem;

  onItemAdded(item: ListItem){
    this.listItems.push({name: item.name, amount: item.amount});
  }

  onSelect(item: ListItem) {
    this.selectedItem = item;
  }

  onRemove(item: ListItem) {
    this.listItems.splice(this.listItems.indexOf(item), 1);
    this.selectedItem = null;
  }
}
