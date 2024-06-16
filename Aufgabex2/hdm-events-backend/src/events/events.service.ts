import { Injectable } from '@nestjs/common';
import CampusEvents from 'src/campus-events';

@Injectable()
export class EventsService {

    findOne(id: number): CampusEvent {
        const event = CampusEvents.find((event) => event.id === Number(id));
        if (!event) throw new Error('Event not found.');

        return event;
    }

    findAll(): CampusEvent[] {
        return CampusEvents;
    }
}
