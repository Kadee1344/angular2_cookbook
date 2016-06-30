import {Component} from '@angular/core';
import {ShoppingNewItem} from './shopping-new-item';

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
          <li *ngFor="#item of listItems">{{item.name}} ({{item.amount}})</li>
        </ul>
      </div>
    </section>
    <section>
      Edit Items
    </section>
  `,
  directives: [ShoppingNewItem]
})

export class ShoppingListComponent {
  listItems = new Array<{name: string, amount: number}>();

  onItemAdded(item: {name: string, amount: number}){
    this.listItems.push({name: item.name, amount: item.amount});
  }
}
