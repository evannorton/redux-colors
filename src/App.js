import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./App.css";
import { changeColors } from "./actions/colorAction";
import ColorSquare from "./components/ColorSquare";

const App = ({ colors, handleChangeColors }) =>
    <div style={{ display: "flex" }} onClick={handleChangeColors} className="App">
        <ColorSquare color={colors[0]} />
        <ColorSquare color={colors[1]} />
        <ColorSquare color={colors[2]} />
        <ColorSquare color={colors[3]} />
    </div>

App.propTypes = {
    colors: PropTypes.array.isRequired,
    handleChangeColors: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    colors: state.color.colors
});

const mapDispatchToProps = dispatch => bindActionCreators({ handleChangeColors: changeColors }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);