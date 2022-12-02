import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const Schema = mongoose.Schema;

const courseSchema = new Schema({
	college: { type: String, required: true, },
    course: { type: String, required: true, },
	code: { type: String, required: true, unique: true },
	title: { type: String },
    course_type: { type: String },
    course_starts: { type: String },
    fees: { type: String },
    level: { type: String },
    award: { type: String },
    duration: { type: String },
    mode_of_study: { type: String },
    method_of_delivery: { type: String },
    location: { type: String },
    thumbnail_image_url: { type: String },
    website_url: { type: String },
    course_description: { type: String },
    course_content: { type: String },
    minimum_entry_requirements: { type: String },
    job_opportunities_and_salary_expectations: { type: String },
    clubs_and_societies_link: { type: String },
    workshops: { type: String },
    students_accomodation_link: { type: String }
});

courseSchema.plugin(uniqueValidator);

export default mongoose.model('Course', courseSchema);