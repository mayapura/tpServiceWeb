import { Component, Input, OnInit } from '@angular/core';
import { Musica } from 'src/app/models/musica';
import { MusicaService } from '../../services/musica.service';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css']
})
export class MusicaComponent implements OnInit {
  
  tracks!: Array<any>;
  track!: Musica;
  artists!: Array<any>;

  constructor(private musicaService: MusicaService) { }

  cargarTracks():void{

    var idTracks = [
      "2245186217",
      "1924896117",
      "2213429117",
      "1916742727",
      "2242449097",
      "2094633857",
    ];

    for(let id of idTracks){
      this.getTrackId(id);
      console.log(id)
    }
  }

  getTrackId(idTrack: string){
    this.musicaService.getTrack(idTrack).subscribe(
      (result) => {
        console.log("Result:", result.result);
        this.track = new Musica();
        this.track.id = result.id;
        this.track.cover = result.album.cover_big;
        this.track.title = result.title;
        this.artists = result.contributors;
        this.artists.forEach((artist) =>{
          this.track.contributors.push(artist.name);
        })
        this.track.album = result.album.title;
        this.track.preview = result.preview;
        console.log(this.track);
        this.tracks.push(this.track);
      },
      error=>{
        console.log("Error en la petición");
      }
    );
  }

  ngOnInit(): void {
    this.tracks = new Array<Musica>();
    this.cargarTracks();
  }

}
