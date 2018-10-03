import React, { PureComponent } from 'react';
import Lettering from './Lettering';
import HeaderCard from './HeaderCard';

const PRE_TITLE = 'Murder Mystery on';
const TITLE = 'CEDAR GROVE';

class HomeHero extends PureComponent {
    render() {
        return (
            <section className="hero is-fullheight home-hero">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-mobile is-narrow">
                                <h1>
                                    <span className="super-subtitle">
                                        {PRE_TITLE}
                                    </span>
                                    <Lettering
                                        className="super-title"
                                        text={TITLE}
                                    />
                                </h1>
                            </div>
                        </div>
                        <div className="columns is-centered">
                            <div className="column is-full-mobile is-half-desktop">
                                <HeaderCard className="sign-up" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HomeHero;
