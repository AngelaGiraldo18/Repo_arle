

export enum TareaStatus{
    PENDIENTE = 'PENDIENTE',
    EN_CURSO = 'EN_CURSO',
    HECHO = 'HECHO'
}

export class Tarea {
    id:string
    title:string
    description:string
    status: TareaStatus
}