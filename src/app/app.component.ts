import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string= 'Management Pegawai';

  setTitle(event: any){
    this.title = event.title;
  }
}
