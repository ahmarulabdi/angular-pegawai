import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-jabatan',
  templateUrl: './jabatan.component.html',
  styleUrls: ['./jabatan.component.css']
})
export class JabatanComponent implements OnInit {

  @Output() title: string= "Data Jabatan";
  constructor() { }

  ngOnInit() {
  }


}
