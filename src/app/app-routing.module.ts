import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PegawaiComponent } from './components/pegawai/pegawai.component';
import { JabatanComponent } from './components/jabatan/jabatan.component';


const routes: Routes = [
  {
    path : 'pegawai',
    component : PegawaiComponent,
  },
  {
    path : 'jabatan',
    component : JabatanComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
