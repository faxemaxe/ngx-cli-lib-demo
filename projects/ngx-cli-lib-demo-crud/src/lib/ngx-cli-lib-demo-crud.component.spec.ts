import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCliLibDemoCrudComponent } from './ngx-cli-lib-demo-crud.component';

describe('NgxCliLibDemoCrudComponent', () => {
  let component: NgxCliLibDemoCrudComponent;
  let fixture: ComponentFixture<NgxCliLibDemoCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCliLibDemoCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCliLibDemoCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
