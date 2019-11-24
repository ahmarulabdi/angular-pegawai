import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PegawaiTambahComponent } from './pegawai-tambah.component';

describe('PegawaiTambahComponent', () => {
  let component: PegawaiTambahComponent;
  let fixture: ComponentFixture<PegawaiTambahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PegawaiTambahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PegawaiTambahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
