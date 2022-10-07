import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  @Output("searchTextChanged") filterTextChanged: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }
  filterText = ''
  updateFilterText(newValue: string) {
    this.filterText = newValue
    this.filterTextChanged.emit(this.filterText)
  }
}
