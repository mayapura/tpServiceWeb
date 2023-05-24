import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { Divisas } from 'src/app/models/divisas';
import { DivisasService } from 'src/app/services/divisas.service';

@Component({
  selector: 'app-divisas',
  templateUrl: './divisas.component.html',
  styleUrls: ['./divisas.component.css']
})
export class DivisasComponent implements OnInit {
  divisa!:Divisas;
  fromType!:string;
  toType!:string;
  fromValue!:string;
  valueConvert!:string;
  countries: Array<string>= ["USD", "GBR", "ARS"];
  listCountries!: Array<Divisas>;
  valueMoney!:"1";

  constructor(private divisasService: DivisasService) { }

  conversion(){
    this.divisasService.getConversor(this.fromType, this.toType, this.fromValue).subscribe(
      (result) => {
        console.log(result);
        this.valueConvert = result.result;
        console.log(this.valueConvert);
      },
      error => {alert("Error en la petición");}
    );
  }

/* Las solicitudes que procesa son muchas lo que quiere decir que excede al limite permitido por dia */
  cargarTabla(){
    for(let i=0; i<this.countries.length; i++){
      for(let j=0; j<this.countries.length; j++){
        console.log(this.countries[i]);
        this.divisasService.getConversor(this.countries[i],this.countries[j],this.valueMoney).subscribe(
          (result) => {
            this.divisa.result = result.result;
            this.divisa.fromValue = this.valueMoney;
            this.listCountries.push();
            console.log(this.listCountries);
          },
          error => {alert("Error en la petición")}
        )
      }
    }
  }

  ngOnInit(): void {
    /* this.cargarTabla(); */
  }

}
