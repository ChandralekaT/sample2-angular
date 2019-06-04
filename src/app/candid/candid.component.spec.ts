import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidComponent } from './candid.component';

describe('CandidComponent', () => {
  let component: CandidComponent;
  let fixture: ComponentFixture<CandidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
