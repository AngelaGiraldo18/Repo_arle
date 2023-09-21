import { Body, Controller,Delete,Get, Param, Post , Patch } from '@nestjs/common';
import {TareaService} from './tarea.service'
import { CreateTareaDto, UpdateTareaDto} from './dto/tarea.dto'

@Controller('tarea')
export class TareaController {

    constructor(private tareaService: TareaService){}

    @Get()
    getAllTarea(){
        return this.tareaService.getAllTarea()
    }

    @Post()
    createTarea(@Body() newTarea: CreateTareaDto){
        return this.tareaService.createTarea(newTarea.title, newTarea.description);       
    }

    @Delete(':id')
    deleteTarea(@Param('id') id: string){
        return this.tareaService.deleteTarea(id)
    }

    @Patch(":id")
    updateTarea(@Param("id") id:string, @Body() updatedFields:UpdateTareaDto){
        return this.tareaService.updateTarea(id, updatedFields)
    }
}
