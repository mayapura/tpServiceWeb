import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicaService {
  music_id!:number;

  constructor(private _http: HttpClient) { }
  
  public getCanciones(musicaSearch:string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': 'ef831c3b77mshd75ba19551ea8cap137c6cjsnd2e4b6954064',
		    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
      }),
      params:{ q: musicaSearch },
    };

    return this._http.get(
      "https://deezerdevs-deezer.p.rapidapi.com/search",httpOptions
    );
  }


  

  

}
