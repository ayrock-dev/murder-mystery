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
import Toast from './Toast';

class App extends PureComponent {
    constructor(props) {
        super(props);

        let params = new URLSearchParams(this.props.location.search);

        const e = params.get('e');

        this.state = {
            toast: e === 'invalid'
        };

        this.closeToast = this.closeToast.bind(this);
    }

    closeToast() {
        this.setState({ toast: false });
    }

    render() {
        return (
            <Fragment>
                {this.state.toast && <Toast close={this.closeToast} />}
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
