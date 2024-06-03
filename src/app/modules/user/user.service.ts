import mongoose from "mongoose";
import { UserModel } from "./user.model";
import { TUser } from "./user.interface";

const newUsersIntoDB=async (user:TUser)=>{
    const result=await UserModel.create(user);
    return result;
};


export const UserServices={
    newUsersIntoDB
}
