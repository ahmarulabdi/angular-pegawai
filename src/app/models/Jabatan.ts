export class Jabatan {
  id: number;
  nama_jabatan: string;

  constructor(response: any){
    this.id = response.id;
    this.nama_jabatan = response.nama_jabatan;
  }
}
