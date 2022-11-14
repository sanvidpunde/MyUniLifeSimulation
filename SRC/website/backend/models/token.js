import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const Schema = mongoose.Schema;

const tokenSchema = new Schema({
	email: { type: String, required: true, unique: true },
	token: { type: String, required: true },
    time: { type: String, required: true }
});

tokenSchema.plugin(uniqueValidator);

export default mongoose.model('Token', tokenSchema);