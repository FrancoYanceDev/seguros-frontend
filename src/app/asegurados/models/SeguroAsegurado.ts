import { SeguroModel } from "src/app/seguros/models/SeguroModel";
import { AseguradoModel } from "./AseguradoModel";

export interface SeguroAsegurado{
    Id: number;
    SeguroCodigo: number;
    AseguradoCedula:string;
    Seguro?:SeguroModel;
    Asegurado?: AseguradoModel;
}