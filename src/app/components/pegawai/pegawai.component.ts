import { Component, OnInit, Output } from '@angular/core';
import {Pegawai} from './../../models/Pegawai';
import { PegawaiService } from './../../services/pegawai.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-pegawai',
  templateUrl: './pegawai.component.html',
  styleUrls: ['./pegawai.component.css']
})
export class PegawaiComponent implements OnInit {
  pegawais: Pegawai[];
  @Output() title = 'Data Pegawai' ;
  constructor(private pegawaiServices: PegawaiService) { }

  ngOnInit() {
    this.dataPegawai();
  }


  dataPegawai() {
    this.pegawaiServices.data().subscribe(
      pegawais => this.pegawais = pegawais
    );
  }





}
