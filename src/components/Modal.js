import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { hideModal } from "../actions/modalAction";

function Modal(props) {
    const { handleHideModal } = props;
    return <div className="Modal">
        <div>I am a modal!</div>
        <button type="button" onClick={handleHideModal}>X</button>
    </div>;
}

Modal.propTypes = {
    handleHideModal: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(
    { handleHideModal: hideModal }, dispatch);

export default connect(null, mapDispatchToProps)(Modal);
