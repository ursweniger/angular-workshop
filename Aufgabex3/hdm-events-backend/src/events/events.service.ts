import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {CampusEvent} from 'src/schemas/campus-event.schema';

@Injectable()
export class EventsService {
    constructor(@InjectModel(CampusEvent.name) private campusEventModel: Model<CampusEvent>) {}
    
    findOne(id: string): Promise<CampusEvent> {
        return this.campusEventModel.findById(id).exec();
    }

    findAll(): Promise<CampusEvent[]> {
        return this.campusEventModel.find().exec();
    }

    create(event: CampusEvent): Promise<CampusEvent> {
        const newEvent = new this.campusEventModel(event);
        return newEvent.save();
    }

    delete(id: string): Promise<CampusEvent> {
        console.log(id);
        return this.campusEventModel.findByIdAndDelete(id).exec();
    }
}
