import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage1 from "./pages/LandingPage1";
import LandingPage2 from "./pages/LandingPage2";
import PsychometricTest from "./pages/PsychometricTest";
import PsychometricTestOutput from "./pages/PsychometricTestOutput";
import CourseFinder from "./pages/CourseFinder";
import OutputOfTheRecommendor from "./pages/OutputOfTheRecommendor";
import PreferenceOutput from "./pages/PreferenceOutput";
import ExploreYourCourse from "./pages/ExploreYourCourse";
import YourClassrooms from "./pages/YourClassrooms";
import OurProfessors from "./pages/OurProfessors";
import VideoLecturesByProfessors from "./pages/VideoLecturesByProfessors";
import AcademicsPage from "./pages/AcademicsPage";
import ClubsAndSocieties from "./pages/ClubsAndSocieties";
import ComputerScienceSociety from "./pages/ComputerScienceSociety";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/landing-page-2":
        title = "";
        metaDescription = "";
        break;
      case "/psychometric-test":
        title = "";
        metaDescription = "";
        break;
      case "/psychometric-test-output":
        title = "";
        metaDescription = "";
        break;
      case "/course-finder":
        title = "";
        metaDescription = "";
        break;
      case "/output-of-the-recommendor":
        title = "";
        metaDescription = "";
        break;
      case "/preference-output":
        title = "";
        metaDescription = "";
        break;
      case "/explore-your-course":
        title = "";
        metaDescription = "";
        break;
      case "/your-classrooms":
        title = "";
        metaDescription = "";
        break;
      case "/our-professors":
        title = "";
        metaDescription = "";
        break;
      case "/video-lectures-by-professors":
        title = "";
        metaDescription = "";
        break;
      case "/academics-page":
        title = "";
        metaDescription = "";
        break;
      case "/clubs-and-societies":
        title = "";
        metaDescription = "";
        break;
      case "/computer-science-society":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage1 />} />

      <Route path="/landing-page-2" element={<LandingPage2 />} />

      <Route path="/psychometric-test" element={<PsychometricTest />} />

      <Route
        path="/psychometric-test-output"
        element={<PsychometricTestOutput />}
      />

      <Route path="/course-finder" element={<CourseFinder />} />

      <Route
        path="/output-of-the-recommendor"
        element={<OutputOfTheRecommendor />}
      />

      <Route path="/preference-output" element={<PreferenceOutput />} />

      <Route path="/explore-your-course" element={<ExploreYourCourse />} />

      <Route path="/your-classrooms" element={<YourClassrooms />} />

      <Route path="/our-professors" element={<OurProfessors />} />

      <Route
        path="/video-lectures-by-professors"
        element={<VideoLecturesByProfessors />}
      />

      <Route path="/academics-page" element={<AcademicsPage />} />

      <Route path="/clubs-and-societies" element={<ClubsAndSocieties />} />

      <Route
        path="/computer-science-society"
        element={<ComputerScienceSociety />}
      />
    </Routes>
  );
}
export default App;
