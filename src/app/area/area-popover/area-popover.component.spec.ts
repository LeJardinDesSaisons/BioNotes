import { Router } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaPopoverComponent } from './area-popover.component';
import { IonicModule, PopoverController } from '@ionic/angular';

describe('AreaPopoverComponent', () => {
  let component: AreaPopoverComponent;
  let fixture: ComponentFixture<AreaPopoverComponent>;

  let dismissSpy: any, navigateByUrlSpy: any;

  beforeEach(async(() => {
    const popoverControllerStub = jasmine.createSpyObj('PopoverController', ['dismiss']);
    dismissSpy = popoverControllerStub.dismiss;

    const routerStub = jasmine.createSpyObj('Router', ['navigateByUrl']);
    navigateByUrlSpy = routerStub.navigateByUrl;

    TestBed.configureTestingModule({
      imports: [ IonicModule ],
      declarations: [ AreaPopoverComponent ],
      providers: [
        {provide: PopoverController, useValue: popoverControllerStub},
        {provide: Router, useValue: routerStub},
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change route', () => {
    const route = '/';
    component.changeRoute(route);
    expect(dismissSpy).toHaveBeenCalled();
    expect(navigateByUrlSpy).toHaveBeenCalledWith(route);
  });
});
