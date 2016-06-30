import {Directive} from '@angular/core';
import {ElementRef} from '@angular/core';
import {OnInit} from '@angular/core';
import {Renderer} from '@angular/core';

@Directive({
  selector: '[myHighlight]',
  inputs: ['highlightColor:myHighlight'],
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})

export class HighlightDirective {
  private _defaultColor:string = 'lightgreen';
  highlightColor: string;

  constructor(private _elRef: ElementRef, private _renderer: Renderer) {

  }

  // ngOnInit():any{
  //   this._renderer.setElementStyle(this._elRef.nativeElement, 'background-color', this.highlightColor || this._defaultColor);
  // }

  onMouseEnter() {
    this._renderer.setElementStyle(this._elRef.nativeElement, 'background-color', this.highlightColor || this._defaultColor);
  }

  onMouseLeave() {
    this._renderer.setElementStyle(this._elRef.nativeElement, 'background-color', null);
  }

}
