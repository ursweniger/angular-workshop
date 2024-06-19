import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [EventsModule, MongooseModule.forRoot('mongodb+srv://webapp:development@webapp.6mtwprv.mongodb.net/?retryWrites=true&w=majority&appName=webapp')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
