import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const Schema = mongoose.Schema;

const traitSchema = new Schema({
	personality: { type: String, required: true, unique: true },
	description: { type: String },
	characteristics_of_personality: { type: Array },
	common_traits: { type: Array },
	what_can_be_improved: { type: Array },
	word_of_advice: { type: String },
	effects_of_personality: { type: String }
});

traitSchema.plugin(uniqueValidator);

export default mongoose.model('Trait', traitSchema);