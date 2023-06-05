import { Component } from '@angular/core';
import { Formclassing } from './formclassing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'formgroup';
   data=new Formclassing('girl','mech',2022) 
  formsub(formdata:string){

    console.log(formdata)
  }
  subclick(formvalue:string){
    console.log(formvalue)
  }
  

}
