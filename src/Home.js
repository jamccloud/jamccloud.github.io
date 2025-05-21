/*
Written by Jordan A. McCloud.
Began development on May, 2025.
Purpose is to provide information about who I am, what I've worked on, and my contact information.
*/

// Stylesheet for the page.
import './Home.css';

// React Spring is used to add animations and fluidity to the page.
import { animated, useSpring } from '@react-spring/web';

// React app.
import { useState, useEffect } from 'react';

// Function initialized on page load.
function Home() {

  // Keeps track of whether or not an animation has loaded.
  // Ensures an animation only plays when the page is initialized.
  const [hasLoaded, setHasLoaded] = useState(false);
  
  // Animation hook.
  const props = useSpring({
    opacity: hasLoaded ? 1 : 0, // Fade in.
    transform: hasLoaded ? 'translateX(0px)' : 'translateX(-75px)',
  });

  // Trigger the animation.
  useEffect (() => {
    setHasLoaded(true);
  }, []);

  // Page contents.
  return (
    <animated.div className = 'page-contents' style = {props}>
      <h1 className = 'page-title'>Jordan McCloud</h1><hr />
      <div className = 'button-group'>
        <br /> {/* Break */}
        <button className = 'page-button' data = "Playground" />
        <br /> {/* Break */}
        <button className = 'page-button' data = "Education" />
        <br /> {/* Break */}
        <button className = 'page-button' data = "Projects" />
        <br /> {/* Break */}
        <button className = 'page-button' data = "About Me & Contact Info" />
        <br /> {/* Break */}
      </div>
    </animated.div>
  );
}

// Default export.
export default Home;