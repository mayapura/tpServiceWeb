export class Horoscopo {
    title!:string;
    date!:string;
    text!:string;    

    constructor(title:string="",date:string="", text:string=""){
        this.title = title;
        this.date = date;
        this.text = text;
    }
    
}
