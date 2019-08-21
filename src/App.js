import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './App.css';
import Modal from './components/Modal';

function App(props) {
  const { displayModal } = props;
  return (
    <div className="App">
      <button
        type="button"
        className="App__modal-button"
        onClick={() => console.log("show modal now")}
      >
        Show Modal
      </button>
      {displayModal && <Modal />}
    </div>
  );
}

App.propTypes = {
  displayModal: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  displayModal: state.modal.display
});

export default connect(mapStateToProps)(App);
