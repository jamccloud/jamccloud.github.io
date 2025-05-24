// Stylesheet for the page.
import './Contact.css';

// Used to navigate pages.
import { useNavigate } from 'react-router-dom';

// React Spring is used to add animations and fluidity to the page.
import { animated, useSpring, useSpringRef, useChain } from '@react-spring/web';

function Contact() {

    // Function to navigate pages.
    const navigate = useNavigate();

    // Go back to the main menu.
    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className = 'page-contents'>
            <h1 className = 'page-title'>About Me</h1>
            <div className = 'box'>
                <p className = 'info'>
                    My name is Jordan.{<br />}
                    I am a senior studying Computer Science at Towson University.{<br />}
                    I built this website as an exercise, I find web development to be a fun experience.{<br />}{<br />}
                    Note: My preferred last name is McCloud, as I'm in the process of changing it{<br />} from my legal last name (Sykes).
                </p>
            </div>
            <h1 className = 'page-title'>Contact</h1>
            <div className = 'box'>
                <p className = 'info'>
                    <b>Email</b>: jordanamccloud@gmail.com{<br />}
                    <b>LinkedIn</b>: <a href = 'https://www.linkedin.com/in/jordanamccloud'>linkedin.com/in/jordanamccloud</a>
                </p>
            </div>
            <button className = 'back-button' data = 'Go Back' onClick = {goBack} />
        </div>
    );
}
export default Contact;