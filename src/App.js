import React, { PureComponent, Fragment } from 'react';
import StarryCanvas from './StarryCanvas';
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
                <StarryCanvas />
            </Fragment>
        );
    }
}

export default App;
