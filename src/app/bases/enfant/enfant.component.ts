import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.scss']
})
export class EnfantComponent {
  @Input() type : string = '';
  @Output() selectMeal : EventEmitter<string> = new EventEmitter<string>();

  select(meal : string) : void {
    this.selectMeal.emit(meal);
  }
}
