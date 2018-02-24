import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudlistingComponent } from './crudlisting.component';

describe('CrudlistingComponent', () => {
  let component: CrudlistingComponent;
  let fixture: ComponentFixture<CrudlistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudlistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
