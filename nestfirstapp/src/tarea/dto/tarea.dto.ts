import {TareaStatus} from '../tarea.entity'
import { IsNotEmpty, IsString ,MinLength,IsOptional,IsIn} from 'class-validator'


export class CreateTareaDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title: string

    @IsString()
    description: string
   // status: TareaStatus
}

export class UpdateTareaDto{
    @IsString()
    @IsOptional()
    title?: string
    @IsString()
    @IsOptional()
    description?: string
    @IsString()
    @IsOptional()
    @IsIn([TareaStatus.PENDIENTE, TareaStatus.PENDIENTE,
    TareaStatus.EN_CURSO])
    status?: TareaStatus
}