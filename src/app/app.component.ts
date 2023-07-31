import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  items1: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  items2: string[] = ['Option A', 'Option B', 'Option C', 'Option D'];

  selectedOptions1: string[] = [];
  selectedOptions2: string[] = [];

  handleItemSelected(selectedOptions: string[], dropdownName: string) {
    if (dropdownName === 'dropdown1') {
      this.selectedOptions1 = selectedOptions;
      console.log('Selected Options for Dropdown 1:', this.selectedOptions1);
    } else if (dropdownName === 'dropdown2') {
      this.selectedOptions2 = selectedOptions;
      console.log('Selected Options for Dropdown 2:', this.selectedOptions2);
    }
  }
}
