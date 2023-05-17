export class Musica {
    musica_id!:number;
    portada!:string;
    nombre!:string;
    autores!:Array<String>;

    constructor(musica_id:number,portada:string, nombre:string,autores:Array<String>){
        this.musica_id=musica_id;
        this.portada=portada;
        this.nombre=nombre;
        this.autores=autores;
    }
}
