import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgFormatComponent } from './img-format.component';

describe('ImgFormatComponent', () => {
  let component: ImgFormatComponent;
  let fixture: ComponentFixture<ImgFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
