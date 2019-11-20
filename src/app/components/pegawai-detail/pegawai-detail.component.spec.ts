import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PegawaiDetailComponent } from './pegawai-detail.component';

describe('PegawaiDetailComponent', () => {
  let component: PegawaiDetailComponent;
  let fixture: ComponentFixture<PegawaiDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PegawaiDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PegawaiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
