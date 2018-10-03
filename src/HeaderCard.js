import React, { PureComponent } from 'react';

export default class HeaderCard extends PureComponent {
    constructor(props) {
        super(props);

        this.goToSignUp = this.goToSignUp.bind(this);
    }

    goToSignUp() {
        window.open('https://goo.gl/forms/BCij5svd2iAvqZXT2', '_blank');
    }

    render() {
        return (
            <div
                className={`header-card has-text-centered ${
                    this.props.className
                }`}
            >
                <h3 className="title">
                    Nov 3<sup>rd</sup>
                </h3>
                <button className="button is-primary" onClick={this.goToSignUp}>
                    Sign Up
                </button>
            </div>
        );
    }
}
