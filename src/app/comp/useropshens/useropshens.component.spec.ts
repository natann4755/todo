import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseropshensComponent } from './useropshens.component';

describe('UseropshensComponent', () => {
  let component: UseropshensComponent;
  let fixture: ComponentFixture<UseropshensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseropshensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseropshensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
