import { Imagen as MiImagen } from '../../data/interfaces/interfaces';
export interface Item {
    price?: string;
    precio?: string;
    rating?: '1' | '2' | '3'| '4' | '5';
    copagos?: string;
    category?: 'inferior' | 'intermedio' | 'superior';
    tags?: string[];
    hijosSolos?: string;
    name?: string;
    images?:string[];
    folletos?:string[];
    beneficios?:string[];
    clinicas?:string[];
    _id?: string;
    id: string;
    title: string;
    attributes: any[];
    thumbnail: string;
    item_id:string;

  }
  


