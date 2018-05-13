import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoViewComponent } from './compo-view.component';

describe('CompoViewComponent', () => {
  let component: CompoViewComponent;
  let fixture: ComponentFixture<CompoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
