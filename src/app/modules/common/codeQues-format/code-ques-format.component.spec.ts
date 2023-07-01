import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeQuesFormatComponent } from './code-ques-format.component';

describe('CodeQuesFormatComponent', () => {
  let component: CodeQuesFormatComponent;
  let fixture: ComponentFixture<CodeQuesFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeQuesFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeQuesFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
