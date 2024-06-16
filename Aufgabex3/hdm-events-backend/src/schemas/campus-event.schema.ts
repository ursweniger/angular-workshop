import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CampusEventDocument = HydratedDocument<CampusEvent>;
@Schema()
export class CampusEvent {
    @Prop({ unique: true })
    id: number;
    @Prop([String])
    name: string;
    @Prop()
    description: string;
    @Prop()
    date: string;
    @Prop()
    location: string;
}

export const CampusEventSchema = SchemaFactory.createForClass(CampusEvent);