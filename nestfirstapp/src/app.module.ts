import { Module } from '@nestjs/common';
import { TareaModule } from './tarea/tarea.module';

@Module({
  imports: [TareaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
