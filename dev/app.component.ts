import {Component} from '@angular/core';
import {Component1Component} from './component1.component';
import {Component2Component} from './component2.component';


@Component({
    selector: 'my-app',
    template: ` 
    <h2>First component</h2>
      <component-1></component-1>
    `,
    directives: [Component1Component, Component2Component]
})

export class AppComponent {
 
}
