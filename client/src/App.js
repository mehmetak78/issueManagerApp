import React from 'react';
import './App.css';
import {ThemeProvider, createMuiTheme, makeStyles} from '@material-ui/core/styles';
import TopMenu from "./components/TopMenu";
import Typography from "@material-ui/core/Typography";
import ReflectedText from "./components/ReflectedText";


const useStyles = makeStyles((theme) => ({
    main: {
        minHeight: theme.spacing(7),
        paddingLeft: theme.spacing(2),
        background: "black",
        height: `calc(100vh - ${theme.spacing(7)}px)`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
}));

function App() {
    const theme = createMuiTheme({
        palette: {
            type: "light",
            primary: {
                main: '#2e7d32',
                light: "#2e7d32",
                dark: "#2ead32",
                contrastText: "#fff"
            },
            secondary: {
                main: '#388e3c',
                light: "#ff4081",
                dark: "#38be3c",
                contrastText: "#fff"
            },
            text: {
                primary: '#2e7d32',
                secondary: "#388e3c",
                disabled: "rgba(0, 0, 0, 0.38)",
                hint: "rgba(0, 0, 0, 0.38)"
            },
        },
        typography: {
            useNextVariants: true,
            fontSize: 12,

            button: {
                fontSize: 14,
                fontWeight: 700,
                textTransform: "none"
            },
            h1: {
                fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif"',
                fontWeight: 600,
                fontSize: "2rem",
                lineHeight: 1,
                letterSpacing: "-0.01562em"
            }
        }
    });
    const classes = useStyles();
    return (
        <div className="App">
            <ThemeProvider  theme={theme}>
                <TopMenu/>
                <div className={classes.main}>
                    <ReflectedText/>
                </div>
            </ThemeProvider >
        </div>
    );
}

export default App;
