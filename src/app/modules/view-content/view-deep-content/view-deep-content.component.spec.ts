import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDeepContentComponent } from './view-deep-content.component';

describe('ViewDeepContentComponent', () => {
  let component: ViewDeepContentComponent;
  let fixture: ComponentFixture<ViewDeepContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDeepContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDeepContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
