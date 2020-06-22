import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import logo from '../icons/logoMAK2.svg';
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({

    grow: {
        flexGrow: 1,
    },
    toolbar: {
        minHeight: theme.spacing(7),
        paddingLeft: theme.spacing(2),
    },
    sectionDesktop: {
        display: 'flex',
    },
    menuItem: {
        margin: 0,
        paddingLeft: theme.spacing(0.5),
        textAlign: "center",
        color: "lightgreen"
    },
}));
const TopMenu = () => {
    const classes = useStyles();
    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <a className="nav-brand" href="#"><img src={logo} alt="" /><span></span></a>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label="show 4 new mails" color="inherit">
                            <ExitToAppIcon style={{ color: "lightgreen" }}  />
                            <Typography className={classes.menuItem} variant="body2" display="block" gutterBottom>
                                Register
                            </Typography>
                        </IconButton>
                        <IconButton aria-label="show 4 new mails" color="inherit">
                            <LockOpenIcon style={{ color: "lightgreen" }}/>
                            <Typography className={classes.menuItem} variant="body2" display="block" gutterBottom>
                                Login
                            </Typography>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>

        </div>

    );
};

export default TopMenu;