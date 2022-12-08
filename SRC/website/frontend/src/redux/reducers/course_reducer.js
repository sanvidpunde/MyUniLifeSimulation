import {RECEIVE_CURRENT_COURSE, UPDATE_CURRENT_COURSE} from '../util/controller';

const sample_structure = {
  course: "", code: "", title: "", course_type: "", course_starts: "", college: "Technological University Dublin", fees: "", level: "", award: "", duration: "", mode_of_study: "", method_of_delivery: "", commencement_date: "", location: "", thumbnail_image_url: "https://dummyimage.com/500x260/333/fff.jpg", website_url: "", course_description: "", course_content: "", minimum_entry_requirements: "", video: "", faculty_information: [], job_opportunities_and_salary_expectations: "", clubs_and_societies: "", course_reviews_and_testimonials: "", map_info: "", students_accomodation_link: "", clubs_and_societies_link: "", workshops: ""
}

const other_courses = [{
    college: "Technological University Dublin",
    course: "TU059 Computer Science  (Data Science)",
    code: "TU059",
    title: "Computer Science  (Data Science)",
    course_type: "Postgraduate",
    course_starts: "Sep-20",
    fees: 7000,
    level: "Level 9",
    award: "Master of Science",
    duration: "3 semesters",
    mode_of_study: "Full Time",
    method_of_delivery: "Classroom",
    commencement_date: "September",
    location: "Dublin",
    course_description: "The MSc in Computer Science (Data Science) course aims to produce graduates with the knowledge and skills to work with large amounts of raw data and extract meaningful insights from it.  Graduates are equipped with deep technical skills (in data management, data mining, probability and statistics, and machine learning), but also with the softer skills (in communications, research and problem solving) required to work effectively within organisations.",
    course_content: "Specialist Core Modules include Probability & Statistical Inference, Machine Learning, Working with Data, Data Management, Data Mining, Data Visualisation. Critical Skills Core Modules include Research Writing & Scientific Literature, Research Methods and Proposal Writing, Research Project & Dissertation or a Team Project. Optional Modules include Geographic Information Systems, Universal Design, Programming for Big Data, Problem Solving, Communication and Innovation, Social Network Analysis, User Experience Design, Deep Learning, Speech & Audio Processing",
    minimum_entry_requirements: "The minimum admission requirements for entry to the programme are a B.Sc. (Honours) in Computer Science, Software Development, Mathematics or other suitably numerate discipline with computing as a significant component. The degree should be at the level of Honours 2.1 or better or at Honours 2.2 or better with at least 2 years of Software Development work experience. Applicants with other qualifications at Honours 2.1 or better level and Software Development experience may also be considered. If English is not your first language you will need to provide evidence of your English language proficiency as detailed on our website. Applicants for this course should have a minimum IELTS (Academic Version) English Proficiency of 6.5 overall (or equivalent) with nothing less than 6 in each component. Note: Due to the considerable competition for our postgraduate courses satisfying the minimum entry requirement is not a guarantee of a place. Depending on the course of study applications will be assessed based on academic grades and any work/life experience. Applicants may also be required to attend for interview.",
    video: "https://youtu.be/wCc4enIHnhM",
    faculty_information_lecturer: "Damian, Andrea",
    faculty_information__lecturer_image_url: "https://www.tudublin.ie/explore/faculties-and-schools/",
    faculty_information__id: 1,
    job_opportunities_and_salary_expectations: "Data Science has been highlighted in a range of recent reports as an area of strategic importance both nationally and internationally. Areas in which opportunities for data analytics practitioners exist include retail, financial services, telecommunications, health, and government organisations. Specific roles include but are not limited to: Data Analytics Consultant, Data Scientist, Data Analyst, Data Architect, Database Administrator, Data Warehouse Analyst, Business Intelligence Developer, Business Intelligence Implementation Consultant, Business Analyst, Reporting Analyst.",
    map_info: "https://www.tudublin.ie/explore/our-campuses/campus-maps/",
    students_accomodation_link: "https://www.ucd.ie/residences",
    workshops: "https://www.tudublin.ie/explore/about-the-university/academic-affairs/teaching/events-workshops-and-academic-programmes/eventsandworkshops/"
   },
   {
    college: "Trinity College Dublin",
    course: "TR060 Biological and Biomedical Sciences",
    code: "TR060",
    title: "Biological and Biomedical Sciences",
    course_type: "Undergraduate",
    course_starts: "Sep-20",
    fees: 7332,
    level: "Level 8",
    award: "B.A. Honours Bachelor Degree",
    duration: " 4 Years",
    mode_of_study: "Full Time",
    method_of_delivery: "Face-to-Face",
    commencement_date: "September",
    location: "Dublin",
    website_url: "https://www.tcd.ie/",
    course_description: "Biology is the study of living things; we explore how life first arose: the properties that distinguish living organisms from inert matter; how the vast diversity of life forms was generated; how organisms reproduce themselves; how they interact both with each other and with the environment. Biology is fundamental to understanding the world we live in and plays a huge role in medicine.  Modern biological science is unravelling the mysteries of life; it is helping us to meet the challenge of illnesses such as dementia and cancer, to defend against new viruses and drug- resistant bacteria, and to protect ecosystems from climate change and other threats.",
    course_content: "In this stream, students will study the core concepts that are fundamental to all biological systems. These will be presented in core modules during the first and second year and will include: cell structure and composition, genetics and evolution, molecular biology, metabolism, anatomy and physiology of bacteria, fungi, plants and animals, ecosystems and environmental biology. In addition, students will also acquire mathematical, statistical and computational skills and study the history, philosophy and ethics of science. Students have the opportunity to expand their scientific knowledge and to pursue their individual interests by choosing from a variety of open modules including topics such as animal behaviour, genomes and disease, microbes and immunity, chemistry for biologists and geochemistry.  In the third year, students specialise in one of the 11 moderatorships offered in this stream: Biochemistry; Botany; Environmental Science; Genetics; Human Genetics; Immunology; Microbiology; Molecular Medicine; Neuroscience; Physiology; Zoology. The fundamental concepts of each discipline will be presented in core modules while students will also select from a variety of modules from allied disciplines that enhance understanding of their chosen discipline and encourage interdisciplinary thinking and research. Students can also experience the wide range of knowledge and investigation available throughout the university by choosing from a range of Trinity’s electives. In the fourth year students pick from a selection of modules on advanced topics within their discipline. They will also undertake a research project in Trinity or in a research laboratory in another university, research institute or hospital. Throughout this program, students will also acquire skills in problem solving and data handling and in oral and written communication.",
    "minimum_entry_requirements": "Leaving Certificate  H6 or O4 Mathematics  H4 In two of: Physics, Mathematics, Chemistry, Biology, Physics/Chemistry, Geology, Geography, Computer Science,  Applied Mathematics or Agricultural Science, computer science.  GCSE Grade B/6 Mathematics  Advanced GCE (A-Level)  Grade C in two of Physics, Chemistry, Biology, physics/chemistry, Geology, Geography,  applied mathematics, agricultural science, computer science.   International Baccalaureate  SL Grade 5 Mathematics  HL Grade 5 in two of physics, chemistry, biology, physics/chemistry. geology, geography, applied mathematics, agricultural science, computer science.  Combinations of subjects not permitted:  Physics/Chemistry with Physics or Chemistry  Agricultural Science with Biology  Applied Mathematics with Mathematics",
    video: "https://www.youtube.com/watch?v=BDJZc0Gyfj8",
    faculty_information_lecturer: "Ms. Olivia Waters",
    faculty_information__lecturer_image_url: "https://peoplefinder.tcd.ie/",
    faculty_information__id: 9,
    course_reviews_and_testimonials: "https://www.tcd.ie/students/clubs-societies/",
    map_info: "https://www.tcd.ie/Maps/",
    students_accomodation_link: "https://www.tcd.ie/accommodation",
    workshops: "https://student-learning.tcd.ie/workshops/"
   },
   {
    college: "Dublin City University",
    course: "DC194 Mechanical and Sustainability Engineering",
    code: "DC194",
    title: "Mechanical and Sustainability Engineering",
    course_type: "Undergraduate",
    course_starts: "Sep-20",
    fees: 6679,
    level: "Level 8",
    award: "BEng in Mechanical & Sustainability Engineering",
    duration: "4 Years",
    mode_of_study: "Full Time",
    method_of_delivery: "Face-to-Face",
    commencement_date: "September",
    location: "Dublin",
    website_url: "https://www.dcu.ie/",
    course_description: "This programme merges practical engineering with theory. It provides rigorous engineering training and will be accredited by Engineers Ireland, but it also encompasses extensive learning around climate and sustainability issues. If you care deeply about the environment, but would also like to finish university as a mechanical engineer with additional skills in sustainability, this is the perfect course for you.  State-of-the-art learning While a student on this course, you’ll use new technologies to learn through immersive challenge-based learning. You’ll also get plenty of hands-on experience in building and making mechanical systems in DCU’s cutting-edge engineering labs.  You also have the option to study a language and can spend some time studying overseas. All students also complete an INTRA work placement in third year.   Industry partners play an active role in creating and developing the course material, and will join in mentoring, workshops, challenge-based learning and other aspects of the course. They’re also always ready to share more about the extensive range of career opportunities that await mechanical engineers with sustainability expertise",
    course_content: "Year 1  Professional Development Project & Technical Drawing Software Development  Engineering Mechanics-Statics Electronics Numerical Problem Solving Materials Engineering Engineering Mathematics Basic Sciences for Engineering Year 1 Optional Subjects  French Multilingualism Spanish Year 2  Pollution & Biosphere Engineering Mathematics Mechanics of Machines Thermodynamics Electrical Power Electromechanical Systems Strength of Materials Design and Solid Modelling Thermofluid Mechanics Pneumatics  Data Analytics Physics of Renewable Energy Year 3  Engineering Mathematics Mechanics of Machines Signal Processing Project & Quality Management Product Design Fundamentals of Control Manufacturing Intra Work Placement (6 - 10 months) Year 4  System Simulation Materials & Manufacturing Processes Finite Element Analysis Fluid Mechanics Research Methods 4th Year Project",
    minimum_entry_requirements: "General Entry Requirements In addition to the general entry requirements for admission to the university the following entry requirements apply  Minimum of H4 Mathematics or H4 Applied Mathematics with H5 Mathematics  Leaving Cert In addition to the general entry requirements for admission to the university the following entry requirements apply  Minimum of H4 Mathematics or H4 Applied Mathematics with H5 Mathematics",
    video: "https://www.youtube.com/watch?v=ttts_0WJYnU",
    faculty_information_lecturer: "Dr James Lovatt",
    faculty_information__lecturer_image_url: "https://www.dcu.ie/eqi/people",
    faculty_information__id: 24,
    job_opportunities_and_salary_expectations: "There is huge demand for well-rounded mechanical engineers with a finely-tuned understanding of environmental standards and issues. As a graduate you will find employment not only in sectors such as transport and energy, but also across multiple sectors such as food and beverage, pharmaceuticals and semiconductors, in utilities, and in other design and manufacturing businesses where engineers are needed to design and maintain complex mechanical systems that are truly sustainable.  Engineering Ireland Our Engineering degree programmes have international recognition through agreements with Engineers Ireland. This enables graduates to practice as professional engineers in many countries, both in the EU and in the signatory countries to the Washington Accord.  Current signatories to the Washington Accord include: Australia, Canada, Hong Kong, Ireland (Engineers Ireland), Japan, New Zealand, Singapore, South Africa, The UK & The USA.     Career Prospects Process engineer Sustainability engineer Sustainable industrial designer Renewable energy engineer Energy audit engineer Project manager Energy analyst",
    course_reviews_and_testimonials: "https://dcuclubsandsocs.ie/",
    map_info: "https://www.dcu.ie/sites/default/files/safety/dcu_gla_site_plan_assembly_locations_030918.pdf",
    students_accomodation_link: "https://www.dcuaccommodation.ie/",
    workshops: "https://www.dcu.ie/library/library-classes-workshops"
   },
   {
    college: "University College Dublin",
    course: "DN150 Biomedical Engineering",
    code: "DN150",
    title: "Biomedical Engineering",
    course_type: "Undergraduate",
    course_starts: "Sep-20",
    fees: 7574,
    level: "Level 8",
    award: "BSc (Engineering Science) or BE (Hons)",
    duration: "3 Years (BSc) (Hons) + 2 Years (ME) or 4 Years (BE)",
    mode_of_study: "Full Time",
    method_of_delivery: "Face-to-Face",
    commencement_date: "September",
    location: "Dublin",
    website_url: "https://www.ucd.ie/",
    course_description: "Biomedical Engineering involves the application of traditional engineering principles to healthcare and medicine. We can think of the brain and nervous system as a large communication system, which co-ordinates and transmits signals around the body, and the organs and limbs as sophisticated engineering systems that control functions such as movement, respiration and blood ﬂow.  UCD Biomedical Engineers are educated with a strong foundation in electrical, electronic and mechanical engineering, which is complemented by an understanding of physiology and anatomy. This foundation is applied to problems in medicine and healthcare in specialised modules such as Biomechanics, Medical Device Design, Neural Engineering, Rehabilitation Engineering and Cell Culture & Tissue Engineering. If you are interested in developing new medical techniques, systems and devices, and you want to be involved in the breakthroughs that are improving the healthcare system for doctors and patients every day, then this is the course for you.",
    course_content: "First Year Engineering students follow a common first year. Modules include:  Chemistry Creativity in Design Electrical/Electronic Engineering Energy Engineering Engineering Computing Mathematics Mechanics Physics. Second to Fifth Year  Sample modules for Biomedical Engineering students include:  Bioinstrumentation Biomechanics Biomaterials Neural Engineering Biomechanics of Cells & Tissues Cell Culture & Tissue Engineering Biosignal Processing Medical Device Design Rehabilitation Engineering Medical Sciences for Engineers Introduction to Physiology Electrical & Electronic Circuits Computer Engineering Electromagnetics Control Theory Mechanics of Fluids Mechanics of Solids Applied Physics Applied Dynamics Medical Sciences for Biomedical Engineers.",
    minimum_entry_requirements: "EU applicants must meet the same minimum entry requirements as Irish school-leavers. As the number of applicants generally exceeds the number of places available, admission is competitive based on a points system. A-level applicants please see the separate page for A-level.  For information about how the entry requirements equate to the school-leaving qualifications from your country, please see the Agreed entry requirements criteria for EU/EFTA applicants.  English is the teaching language of the university so all applicants must show proficiency in English.",
    video: "https://www.youtube.com/watch?v=wsuwy9xjTj0",
    faculty_information_lecturer: "studenthelp@dcu.ie",
    faculty_information__lecturer_image_url: "N/A",
    faculty_information__id: 2,
    job_opportunities_and_salary_expectations: "Graduates can find employment in:  The Medical Technologies Industries Pharmaceutical Industries Medical Device Design Rehabilitation Engineering Device Manufacturing Regulation Engineering Consultancy Graduates can also pursue a taught or research Master’s degree in Biomedical Engineering. You can study for a PhD and work with some of the world’s leading experts on ground-breaking research.",
    course_reviews_and_testimonials: "https://www.ucd.ie/sportandsocieties.htm",
    map_info: "https://ucdestates.ie/information/ucd-maps/",
    students_accomodation_link: "https://www.ucd.ie/residences",
    workshops: "https://www.ucd.ie/innovation/researchers-and-students/commercialisation-bootcamp/workshops/#:~:text=The%20next%202022%20UCD%20Commercialisation,UCD%20Knowledge%20Transfer%20Case%20Managers."
   }];

const _nullSession = {
  course_suggested: sample_structure,
  other_courses: other_courses,
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