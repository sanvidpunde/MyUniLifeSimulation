import {RECEIVE_CURRENT_COURSE, UPDATE_CURRENT_COURSE} from '../util/controller';

const sample_structure = {
  course: "", code: "", title: "", course_type: "", course_starts: "", college: "", fees: "", level: "", award: "", duration: "", mode_of_study: "", method_of_delivery: "", commencement_date: "", location: "", thumbnail_image_url: "", website_url: "", course_description: "", course_content: "", minimum_entry_requirements: "", video: "", faculty_information: [], job_opportunities_and_salary_expectations: "", clubs_and_societies: "", course_reviews_and_testimonials: "", map_info: "", students_accomodation_link: "", clubs_and_societies_link: "", workshops: ""
}

const _nullSession = {
  course_suggested: [sample_structure, sample_structure, sample_structure, sample_structure, sample_structure],
  selected_course: sample_structure
};
const course = (state = _nullSession, { type, course }) => {
  Object.freeze(state);
  switch (type) {
    case RECEIVE_CURRENT_COURSE:
    	return course;
	case UPDATE_CURRENT_COURSE:
    	return course;
    default:
    	return state;
  }
};

export default course;