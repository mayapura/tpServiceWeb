import { Component, OnInit } from '@angular/core';
import { Horoscopo } from 'src/app/models/horoscopo';
import { HoroscopoService } from 'src/app/services/horoscopo.service';

@Component({
  selector: 'app-horoscopo',
  templateUrl: './horoscopo.component.html',
  styleUrls: ['./horoscopo.component.css']
})
export class HoroscopoComponent implements OnInit {
  horoscopo!: Horoscopo;
  signo!:string;
  signos: Array<string>= ["aries", "touro", "gemeos", "cancer", "leao", "sagitario", "virgem", "capricornio", "libra", "aquario","escorpiao", "peixes"];
  mostrar:Boolean=false;
  
  constructor(private horoscopoService: HoroscopoService) { }

  ngOnInit(): void {
  }

  getHoroscopo(signo:string){
    this.horoscopoService.getHoroscopo(signo, "pt").subscribe(
      result => {
        this.signo= signo;
        console.log(result);
        this.horoscopo = new Horoscopo();
         this.horoscopo.title = result.title;
        this.horoscopo.date = result.date;
        this.horoscopo.text = result.text; 
        this.mostrar = true;
        console.log(this.horoscopo);
      },
      error => {alert("Error en la petición");}
    );
  }

}
