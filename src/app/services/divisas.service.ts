import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DivisasService {

  constructor(private _http: HttpClient) { }
  
  public getConversor(fromType:string, toType:string, fromValue:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': 'ef831c3b77mshd75ba19551ea8cap137c6cjsnd2e4b6954064',
		    'X-RapidAPI-Host': 'community-neutrino-currency-conversion.p.rapidapi.com'
      }),
    };
    let body = {
      'from-value': fromValue,
		  'from-type': fromType,
		  'to-type': toType
    }
    return this._http.post("https://community-neutrino-currency-conversion.p.rapidapi.com/convert",body,httpOptions);
  }

}
