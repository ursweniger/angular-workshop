import {Document} from 'mongoose';

interface CampusEvent extends Document {
    id: number;
    name: string;
    description: string;
    date: string;
    location: string;
}