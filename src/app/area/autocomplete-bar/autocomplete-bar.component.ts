import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

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
  @Input() suggestions: string[];

  myControl = new FormControl();
  choosenOption: string;
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    if (this.suggestions === undefined) {
      this.suggestions = [];
    }
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.suggestions.filter(option => option.toLowerCase().includes(filterValue));
  }

  onChange() {
    this.choosenOptionChanged.emit(this.choosenOption);
  }
}
