
import { SeguroAsegurado } from "./SeguroAsegurado";

export interface AseguradoModel{
    Cedula:string;
    Nombre:string;
    Telefono:string;
    Edad:number;
    Seguros: SeguroAsegurado[];
}