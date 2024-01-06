import mongoose from 'mongoose';

export type UserType = {
    _id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
};

const userSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    // password: {type: String, required: true},
    password: {type: String, required: true, minlength: 6},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
});

const User = mongoose.model<UserType>("User", userSchema);

export default User;