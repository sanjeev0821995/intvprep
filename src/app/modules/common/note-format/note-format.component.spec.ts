import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteFormatComponent } from './note-format.component';

describe('NoteFormatComponent', () => {
  let component: NoteFormatComponent;
  let fixture: ComponentFixture<NoteFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
