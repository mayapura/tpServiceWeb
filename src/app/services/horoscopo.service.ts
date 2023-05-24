import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoroscopoService {

  constructor(private _http: HttpClient) { }
    
  public getHoroscopo(sign:string, language:string): Observable<any>{
    let httpOption ={
      headers: new HttpHeaders({
        'X-RapidAPI-Key': 'ef831c3b77mshd75ba19551ea8cap137c6cjsnd2e4b6954064',
		'X-RapidAPI-Host': 'horoscope-api.p.rapidapi.com'
      })
    }
    return this._http.get("https://horoscope-api.p.rapidapi.com/"+language+"/"+sign, httpOption);
  }

}
