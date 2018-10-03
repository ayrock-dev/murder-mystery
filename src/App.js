import React, { PureComponent, Fragment } from 'react';
import AppCanvas from './AppCanvas';
import HomeHero from './HomeHero';
import Moon from './Moon';
import Clouds from './Clouds';

class App extends PureComponent {
    render() {
        return (
            <Fragment>
                <HomeHero />
                <Moon />
                <Clouds />
                <AppCanvas />
            </Fragment>
        );
    }
}

export default App;
