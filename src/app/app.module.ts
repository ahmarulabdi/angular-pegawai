import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PegawaiComponent } from './components/pegawai/pegawai.component';
import { JabatanComponent } from './components/jabatan/jabatan.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PegawaiComponent,
    JabatanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
