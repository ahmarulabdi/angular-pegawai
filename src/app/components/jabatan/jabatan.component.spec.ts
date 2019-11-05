import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JabatanComponent } from './jabatan.component';

describe('JabatanComponent', () => {
  let component: JabatanComponent;
  let fixture: ComponentFixture<JabatanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JabatanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JabatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
