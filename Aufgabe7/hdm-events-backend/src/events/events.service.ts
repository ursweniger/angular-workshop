import { Injectable } from '@nestjs/common';
import CampusEvents from 'src/campus-events';

@Injectable()
export class EventsService {
    findAll(): any {
        return CampusEvents;
    }
}
