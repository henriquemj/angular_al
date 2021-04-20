import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos = [
    { 
      url: 'https://i.pinimg.com/originals/5a/a2/2c/5aa22c869adb0e49b02a8019bb6c470b.jpg',
      description: 'Dohko-de-Libra'
    },
    { 
      url: 'https://images6.fanpop.com/image/photos/40100000/Libra-Dohko-saint-seiya-knights-of-the-zodiac-40123939-640-800.jpg',
      description: 'Dohko-MestreAncião'
    }        
  ];  

}
