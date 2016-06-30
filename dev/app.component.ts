import {Component} from '@angular/core';
import {AttributeDirectives} from './attribute-directives.component';
import {StructuralDirectives} from './structural-directives.component';

@Component({
    selector: 'my-app',
    template: `
      <my-attribute-directives></my-attribute-directives>
      <my-structural-directives></my-structural-directives>
    `,
    directives: [AttributeDirectives, StructuralDirectives]
})
export class AppComponent {

}
