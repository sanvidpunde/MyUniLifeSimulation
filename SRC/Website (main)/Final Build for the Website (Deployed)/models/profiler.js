import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const Schema = mongoose.Schema;

const profilerSchema = new Schema({
	career: { type: String, required: true, unique: true },
	job_role: { type: String, required: true },
	career_interests: { type: String },
	career_motivators: { type: String },
	abstract_reasoning: { type: String },
	numerical_reasoning: { type: String },
	verbal_reasoning: { type: String },
	job_description: { type: String },
	duties: { type: Array },
	employers: { type: Array },
	skills_required: { type: Array }
});

profilerSchema.plugin(uniqueValidator);

export default mongoose.model('Profiler', profilerSchema);