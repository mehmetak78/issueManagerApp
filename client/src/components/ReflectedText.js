import React from 'react';
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import IconButton from "@material-ui/core/IconButton";

const ReflectedText = () => {
    return (
        <div className="reflected-text-container">
            <div className="wavy">
                <span style={{ "--i" : "1" }}>S</span>
                <span style={{ "--i" : "2" }}>a</span>
                <span style={{ "--i" : "3" }}>m</span>
                <span style={{ "--i" : "4" }}>p</span>
                <span style={{ "--i" : "5" }}>l</span>
                <span style={{ "--i" : "6" }}>e</span>
                <span style={{ "--i" : "7" }}>&nbsp;&nbsp;</span>
                <span style={{ "--i" : "8" }}>A</span>
                <span style={{ "--i" : "9" }}>p</span>
                <span style={{ "--i" : "10" }}>p</span>
                <span style={{ "--i" : "11" }}>.</span>
                <span style={{ "--i" : "12" }}>.</span>
                <span style={{ "--i" : "13" }}>.</span>
            </div>
        </div>
    );
};

export default ReflectedText;