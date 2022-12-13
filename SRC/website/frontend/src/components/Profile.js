import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

const Profile = () => {

    const session = useSelector(state => state.session);
    const personality = useSelector(state => state.personality);
    const career = useSelector(state => state.career);
    const course = useSelector(state => state.course);

    useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

  return (
    <React.Fragment>
      <div className="header">
          <div className="container">
              <div className="header-text">Your Profile</div>
              <p>Get a summary of your simulation and your user account</p>
          </div>
      </div>
      <div className="p-60">
          <div className="container profile">
            <div className="title text-left">Your profile at a glance:</div>
            <div className="grey-border"></div>
            <p><strong>Name</strong>: {session.name}</p>
            <p><strong>Username</strong>: {session.username}</p>
            <p><strong>Email</strong>: {session.email}</p>
            <div className="mt-60"></div>
            <div className="title text-left">Results:</div>
            <div className="grey-border"></div>
            {/* {personality && personality.personality.length < 0 && career && !career.career.length < 0 && course && Array.isArray(course.course_suggested) &&
                <React.Fragment>
                    <p>Try taking personality test, Interest profiler test and Course Recommender and results will show here.</p>
                </React.Fragment>
            } */}
            {personality && personality.personality &&
                <React.Fragment>
                    <p><strong>Predicted Personality</strong>: {personality.personality}</p>
                </React.Fragment>
            }
            {career && career.career &&
                <React.Fragment>
                    <p><strong>Predicted Interest</strong>: {career.career}</p>
                </React.Fragment>
            }
            {course && course.course_suggested && course.course_suggested[0].title.length > 0 &&
                <React.Fragment>
                    <p><strong>Predicted Courses</strong>:</p>
                    <ol>
                        {course.course_suggested.map(item => {
                            return (
                                <li>{item.title}</li>
                            )
                        })}
                    </ol>
                </React.Fragment>
            }
            
          </div>
      </div>
      <div className="cta">
            <div className="container">
                <h2>Wish to start again?</h2>
                <Link to="/" className="cta_link">Let's Go!</Link>
            </div>
        </div>
    </React.Fragment>
  );
}

export default Profile;