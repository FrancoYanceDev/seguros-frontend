import { AseguradoModel } from "src/app/asegurados/models/AseguradoModel";

export interface SeguroModel{
    Codigo: number;
    Nombre:string;
    SumaAsegurada: number;
    Prima: number;
    Asegurados: AseguradoModel[];
}