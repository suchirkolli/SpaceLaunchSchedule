import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Input() headerText!: string;
  @Input() dropdownItems!: string[];

  isAccordionExpanded = false;

  toggleAccordion() {
    this.isAccordionExpanded = !this.isAccordionExpanded;
  }

  onItemClick(item: string) {
    console.log('Selected Item:', item);
    // Handle the selected item as per your requirements
  }
}
