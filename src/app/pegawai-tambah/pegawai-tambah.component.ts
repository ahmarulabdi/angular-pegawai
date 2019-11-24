import { Component } from '@angular/core';
import * as moment from 'moment';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Jabatan } from '../models/Jabatan';
import { JabatanService } from '../services/jabatan.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pegawai-tambah',
  templateUrl: './pegawai-tambah.component.html'
})
export class PegawaiTambahComponent {
  closeResult: string;
  jabatans: Jabatan[];
  constructor(private modalService: NgbModal, private jabatanService: JabatanService) {

  }

  open(content) {
    this.getJabatan();
    this.modalService.open(content)
      .result
      .then(result => this.closeResult = `Closed with: ${result}`
        , reason => this.closeResult = `Dismissed ${this.getDismissReason(reason)}`
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  getJabatan(): void{
    this.jabatanService.data().subscribe(
      jabatans => this.jabatans = jabatans
    );
  }
}
