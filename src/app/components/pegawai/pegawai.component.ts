import { Component, OnInit, Output } from '@angular/core';
import { Pegawai } from './../../models/Pegawai';
import { PegawaiService } from './../../services/pegawai.service';

@Component({
  selector: 'app-pegawai',
  templateUrl: './pegawai.component.html',
  styleUrls: ['./pegawai.component.css']
})
export class PegawaiComponent implements OnInit {

  @Output() title = "Data Pegawai" ;
  pegawais: Pegawai[];
  constructor(private pegawaiServices: PegawaiService) { }

  ngOnInit() {
    this.dataPegawai();
  }

  dataPegawai(){
    this.pegawaiServices.data().subscribe(p => this.pegawais = p);
  }





}
