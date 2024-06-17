import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import CampusEvents from 'src/campus-events';
import {CampusEvent} from 'src/schemas/campus-event.schema';

@Injectable()
export class EventsService {
    constructor(@InjectModel(CampusEvent.name) private campusEventModel: Model<CampusEvent>) {}
    
    async findOne(id: string): Promise<CampusEvent> {
        return this.campusEventModel.findById(id).exec();
    }

    async findAll(): Promise<CampusEvent[]> {
        return this.campusEventModel.find().exec();
    }

    async create(event: CampusEvent): Promise<CampusEvent> {
        const newEvent = new this.campusEventModel(event);
        return newEvent.save();
    }

    async delete(id: string): Promise<CampusEvent> {
        return this.campusEventModel.findByIdAndDelete(id).exec();
    }

    async reset(): Promise<any> {
        await this.campusEventModel.deleteMany({}).exec();
        return this.campusEventModel.insertMany(CampusEvents)
    }
}
