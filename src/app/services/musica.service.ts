import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicaService {
  trackId!:number;

  constructor(private _http: HttpClient) { }
  
  public getTrack(idTrack:string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': 'ef831c3b77mshd75ba19551ea8cap137c6cjsnd2e4b6954064',
		    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
      }),
    };
    return this._http.get(
      "https://deezerdevs-deezer.p.rapidapi.com/track/"+idTrack, httpOptions);
  }

}
