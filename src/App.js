import React, { PureComponent, Fragment } from 'react';
import StarryCanvas from './StarryCanvas';
import HomeHero from './HomeHero';
import InviteDetails from './InviteDetails';
import Footer from './Footer';
import Moon from './Moon';
import Clouds from './Clouds';

class App extends PureComponent {
    render() {
        return (
            <Fragment>
                <HomeHero />
                <InviteDetails />
                <Footer />
                <Moon />
                <Clouds />
                <StarryCanvas />
            </Fragment>
        );
    }
}

export default App;
