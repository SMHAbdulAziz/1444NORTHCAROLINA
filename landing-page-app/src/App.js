import React from 'react';
import LeadForm from './components/LeadForm';
import './styles/main.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" className="App-logo" />
      </header>
      <main>
        <h1>Welcome to Our Landing Page</h1>
        <LeadForm />
      </main>
    </div>
  );
}

export default App;