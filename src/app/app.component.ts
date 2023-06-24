import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ai-recipe-maker';
  performSearch(searchTerm: string): void {
    // Perform the search operation using the provided search term
    console.log('Performing search with term:', searchTerm);
    // You can update component state, call an API, or perform any other search-related actions
  }
}
