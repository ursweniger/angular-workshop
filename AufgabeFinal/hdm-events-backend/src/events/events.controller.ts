import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { EventsService } from './events.service';
import { CampusEvent } from 'src/schemas/campus-event.schema';
import { CreateCampusEventDto } from 'src/dto/createCampusEvent.dto';

@Controller('events')
export class EventsController {
    constructor(private readonly eventsService: EventsService) {}

    @Get()
    async findAll(): Promise<CampusEvent[]> {
        return this.eventsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<CampusEvent> {
        return this.eventsService.findOne(id);
    }

    @Post()
    async create(@Body() body: CreateCampusEventDto): Promise<CampusEvent> {
        return this.eventsService.create(body);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<any> {
        return this.eventsService.delete(id);
    }

    @Delete()
    async reset(): Promise<any>{
        return this.eventsService.reset();
    }
}
