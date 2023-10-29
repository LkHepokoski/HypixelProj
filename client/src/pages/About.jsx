// Import CSS file for styling 
import '../styles/about.css';

// Define a functional component named "About"
const About = () => {

    // This is the JSX code that represents the component's structure
    return (
        <div>
            <h2 style = {{color: "white" }}>
                All About Us! 
            </h2>
            <h4 style = {{color: "white"}}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </h4> 
        </div>
    );
}

// Export the "About" component as the default export of this module
export default About;