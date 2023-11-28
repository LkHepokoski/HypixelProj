import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import '../styles/home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-overlay">
      <h1>Welcome to SkyBlock Stats!</h1>
      
        <p className="intro-paragraph">
          Explore valuable statistics for Hypixel SkyBlock, including floor profit/loss data, item prices, and more.
        </p>
        <p className="intro-paragraph">
          Our platform is open-source and community-driven. Report bugs, suggest features, or contribute to the code on GitHub.
        </p>
        <div>
          {/* Use Link component to create a hyperlink */}
          <h2>Featured Content</h2>
          <p className="feature-paragraph">
            Check out our <Link to="/floors" style={{ color: 'blue' }}>Floors</Link> page for a comprehensive analysis of profitable dungeon floors.
            <br/>Check out our <Link to="/floors/s" style={{ color: 'blue' }}>S+</Link> page for the most profitable floors for S+ runs.
            <br/>Check out our <Link to="/floors/nons" style={{ color: 'blue' }}>Non-S</Link> page for the most profitable floors for Non-S+ runs.
            <br/>Check out our <Link to="/floors/floordiff" style={{ color: 'blue' }}>FloorDiff</Link> page for difference between S+ and Non-S+ item drops.
            <br/>Check out our <Link to="/items" style={{ color: 'blue' }}>Items</Link> page for a comprehensive analysis of item prices.
            <br/>Check out our <Link to="/about" style={{ color: 'blue' }}>About</Link> page to learn more about us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;