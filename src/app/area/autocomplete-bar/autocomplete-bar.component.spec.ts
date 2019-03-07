import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteBarComponent } from './autocomplete-bar.component';
import { MatAutocompleteModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

fdescribe('AutocompleteBarComponent', () => {
  let component: AutocompleteBarComponent;
  let fixture: ComponentFixture<AutocompleteBarComponent>;

  const suggestBase = ['Jardin', 'Serre', 'Plant', 'Java'];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule, MatAutocompleteModule ],
      declarations: [ AutocompleteBarComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not have undefined suggestions', () => {
    expect(component.suggestions).toBeDefined();
  });

  it('should have undefined filteredOptions by default', () => {
    expect(component.filteredOptions).toBeUndefined();
  });

  it('should define filteredOptions when the model changes', () => {
    component.modelChanged();
    expect(component.filteredOptions).toBeDefined();
  });

  it('should filter suggestions when filterOptions is called', () => {
    component.suggestions = suggestBase;
    const suggested = component.filterOptions('J');
    expect(JSON.stringify(suggested)).toBe(JSON.stringify(['Jardin', 'Java']));
  });
});
