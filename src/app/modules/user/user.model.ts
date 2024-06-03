import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';

const userSchema=new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    needsPasswordChange: {
        type: Boolean,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'student', 'faculty'],
        default:'in-progress'
    },
    status: {
        type: String,
        enum: ['in-progress', 'blocked'],
        required: true
    },
    isDelete: {
        type: Boolean,
        required: true
    }
});


export const UserModel=model<TUser>('User',userSchema);