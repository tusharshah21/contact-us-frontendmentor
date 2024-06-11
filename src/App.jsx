import React from 'react';
import './App.css';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="bg-[hsl(148,38%,91%)]">
        {/* <h1 className="text-3xl font-bold mb-6">Contact Us</h1> */}
        <ContactForm />
    </div>
  );
}

export default App;
