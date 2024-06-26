import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { LoggerMiddleware } from 'src/logger/logger.middleware';

@Module({
  providers: [EventsService],
  controllers: [EventsController]
})
export class EventsModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
     .apply(LoggerMiddleware)
     .forRoutes({path: 'events', method: RequestMethod.GET});
   }
}
