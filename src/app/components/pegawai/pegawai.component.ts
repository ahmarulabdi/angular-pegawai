import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pegawai',
  templateUrl: './pegawai.component.html',
  styleUrls: ['./pegawai.component.css']
})
export class PegawaiComponent implements OnInit {

  @Output() title = "Data Pegawai" ;
  constructor() { }

  ngOnInit() {

  }



}
