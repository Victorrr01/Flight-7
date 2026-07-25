import React, { useEffect, useState } from 'react';
import './App.css';

const TRACKING_NUMBER = "(888) 888-8888";
const TRACKING_TEL = "8888888888";

const AIRLINES = [
  "Qantas Airways", "Aer Lingus", "Air Canada", "Fiji Airways", "Delta Airlines",
  "Lufthansa Airlines", "KLM Royal Dutch Airlines", "British Airways",
  "Virgin Atlantic Airlines", "Swiss Airways", "ITA Airways", "Singapore Airlines",
  "Air New Zealand", "Cathay Pacific", "United Airlines", "American Airlines",
  "Alaska Airlines", "Hawaiian Airlines", "Aero Mexico", "Korean Airlines",
  "Asiana Airlines", "Finn Air", "All Nippon Airways", "Japan Airlines",
  "LOT Polish", "EL AL Airlines", "Iberia Airlines", "Austrian Airlines",
  "Copa Airlines", "Scandinavian Airlines", "West Jet Airlines", "Eva Airways",
  "Lan Airlines", "Avianca Airlines", "TAP Portugal", "Philippine Airlines",
  "Latam Airlines"
];

export default function App() {
  const [utms, setUtms] = useState({});

  useEffect(() => {
    // Simple UTM/query-param capture using URLSearchParams
    const params = new URLSearchParams(window.location.search);
    const capturedUtms = {
      utm_source: params.get('utm_source'),
      utm_campaign: params.get('utm_campaign'),
      sub_id: params.get('sub-id')
    };
    
    setUtms(capturedUtms);
    // TODO: Wire capturedUtms into a call tracking platform or analytics service here
    // console.log("Captured UTM parameters:", capturedUtms);
  }, []);

  return (
    <div className="app-container">
      <div className="advertisement-label">Advertisement</div>

      {/* Hero Section */}
      <header className="hero">
        <div className="container text-center">
          <h1>Need to change or cancel your flight?</h1>
          <p className="subheadline">Skip the hold time — talk to an agent now. Full-service flight change & cancellation support by phone for major international airlines.</p>
          
          <a href={`tel:${TRACKING_TEL}`} className="cta-button primary">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span className="cta-text">
              <span className="mobile-only">Tap to Call</span>
              <span className="desktop-only">{TRACKING_NUMBER}</span>
            </span>
          </a>

          <div className="compliance-box mt-4">
            <p><strong>Independent Third-Party Travel Service:</strong> We are an independent assistance service and are NOT affiliated with, endorsed by, or sponsored by any airline listed on this page.</p>
            <p>By calling the number above, you consent to be connected with a live agent or an automated dialing system, and calls may be recorded or monitored for quality assurance.</p>
          </div>
        </div>
      </header>

      {/* Trust/Value Section */}
      <section className="benefits bg-surface">
        <div className="container grid-3">
          <div className="benefit-card">
            <h3>24/7 Phone Support</h3>
            <p>Get help around the clock. Recommended call hours: Mon-Sun 9:30am-6pm EST.</p>
          </div>
          <div className="benefit-card">
            <h3>Live Agent Assistance</h3>
            <p>Speak to a live agent specifically for flight changes & cancellations.</p>
          </div>
          <div className="benefit-card">
            <h3>Fast Connection</h3>
            <p>English-language phone support designed to get your reservation handled quickly.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <h4>Call</h4>
              <p>Dial {TRACKING_NUMBER} to connect with our support line.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h4>Speak to a live agent</h4>
              <p>Provide your reservation details to an English-speaking representative.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h4>Get your change or cancellation handled</h4>
              <p>We'll process your request efficiently over the phone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq bg-surface">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h4>Is this an airline's official site?</h4>
              <p>No. We are an independent third-party travel assistance service. We are not affiliated with, endorsed by, or sponsored by any specific airline.</p>
            </div>
            <div className="faq-item">
              <h4>What do I need to have ready before calling?</h4>
              <p>Please have your confirmation number, ticket number, and passenger details ready so our agents can quickly locate your reservation.</p>
            </div>
            <div className="faq-item">
              <h4>What are your operating hours?</h4>
              <p>Our phone line is available 24/7, with recommended hours for optimal support from Monday to Sunday, 9:30am - 6:00pm EST.</p>
            </div>
            <div className="faq-item">
              <h4>What can your agents handle?</h4>
              <p>Our live agents specialize strictly in flight changes and cancellations. We do not handle pure customer service inquiries.</p>
            </div>
            <div className="faq-item">
              <h4>What language is support provided in?</h4>
              <p>We currently offer English-language phone support only.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Airlines Covered Section */}
      <section className="airlines-covered">
        <div className="container">
          <h2 className="section-title">Major International Airlines Supported</h2>
          <p className="text-center mb-6">We provide change and cancellation assistance for passengers flying with the following carriers:</p>
          <div className="airlines-grid">
            {AIRLINES.map((airline, idx) => (
              <div key={idx} className="airline-item">{airline}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Call Button (Mobile) */}
      <div className="sticky-cta">
        <a href={`tel:${TRACKING_TEL}`} className="cta-button sticky">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <span>Call Now: {TRACKING_NUMBER}</span>
        </a>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <span className="separator">|</span>
            <a href="#terms">Terms of Use</a>
          </div>
          
          <div className="legal-text">
            <p id="privacy"><strong>Privacy Policy:</strong> We collect necessary reservation information over the phone to facilitate your requested changes. We may store phone numbers and session data for quality and compliance purposes. We do not sell your personal data without your explicit consent. To opt-out of future communications, please inform our agent during your call.</p>
            <p id="terms"><strong>Terms of Use:</strong> By using this service, you acknowledge that we are an independent booking/change service. Airline names are trademarks of their respective owners and are used for identification purposes only. Your call may be routed to a licensed travel agency partner. Standard call and text rates may apply based on your carrier.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
