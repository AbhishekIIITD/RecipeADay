import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    phone: String,
});

const UserModel = mongoose.model('User', userSchema);

export { UserModel };