export class Musica {
    id!:string;
    cover!:string;
    title!:string;
    contributors!:Array<String>;
    album!:string;
    preview!:string;

    constructor(id:string="",cover:string="", title:string="",contributors:Array<String>=[], album:string="", preview:string=""){
        this.id = id;
        this.cover = cover;
        this.title = title;
        this.contributors = contributors;
        this.album = album;
        this.preview = preview;
    }
}
