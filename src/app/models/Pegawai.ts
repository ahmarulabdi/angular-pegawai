import {Jabatan} from './Jabatan';

export class Pegawai {
  id: number;
  namaPegawai: string;
  keterangan: string;
  jabatan?: Jabatan;
  constructor(response: any) {
    this.id = response.id;
    this.namaPegawai = response.nama_pegawai;
    this.keterangan = response.keterangan;
    this.jabatan = response.jabatan;
  }
}
