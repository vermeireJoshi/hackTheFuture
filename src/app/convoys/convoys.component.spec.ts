import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvoysComponent } from './convoys.component';

describe('ConvoysComponent', () => {
  let component: ConvoysComponent;
  let fixture: ComponentFixture<ConvoysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvoysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvoysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
