import React, { PureComponent, Fragment } from 'react';
import StarryCanvas from './StarryCanvas';
import HomeHero from './HomeHero';
import HomeTaglineSection from './HomeTaglineSection';
import EventDetailsSection from './EventDetailsSection';
import EventRulesSection from './EventRulesSection';
import SignatureSection from './SignatureSection';
import Footer from './Footer';
import Moon from './Moon';
import Clouds from './Clouds';

class App extends PureComponent {
    render() {
        return (
            <Fragment>
                <HomeHero />
                <HomeTaglineSection />
                <EventDetailsSection />
                <EventRulesSection />
                <SignatureSection />
                <Footer />
                <Moon />
                <Clouds />
                <StarryCanvas />
            </Fragment>
        );
    }
}

export default App;
