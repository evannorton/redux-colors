import React from 'react';
import './App.css';
import Modal from './components/Modal';

function App() {
  return (
    <div className="App">
      <button
        type="button"
        className="App__modal-button"
        onClick={() => console.log("show modal now")}
      >
        Show Modal
      </button>
      <Modal />
    </div>
  );
}

export default App;
