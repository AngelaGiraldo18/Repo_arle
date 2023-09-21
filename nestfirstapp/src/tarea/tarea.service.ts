import { Injectable } from '@nestjs/common';
import { Tarea,TareaStatus } from './tarea.entity';
import { v4 } from 'uuid'
import { UpdateTareaDto } from './dto/tarea.dto';

@Injectable()
export class TareaService {

    private tareas: Tarea[] = [
        {
            id:'1',
            title:'primera tarea',
            description:'Alguna tarea',
            status: TareaStatus.PENDIENTE
        }
    ]
    getAllTarea(){
        return  this.tareas;
    }
    createTarea(title:string,description:string){
        const tarea ={
            id:v4(),
            title,
            description,
            status: TareaStatus.PENDIENTE
        }
        this.tareas.push(tarea);

        return tarea;
    }
    deleteTarea(id:string){
        this.tareas = this.tareas.filter(tarea => tarea.id !== id)
    }
    getTareaById(id:string):Tarea{
        return this.tareas.find(tarea => tarea.id === id)
    }

    updateTarea(id:string, updateFields:UpdateTareaDto){
        const tarea = this.getTareaById(id)
        const newTarea = Object.assign(tarea, updateFields);
        this.tareas = this.tareas.map((tarea)=> (tarea.id === id ? newTarea : tarea ));
        return newTarea
    }
}
