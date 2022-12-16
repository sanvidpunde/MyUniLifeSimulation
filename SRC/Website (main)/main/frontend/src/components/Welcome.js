import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import {useSelector} from 'react-redux';

const Welcome = () => {

    const session = useSelector(state => state.session);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setOpen(true);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div className="welcome">
          {session && session.email == null &&
            <Modal
                open={open}
                onClose={handleClose}
                className="welcome_modal"
            >
                <div className="welcome_box">
                    <h3>Welcome to UniLife</h3>
                    <p>We aim to provide a one-stop portal for you to explore your dream course using our State-of-the-art AI Recommender System. By signing up and then using our system you will get summary of your data at the end.</p>
                    <Link to="/signup" className="take-test-button control-font" onClick={() => setOpen(false)}>Sign up now</Link>
                </div>
            </Modal>
          }
          
        </div>
      );
}

export default Welcome;