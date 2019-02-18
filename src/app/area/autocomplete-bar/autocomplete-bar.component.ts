import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AutoSuggested } from '../../model/area';

/**
 * @title Display value autocomplete
 */
@Component({
  selector: 'app-autocomplete-bar',
  templateUrl: './autocomplete-bar.component.html',
  styleUrls: ['./autocomplete-bar.component.scss']
})
export class AutocompleteBarComponent implements OnInit {
  @Output() choosenOptionChanged = new EventEmitter<AutoSuggested>();
  @Input() suggestions: AutoSuggested;

  choosenOption: AutoSuggested;

  myControl = new FormControl();
  options: AutoSuggested[] = [
    {id: 1, name: 'Jardin'},
    {id: 2, name: 'Plant'},
    {id: 3, name: 'Serre'}
  ];
  filteredOptions: Observable<AutoSuggested[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith<string | AutoSuggested>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }

  displayFn(item?: AutoSuggested): String | undefined {
    return item ? item.name : undefined;
  }

  private _filter(name: String): AutoSuggested[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  onChange() {
    this.choosenOptionChanged.emit(this.choosenOption);
  }
}
