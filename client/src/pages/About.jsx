// Import CSS file for styling 
import '../styles/about.css';

// Define a functional component named "About"
const About = () => {
  // This is the JSX code that represents the component's structure
  return (
    <div className="about-us">
        <div className="about-overlay">
        <h1>All About Us!</h1>
        
        <h4 className="about-text">
          <div>
            <p>
              This is a free open-source floor profit/loss viewer for Hypixel SkyBlock.
              <br />
              You can report bugs, suggest features, or contribute to the code on <a href="https://github.com/LkHepokoski/HypixelProj" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>GitHub</a>
              <br />
              Data: <a href="https://api.hypixel.net/" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>Hypixel API by Hypixel</a>
            </p>
          </div>
        </h4>
      </div>
    </div>
  );
}

// Export the "About" component as the default export of this module
export default About;