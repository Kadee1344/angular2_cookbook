import {Component} from '@angular/core';
import {PropertyBindingComponent} from './property-binding.component';

@Component({
    selector: 'my-app',
    template: `
      <section class="parent">
        <h2>This is the parent component</h2>
        <h4>Please enter your name</h4>
        <input type="text" [(ngModel)]="name">
        <br>
        <section class="child">
          <my-property-binding [myName]="name" (hobbiesChanged)="hobbies = $event"></my-property-binding>
        </section>
        <p>My hobbies are: {{hobbies}}</p>
      </section>
    `,
    directives: [PropertyBindingComponent]
})
export class AppComponent {
  name = '';
  hobbies = '';

}
