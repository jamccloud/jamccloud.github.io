/*
Written by Jordan A. McCloud.
Began development on May, 2025.
Purpose is to provide information about who I am, what I've worked on, and my contact information.
*/

// Stylesheet for the page.
import './Home.css';

// React Spring is used to add animations and fluidity to the page.
import { animated, useSpring, useSpringRef, useChain } from '@react-spring/web';

// React app.
import { useState, useEffect, useRef } from 'react';

// Used to navigate pages.
import { useNavigate } from 'react-router-dom';

// Function initialized on page load.
function Home() {

  // Function to navigate pages.
  const navigate = useNavigate();

  // Keeps track of whether or not an animation has loaded.
  // Ensures an animation only plays when the page is initialized.
  const [hasLoaded, setHasLoaded] = useState(false);

  // Used for sequential animations.
  const titleRef = useSpringRef();
  const buttonsRef = useSpringRef();
  
  // Animation hook.
  const props = useSpring({
    opacity: hasLoaded ? 1 : 0, // Fade in.
    transform: hasLoaded ? 'translateX(0px)' : 'translateX(-75px)',
  });

  // Keeps track of the current status of the playground feature.
  const playgroundTitle = 'Playground';
  const [playgroundText, setPlaygroundText] = useState(playgroundTitle);
  let isPlaygroundFinished = false;

  // Keeps track of the current status of the education feature.
  const educationTitle = 'Education';
  const [educationText, setEducationText] = useState(educationTitle);
  let isEducationFinished = false;

  // Keeps track of the current status of the projects feature.
  const projectsTitle = 'Projects';
  const [projectsText, setProjectsText] = useState(projectsTitle);
  let isProjectsFinished = false;

  // Keeps track of the current status of the contact feature.
  const contactTitle = 'About Me & Contact Info';
  const [contactText, setContactText] = useState(contactTitle);
  let isContactFinished = true;

  // Trigger the animation.
  useEffect (() => {
    setHasLoaded(true);
  }, []);

  // Function to respond when playground button is clicked.
  const handlePlayground = () => {
    if(!isPlaygroundFinished) {
      resetAll();
      setPlaygroundText('Coming Soon!');
      // Set back after 3 seconds.
      setTimeout(() => {
        setPlaygroundText(playgroundTitle);
      }, 1000);
    }
  }

  // Function to respond when education button is clicked.
  const handleEducation = () => {
    if(!isEducationFinished) {
      resetAll();
      setEducationText('Coming Soon!');
      // Set back after 3 seconds.
      setTimeout(() => {
        setEducationText(educationTitle);
      }, 1000);
    }
  }

  // Function to respond when playground button is clicked.
  const handleProjects = () => {
    if(!isProjectsFinished) {
      resetAll();
      setProjectsText('Coming Soon!');
      // Set back after 3 seconds.
      setTimeout(() => {
        setProjectsText(projectsTitle);
      }, 1000);
    }
  }

  // Function to respond when playground button is clicked.
  const handleContact = () => {
    if(!isContactFinished) {
      resetAll();
      setContactText('Coming Soon!');
      // Set back after 3 seconds.
      setTimeout(() => {
        setContactText(contactTitle);
      }, 1000);
    } else {
      navigate('/contact');
    }
  }

  // Reset all buttons to their original name.
  const resetAll = () => {
    setPlaygroundText(playgroundTitle);
    setEducationText(educationTitle);
    setProjectsText(projectsTitle);
    setContactText(contactTitle);
  }

  // Page contents.
  return (
    <animated.div className = 'page-contents' style = {props}>
      {/* Disclaimer at top of page */}
      <p className = "page-disclaimer">Disclaimer: This site is a work in progress!</p>
      {/* My name */}
      <h1 className = 'page-title'>Jordan McCloud</h1><hr />
      {/* Option buttons */}
      <div className = 'button-group'>
        <br /> {/* Break */}
        <button className = 'page-button' data = {playgroundText} onClick = {handlePlayground} />
        <br /> {/* Break */}
        <button className = 'page-button' data = {educationText} onClick = {handleEducation} />
        <br /> {/* Break */}
        <button className = 'page-button' data = {projectsText} onClick = {handleProjects} />
        <br /> {/* Break */}
        <button className = 'page-button' data = {contactText} onClick = {handleContact} />
        <br /> {/* Break */}
      </div>
    </animated.div>
  );
}

// Default export.
export default Home;