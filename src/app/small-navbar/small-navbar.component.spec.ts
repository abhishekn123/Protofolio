import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallNavbarComponent } from './small-navbar.component';

describe('SmallNavbarComponent', () => {
  let component: SmallNavbarComponent;
  let fixture: ComponentFixture<SmallNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
