import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./App.css";
import { changeColors } from "./actions/colorAction";
import ColorSquare from "./components/ColorSquare";
import { toggleOrientation } from "./actions/orientationAction";
import amount from "./amount";

const App = ({ colors, handleChangeColors, handleToggleOrientation, row }) =>
    <div tabIndex={0} style={{ height: "100vh", width: "100%", display: "flex", flexDirection: row ? "row" : "column", overflow: "hidden" }} onKeyPress={handleChangeColors} onClick={handleToggleOrientation} className="App">
        {new Array(amount).fill(0).map((item, key) =>
            <ColorSquare key={key} color={colors[key]} />
        )}
    </div>

App.propTypes = {
    colors: PropTypes.array.isRequired,
    handleChangeColors: PropTypes.func.isRequired,
    handleToggleOrientation: PropTypes.func.isRequired,
    row: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    colors: state.color.colors,
    row: state.orientation.row
});

const mapDispatchToProps = dispatch => bindActionCreators({ handleChangeColors: changeColors, handleToggleOrientation: toggleOrientation }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);