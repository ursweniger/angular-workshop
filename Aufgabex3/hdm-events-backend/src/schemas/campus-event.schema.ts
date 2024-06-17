import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
export class CampusEvent {
    @Prop(String)
    name: string;
    @Prop()
    description: string;
    @Prop()
    date: string;
    @Prop()
    location: string;
}


export const CampusEventSchema = SchemaFactory.createForClass(CampusEvent).set('toJSON', {
    virtuals: true
});