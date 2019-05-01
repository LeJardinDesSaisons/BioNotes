import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicModule } from '@ionic/angular';
import { AutocompleteBarModule } from './../../autocomplete-bar/autocomplete-bar.module';
import { AreaDbService } from './../area-db.service';
import { FormAreaComponent } from './form-area.component';


describe('FormAreaComponent', () => {
  let component: FormAreaComponent;
  let fixture: ComponentFixture<FormAreaComponent>;

  const types = [
    { id: 1, name: 'Parcelle'},
    { id: 2, name: 'Serre'},
  ];
  const area = {
    type: { id: 0, name: 'type' },
    number: 1,
    id: 2,
    parentId: 1,
    name: null,
  };

  let getTypesSpy: any;

  beforeEach(async(() => {
    const dbServiceStub = jasmine.createSpyObj('AreaDbService', ['getTypes']);
    // getTypesSpy = dbServiceStub.getTypes.and.returnValue( of(types) );
    getTypesSpy = dbServiceStub.getTypes.and.returnValue(Promise.resolve(types));
    // thenSpy = dbServiceStub.getTypes.then.and.returnValue( of(['a', 'b']));

    TestBed.configureTestingModule({
      declarations: [ FormAreaComponent ],
      providers:    [ {provide: AreaDbService, useValue: dbServiceStub } ],
      imports: [
        FormsModule,
        IonicModule,
        AutocompleteBarModule,
        BrowserAnimationsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAreaComponent);
    component = fixture.componentInstance;
    component.area = area;

    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(getTypesSpy.calls.any()).toBe(true, 'getTypes called');
  });

  it('should update its name', () => {
    expect(component.area.name).toBeFalsy();
    component.updateName();
    expect(component.area.name).toBe('type 1', 'name updated');
  });
});
