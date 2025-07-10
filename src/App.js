import React from "react";
import LeadForm from "./components/LeadForm";
import "./styles/main.css";
import logo from "./Logo.png";

function App() {
  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="1444 N CAROLINA Logo" className="logo" />
        <h1 className="headline">Welcome to Your Fresh Start in <span className="highlight-green">NORTH TEXAS</span></h1>
        <div className="address-bar">1444 NORTH CAROLINA AVE, LANCASTER, TX 75134</div>
      </header>
      <main>
        <section className="info-section">
          <div className="price-banner">$365,000 OBO <span className="sub">Seller is motivated and open to offers!</span></div>
          <h2 className="for-sale">FOR SALE BY OWNER</h2>
          <ul className="features-list">
            <li>4 Bedrooms / 2.5 Baths</li>
            <li>2,150 Square Feet</li>
            <li>Open Concept Layout</li>
            <li>Covered Patio</li>
            <li>Smart Sprinkler System</li>
          </ul>
          <div className="value-banner">More home, more land, more value – just minutes from Dallas.</div>
          <div className="comfort-banner">Modern living. Southern comfort. Priced to move.</div>
        </section>
        <section className="form-section">
          <h3>Find your family's happiness here... <span className="highlight-green">LANCASTER, TX</span></h3>
          <LeadForm />
        </section>
      </main>
      <footer className="footer">
        <div className="contact-block">
          <div className="company">HOUSE LOT & LAND SALES CO. LLC</div>
          <div>214-702-1519</div>
          <div>contactus@houselotandland.org</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
