import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";

const useStyles = makeStyles((theme) => ({
    appbar: {
        position: "fixed",
        bottom: 0,
    },
    toolbar: {
        minHeight: theme.spacing(3),
        paddingLeft: theme.spacing(1),
    },
    noMarginPadding: {
        margin: 0,
        padding: 0,
        color: "lightgreen"
    },
}));

const BottomBar = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.appbar} position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="caption" display="block"  className={classes.noMarginPadding}>
                    <Typography variant="body3" display="inline" className={classes.noMarginPadding}>crudSatate:</Typography>
                    <Typography variant="body3" display="inline" className={classes.noMarginPadding}>formPath:</Typography>
                    <Typography variant="body3" display="inline" className={classes.noMarginPadding}>dataPath:</Typography>
                    <Typography variant="body3" display="inline" className={classes.noMarginPadding}>Mesaj</Typography>
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default BottomBar;

