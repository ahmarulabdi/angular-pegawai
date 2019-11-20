import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PegawaiComponent } from './components/pegawai/pegawai.component';
import { JabatanComponent } from './components/jabatan/jabatan.component';
import {PegawaiDetailComponent} from './components/pegawai-detail/pegawai-detail.component';



const routes: Routes = [

  {
    path : 'pegawai',
    component : PegawaiComponent,
  },
  {
    path : 'jabatan',
    component : JabatanComponent,
  },
  {
    path : 'detail/:id',
    component : PegawaiDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
