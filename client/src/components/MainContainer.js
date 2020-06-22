import React from 'react';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    mainContainer: {
        minHeight: theme.spacing(7),
        paddingLeft: theme.spacing(2),
        background: "black",
        height: `calc(100vh - ${theme.spacing(7)}px)`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
}));

const MainContainer = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.mainContainer}>
            {props.children}
        </div>
    );
};

export default MainContainer;