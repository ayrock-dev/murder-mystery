import React, { PureComponent } from 'react';
import Lettering from './Lettering';

const PRE_TITLE = 'Murder Mystery at';
const TITLE = 'CEDAR GROVE';

class HomeHero extends PureComponent {
    constructor(props) {
        super(props);

        this.goToSignUp = this.goToSignUp.bind(this);
    }

    goToSignUp() {
        window.open('https://goo.gl/forms/BCij5svd2iAvqZXT2', '_blank');
    }

    render() {
        return (
            <div className="hero is-fullheight home-hero">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-mobile is-centered">
                            <h1 className="column is-narrow">
                                <span className="home-hero-subtitle">
                                    {PRE_TITLE}
                                </span>
                                <Lettering
                                    className="home-hero-title"
                                    text={TITLE}
                                />
                            </h1>
                        </div>
                        <div className="columns is-mobile is-centered">
                            <div className="column is-narrow">
                                <div className="field is-grouped">
                                    <div className="control">
                                        <button
                                            className="button is-link"
                                            onClick={this.goToSignUp}
                                        >
                                            Sign Up
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeHero;
