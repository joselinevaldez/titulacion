export class Miembro {
    constructor(
        public nombre?:  string,
        public puesto?:  Date,
        public carrera?: string,
        public correo?: Date,
        public telefono?: string,
        public usuario?: string,
        public password?:string, 
        public role?:string  ,
        public fecha_alta?:Date,
        public fecha_baja?:Date,
        public estatus?:string,
        public _id?:string
    ){}

}