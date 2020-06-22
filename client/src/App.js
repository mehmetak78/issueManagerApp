import React from 'react';
import {ThemeProvider, createMuiTheme, makeStyles} from '@material-ui/core/styles';
import TopMenu from "./components/TopMenu";
import MainContainer from "./components/MainContainer";
import ReflectedText from "./components/ReflectedText";
import BottomBar from "./components/BottomBar";

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

    return (
        <div className="App">
            <ThemeProvider  theme={theme}>
                <TopMenu/>
                <MainContainer>
                    <ReflectedText/>
                    {/*<Landing/>*/}
                </MainContainer>
                <BottomBar/>
            </ThemeProvider >
        </div>
    );
}

export default App;
