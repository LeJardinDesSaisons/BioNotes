import { Component, OnInit, Input, Output, EventEmitter, Directive } from '@angular/core';

/**
 * @title Display value autocomplete
 */
@Component({
  selector: 'app-autocomplete-bar',
  templateUrl: './autocomplete-bar.component.html',
  styleUrls: ['./autocomplete-bar.component.scss']
})
export class AutocompleteBarComponent implements OnInit {
  @Output() choosenOptionChanged = new EventEmitter<string>();

  /** List of all possible suggestions that can be displayed below the field. */
  @Input() suggestions: string[];
  /** Content of the field that was typed or selected by the user */
  @Input() fieldContent: string;
  /** Content of the placeholder */
  @Input() placeholderContent: string;
  /** True iif the input field takes the entire width of its container */
  @Input() regularSize = false;

  /** List of the suggestions that will be displayed below the field  */
  filteredOptions: string[];

  ngOnInit() {
    if (this.suggestions === undefined) {
      this.suggestions = [];
    }
    if (this.placeholderContent === undefined) {
      this.placeholderContent = 'Placeholder';
    }
  }

  /**
   * Automatically called when the ngModel (choosenOption) changes.
   * Updates the suggested values.
   */
  modelChanged() {
    if (this.fieldContent) {
      this.filteredOptions = this.filterOptions(this.fieldContent);
    } else {
      this.filteredOptions = this.suggestions;
    }
    this.choosenOptionChanged.emit(this.fieldContent);
  }

  /**
   * Filters the suggestions based on the value the user typed inside the field.
   * @param value Value that will be used to filter the list
   */
  filterOptions(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.suggestions.filter(option => option.toLowerCase().includes(filterValue));
  }
}
