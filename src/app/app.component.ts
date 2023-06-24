import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ai-recipe-maker';
  searchResult: string = '';

  async performSearch(searchTerm: string): Promise<void> {
    try {
      const response = await axios.post('https://api.openai.com/v1/chat/completions',
      {
        messages: [{ "role": "user", "content": "Provide me a recipe that uses " + searchTerm + "." }],
        "model": "gpt-3.5-turbo"
      },
      {
        headers: {
          'Authorization': 'Bearer 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',
          'Content-Type': 'application/json'
        }
      });

      this.searchResult = response.data.choices[0].message.content; // Extract the desired information from the response
    } catch (error) {
      console.error('Error performing search:', error);
    }
  }
}
