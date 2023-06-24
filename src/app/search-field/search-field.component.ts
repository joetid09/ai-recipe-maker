import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-field',
  template: `
    <input type="text" [(ngModel)]="searchTerm" placeholder="Search...">
    <button (click)="onSearch()">Search</button>
  `,
  styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent {
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  searchTerm: string = '';

  onSearch(): void {
    this.search.emit(this.searchTerm);
  }
}