import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCompoComponent } from './single-compo.component';

describe('SingleCompoComponent', () => {
  let component: SingleCompoComponent;
  let fixture: ComponentFixture<SingleCompoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCompoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
