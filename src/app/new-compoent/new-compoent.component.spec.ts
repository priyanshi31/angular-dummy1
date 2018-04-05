import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCompoentComponent } from './new-compoent.component';

describe('NewCompoentComponent', () => {
  let component: NewCompoentComponent;
  let fixture: ComponentFixture<NewCompoentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCompoentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCompoentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
