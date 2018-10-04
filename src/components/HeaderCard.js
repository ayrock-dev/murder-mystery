import React, { PureComponent } from 'react';

export default class HeaderCard extends PureComponent {
    constructor(props) {
        super(props);

        this.goToSignUp = this.goToSignUp.bind(this);
        this.goToFbEvent = this.goToFbEvent.bind(this);
    }

    goToSignUp() {
        window.open('https://goo.gl/forms/BCij5svd2iAvqZXT2', '_blank');
    }

    goToFbEvent() {
        window.open(
            'https://www.facebook.com/events/239440540081107',
            '_blank'
        );
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
                <button className="button is-info" onClick={this.goToSignUp}>
                    Sign Up
                </button>
                <button
                    className="button is-facebook"
                    onClick={this.goToFbEvent}
                >
                    <span className="icon is-medium">
                        <i class="fab fa-facebook" />
                    </span>{' '}
                    <span>Event</span>
                </button>
            </div>
        );
    }
}
