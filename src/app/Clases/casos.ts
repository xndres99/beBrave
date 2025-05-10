export class Casos {
    id:number;
    imagen:string;
    porcentaje:String;
    titulo:string;
    subTitulo:string;
    constructor(
         id,
         imagen,
         porcentaje,
         titulo,
         subTitulo
      ) {
        this.id=id;
        this.imagen=imagen;
        this.porcentaje=porcentaje;
        this.titulo=titulo;
        this.subTitulo=subTitulo
      }
}
