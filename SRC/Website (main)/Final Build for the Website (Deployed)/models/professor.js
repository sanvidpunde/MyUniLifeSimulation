import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const Schema = mongoose.Schema;

const professorSchema = new Schema({
	college: { type: String, required: true, unique: true },
	staff: { type: Array }
});

professorSchema.plugin(uniqueValidator);

export default mongoose.model('Professor', professorSchema);