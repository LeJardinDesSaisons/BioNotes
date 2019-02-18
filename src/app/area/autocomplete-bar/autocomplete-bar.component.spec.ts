import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteBarComponent } from './autocomplete-bar.component';

describe('AutocompleteBarComponent', () => {
  let component: AutocompleteBarComponent;
  let fixture: ComponentFixture<AutocompleteBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompleteBarComponent ]
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
});
