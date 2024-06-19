import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
    constructor(private readonly eventsService: EventsService) {}

    @Get()
    findAll(): CampusEvent[] {
        return this.eventsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number): CampusEvent {
        return this.eventsService.findOne(id);
    }

    @Post()
    create(@Body() body: any): any {}

    @Delete(':id')
    delete(id: number): any {}
}
