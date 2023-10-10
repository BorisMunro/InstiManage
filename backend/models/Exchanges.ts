import mongoose from 'mongoose';
import bcrypt from 'bcrypt';


export interface IExchange extends mongoose.Document {
    exchangerMember: string,
    exchanger: string,
    openDate?: Date,
    closeDate?: Date,
    lastModifiedDate?: Date,
    accountBallance?: Number,
    status?: Date,
    createdAt: Date,
    updatedAt: Date,
    comparePassword(password: string): Promise<boolean>;
}

const ExchangeSchema = new mongoose.Schema({

    exchangerMember: {
        type: String,
        required: true,
    },

    exchanger: {
        type: String,
        required: true,
    },

    openDate: {
        type: Date,
    },
    closeDate: {
        type: Date,
    },
    lastModifiedDate: {
        type: Date,
    },
    accountBallance: {
        type: Number,
    },
    status: {
        type: 'string',
    }

}, {
    timestamps: true
});


const Exchange = mongoose.model<IExchange>("Exchange", ExchangeSchema);

export default Exchange;