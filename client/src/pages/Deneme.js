import React from 'react';
import Icon from "@material-ui/core/Icon";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import SvgIcon from "@material-ui/core/SvgIcon";

function MyHomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}


const Deneme = () => {
    return (
        <div>
            <span className="material-icons">
                alarm
            </span>
                <a href="https://material.io/resources/icons/?icon=alarm&style=baseline">Font Icons</a>
                <span className="material-icons">
                face
            </span>
                <Icon>star</Icon>
                <br/>
                <a href="https://material-ui.com/components/icons/#svgicon">Svg Icon</a>
                <AccessAlarmIcon/>
                <MyHomeIcon color="secondary" />
                <br/>
                <Button variant="contained" color="primary">
                    Hello World
                </Button>
                <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
        </div>
    );
};

export default Deneme;