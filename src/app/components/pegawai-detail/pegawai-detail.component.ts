import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {PegawaiService} from 'src/app/services/pegawai.service';
import {Pegawai} from 'src/app/models/Pegawai';
import {switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Location} from '@angular/common';
import {Output} from '@angular/core';

@Component({
  selector: 'app-pegawai-detail',
  templateUrl: './pegawai-detail.component.html',
  styleUrls: ['./pegawai-detail.component.css']
})
export class PegawaiDetailComponent implements OnInit {
  pegawai: Pegawai;
  @Output() title = 'Detail Pegawai';

  constructor(
    protected pegawaiService: PegawaiService,
    protected route: ActivatedRoute,
    protected location: Location
  ) {
  }

  ngOnInit() {
    this.getPegawai();
  }
  getPegawai() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pegawaiService.detail(id).subscribe(
      p => this.pegawai = p
    );
  }

  kembali() {
    this.location.back();
  }



}
