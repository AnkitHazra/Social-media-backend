import mongoose, { Schema } from "mongoose";

const subscriptionSchema= new mongoose.Schema({
    subscriber:{
        // one who is susbscribing
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    channel:{
        // one to whome 'subscriber' is subscribing
        type:Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true})

export const Subscription=mongoose.model("Subsciption",subscriptionSchema)

